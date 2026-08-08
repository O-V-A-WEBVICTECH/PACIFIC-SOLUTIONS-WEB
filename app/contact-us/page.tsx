/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Loader2, MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZHVyYWJsZSIsImEiOiJjbGJjOHV1bHUwcjM5M3huOHdoZXdkdDRsIn0.geBkTZ4KBXWb669GQBr8rw";

    new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [3.3792, 6.5244],
      zoom: 13,
    });
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formDetails = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      company: formData.get("company"),
      referral: formData.get("referral"),
    };

    try {
      setLoading(true);
      const res = await axios.post("https://app.proforms.top/f/pr45a06a7", formDetails);
      if (res.status === 200)
        toast("✅ Message sent!", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          theme: "light",
        });
    } catch (error) {
      toast("Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[220px] lg:h-[360px] overflow-hidden">
        <Image
          width={1600}
          height={600}
          src="/images/boat-men.jpg"
          alt="Contact Pacific Safety Solution"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
          <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">
            Get in Touch
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact section */}
      <main className="container mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left — info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Let&apos;s talk</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Reach out for enquiries on marine safety equipment, LSA/FFA
                services, or any of our other offerings. Our team is ready to help.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-[#5200f5]/10 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-[#5200f5]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Address</p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Plot QFF 10, Ibafon Street,<br />
                    Off Apapa-Oshodi Expressway,<br />
                    Lagos, Nigeria.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-[#5200f5]/10 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-[#5200f5]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Phone</p>
                  <a href="tel:+2348054094450" className="text-sm text-slate-700 hover:text-[#5200f5] transition-colors">
                    +234 805 409 4450
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="w-9 h-9 rounded-lg bg-[#5200f5]/10 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[#5200f5]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Email</p>
                  <a href="mailto:pacificsafety2020@yahoo.com" className="text-sm text-slate-700 hover:text-[#5200f5] transition-colors block">
                    pacificsafety2020@yahoo.com
                  </a>
                  <a href="mailto:info@pacificsafetysolutionltd.com" className="text-sm text-slate-700 hover:text-[#5200f5] transition-colors block mt-0.5">
                    info@pacificsafetysolutionltd.com
                  </a>
                </div>
              </div>

              <Link
                href="https://wa.me/message/TZVHNBSFMPKUM1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-100 hover:bg-green-100 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <FaWhatsapp size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">WhatsApp</p>
                  <p className="text-sm text-slate-700 font-medium">Chat with us directly</p>
                </div>
              </Link>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6 lg:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Phone <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+234..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600 mb-1.5">Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company name"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={500}
                  placeholder="Tell us about your requirements..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">How did you hear about us? <span className="text-red-500">*</span></label>
                <select
                  name="referral"
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
                >
                  <option value="">Select an option</option>
                  <option value="web-search">Web Search</option>
                  <option value="facebook">Facebook</option>
                  <option value="press-ad">Press Ad</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                disabled={loading}
                type="submit"
                className="mt-2 w-full flex items-center justify-center gap-2 py-3 bg-[#5200f5] hover:bg-[#4400cc] disabled:opacity-60 text-white font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-[#5200f5]/25"
              >
                Send Message
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Map */}
      <section className="relative h-[400px] lg:h-[500px]">
        <div className="absolute inset-0" id="map" />
      </section>
    </div>
  );
}
