/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {
  Loader2,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  Clock,
  Globe,
} from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZHVyYWJsZSIsImEiOiJjbGJjOHV1bHUwcjM5M3huOHdoZXdkdDRsIn0.geBkTZ4KBXWb669GQBr8rw";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [3.3792, 6.5244],
      zoom: 13,
    });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const company = formData.get("company");
    const referral = formData.get("referral");

    const formDetails = {
      name,
      email,
      phone,
      message,
      company,
      referral,
    };

    try {
      setLoading(true);
      const res = await axios.post(
        "https://app.proforms.top/f/pr45a06a7",
        formDetails
      );
      if (res.status === 200) {
        toast.success("✅ Message sent successfully!", {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
        // Reset form
        event.currentTarget.reset();
      }
    } catch (error) {
      toast.error("❌ Failed to send message. Please try again.", {
        autoClose: 5000,
        theme: "light",
      });
      console.log("error submitting form:", error);
    } finally {
      setLoading(false);
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      content:
        "Plot QFF 10, Ibafon Street\nOff Apapa-Oshodi Expressway\nLagos, Nigeria",
      color: "from-red-600 to-orange-600",
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+234 805 409 4450",
      href: "tel:+2348054094450",
      color: "from-green-600 to-emerald-600",
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "pacificsafety2020@yahoo.com",
      href: "mailto:pacificsafety2020@yahoo.com",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content:
        "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 2:00 PM",
      color: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/images/boat-men.jpg"
          alt="Contact Pacific Safety Solution"
          priority
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-indigo-800/90" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <MessageSquare className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                Get In Touch
              </span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              We&apos;re here to help with all your marine safety needs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Contact Info Cards */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-gray-700 hover:text-indigo-700 transition-colors whitespace-pre-line text-sm"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-700 whitespace-pre-line text-sm">
                    {info.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form and Info Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Additional Info */}
            <div>
              <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-8 lg:p-10 text-white h-full">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">
                    Let&apos;s Work Together
                  </h2>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Whether you need LSA/FFA inspection, equipment supply, or
                    fiberglass repairs, our team is ready to assist you with
                    professional marine safety solutions.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Call Us</p>
                      <a
                        href="tel:+2348054094450"
                        className="text-white/90 hover:text-white"
                      >
                        +234 805 409 4450
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email Us</p>
                      <a
                        href="mailto:pacificsafety2020@yahoo.com"
                        className="text-white/90 hover:text-white break-all"
                      >
                        pacificsafety2020@yahoo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Visit Us</p>
                      <p className="text-white/90">
                        Plot QFF 10, Ibafon Street
                        <br />
                        Off Apapa-Oshodi Expressway
                        <br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm text-white/80">
                    Service coverage across West and Central Africa including
                    Nigeria, Ghana, Togo, Benin, and more.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon
                  as possible
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+234 xxx xxx xxxx"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Your Company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      How did you hear about us? *
                    </label>
                    <select
                      name="referral"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="web-search">Web Search</option>
                      <option value="facebook">Facebook</option>
                      <option value="press-ad">Press Advertisement</option>
                      <option value="referral">Referral</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      maxLength={500}
                      placeholder="Tell us about your needs..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all resize-none"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Maximum 500 characters
                    </p>
                  </div>

                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="relative h-[500px] lg:h-[600px]">
        <div className="absolute inset-0 w-full h-full" id="map" />

        <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
          <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl max-w-md border border-gray-200 pointer-events-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
            </div>
            <p className="text-gray-700 font-medium mb-2">
              Plot QFF 10, Ibafon Street
            </p>
            <p className="text-gray-600 text-sm">
              Off Apapa-Oshodi Expressway
              <br />
              Lagos, Nigeria
            </p>
            <a
              href="https://maps.google.com/?q=6.5244,3.3792"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-indigo-700 font-semibold hover:text-indigo-800 transition-colors"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
