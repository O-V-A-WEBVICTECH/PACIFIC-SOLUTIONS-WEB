"use client";
import Image from "next/image";
import { useState, FormEvent } from "react";
import { Loader2, FileText, Send } from "lucide-react";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false);

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const country = formData.get("country");
    const companyName = formData.get("companyName");
    const vesselName = formData.get("vesselName");
    const streetAddress = formData.get("streetAddress");
    const city = formData.get("city");
    const month = formData.get("month");
    const day = formData.get("day");
    const year = formData.get("year");
    const comments = formData.get("comments");
    const service = formData.get("service");

    const formDetails = {
      name,
      email,
      phone,
      country,
      companyName,
      vesselName,
      streetAddress,
      city,
      month,
      day,
      year,
      service,
      comments,
    };

    try {
      setLoading(true);
      const res = await fetch("https://app.proforms.top/f/pr45a06a7", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formDetails),
      });
      console.log("submission data:", res);
      if (res.status === 200) {
        alert("Form Submitted Successfully!");
        event.currentTarget.reset();
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/images/boat-2.webp"
          alt="Repair and Services Request"
          priority
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-indigo-800/90" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <FileText className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                Request Service
              </span>
            </div>
            <h1 className="text-2xl lg:text-6xl font-bold text-white mb-4 px-4">
              Repair/Services Request Form
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              Fill out the form below and we&apos;ll get back to you promptly
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Get in Touch
              </h2>
              <p className="text-gray-600">
                Please provide your details and service requirements below
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Your Name (required) */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Your Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Company&apos;s Name
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  type="text"
                  className="block w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                  placeholder="Enter company name (optional)"
                />
              </div>

              {/* Vessel/Boat Name */}
              <div>
                <label
                  htmlFor="vesselName"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Vessel/Boat Name
                </label>
                <input
                  id="vesselName"
                  name="vesselName"
                  type="text"
                  className="block w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                  placeholder="Enter vessel name (optional)"
                />
              </div>

              {/* Email (required) */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="block w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone (required) */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  required
                  className="block w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>

              {/* Address Fields Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Street Address */}
                <div>
                  <label
                    htmlFor="streetAddress"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    Street Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="streetAddress"
                    name="streetAddress"
                    type="text"
                    required
                    className="block w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                    placeholder="Enter street address"
                  />
                </div>

                {/* City */}
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-semibold text-gray-900 mb-2"
                  >
                    City <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    className="block w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                    placeholder="Enter city"
                  />
                </div>
              </div>

              {/* Country (required) */}
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Country <span className="text-red-600">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  className="block w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                >
                  <option value="">Select country</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="United States of America (USA)">
                    United States
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  {/* Include all countries from original */}
                </select>
              </div>

              {/* Type of service (required) */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Type of Service <span className="text-red-600">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="block w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all"
                >
                  <option value="">Select service</option>
                  <option value="Fiberglass Repairs">Fiberglass Repairs</option>
                  <option value="Marine Safety Equipment & Ship Maintenance Parts">
                    Marine Safety Equipment & Ship Maintenance Parts
                  </option>
                  <option value="Calibration of equipment">
                    Calibration of equipment
                  </option>
                  <option value="Inflatable Liferaft Rental">
                    Inflatable Liferaft Rental
                  </option>
                  <option value="Foam Analysis and Air quality test">
                    Foam Analysis and Air quality test
                  </option>
                  <option value="LSA/FFA Inspection and Re-Certification">
                    LSA/FFA Inspection and Re-Certification
                  </option>
                </select>
              </div>

              {/* Date Service Required */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  Date Service Required <span className="text-red-600">*</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="month"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Month
                    </label>
                    <input
                      id="month"
                      name="month"
                      type="number"
                      min={1}
                      max={12}
                      placeholder="01"
                      required
                      className="block w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="day"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Day
                    </label>
                    <input
                      id="day"
                      name="day"
                      type="number"
                      min={1}
                      max={31}
                      placeholder="01"
                      required
                      className="block w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="year"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Year
                    </label>
                    <input
                      id="year"
                      name="year"
                      type="number"
                      min={2024}
                      placeholder="2025"
                      required
                      className="block w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Comments */}
              <div>
                <label
                  htmlFor="comments"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Comments or Additional Details
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  rows={6}
                  className="block w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none transition-all resize-none"
                  placeholder="Please provide any additional information..."
                />
              </div>

              {/* reCAPTCHA placeholder */}
              <div className="rounded-xl border-2 border-dashed border-gray-300 p-6 bg-gray-50">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Note:</span> reCAPTCHA
                  verification
                </p>
              </div>

              {/* Submit */}
              <button
                disabled={loading}
                type="submit"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 py-4 font-semibold text-white hover:shadow-xl hover:scale-[1.02] disabled:opacity-60 transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Request
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info Cards */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Need Immediate Assistance?
              </h3>
              <p className="text-white/90 mb-6">
                Contact us directly for urgent service requests
              </p>
              <div className="space-y-3">
                <p>
                  <span className="font-semibold">Phone:</span> +234 805 409
                  4450
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  info@pacificsafetysolutionsltd.com
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Operating Hours</h3>
              <p className="text-white/90 mb-6">We&apos;re here to serve you</p>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Mon-Fri:</span> 8:00 AM - 6:00
                  PM
                </p>
                <p>
                  <span className="font-semibold">Saturday:</span> 9:00 AM -
                  2:00 PM
                </p>
                <p>
                  <span className="font-semibold">Sunday:</span> Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
