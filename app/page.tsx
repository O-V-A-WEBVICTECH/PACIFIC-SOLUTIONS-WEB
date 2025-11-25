/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Compass, ArrowRight, CheckCircle, Quote } from "lucide-react";

import Image from "next/image";
import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from "next/link";

interface Slide {
  src: string;
  alt: string;
}

export default function Home() {
  const slides: Slide[] = [
    {
      src: "/images/hero-image-1.webp",
      alt: "Close up technician engineer wearing and adjust protective safety glasses.",
    },
    {
      src: "/images/boat-2.webp",
      alt: "Fire extinguisher and a protective helmet.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    mapboxgl.accessToken =
      "pk.eyJ1IjoiZHVyYWJsZSIsImEiOiJjbGJjOHV1bHUwcjM5M3huOHdoZXdkdDRsIn0.geBkTZ4KBXWb669GQBr8rw";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [3.3792, 6.5244],
      zoom: 13,
    });

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-white to-gray-50 text-black">
      {/* Hero Section - Enhanced with gradient overlay and better typography */}
      <section className="relative lg:h-[85vh] min-h-[600px] w-full overflow-hidden">
        <div className="relative w-full h-full">
          <div>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  index === currentSlide
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  decoding="async"
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* Modern gradient overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-indigo-800/70" />

          <div className="relative z-20 container mx-auto px-5 md:px-6 lg:px-8 h-full flex items-center">
            <div className="flex flex-col gap-6 w-full md:max-w-4xl items-start animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white font-medium">
                  IMO & SOLAS Certified
                </span>
              </div>

              <h1 className="text-4xl lg:text-7xl font-bold leading-tight text-white tracking-tight">
                Your Trusted Partner in{" "}
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  Marine Safety
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-200 lg:w-[70%] leading-relaxed">
                Premier LSA/FFA solutions crafted with professionalism and in
                accordance with the latest IMO and SOLAS conventions.
              </p>

              <div className="flex flex-row items-center gap-4 mt-4">
                <Link href="/products">
                  <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2">
                    Explore Products
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/#contact">
                  <button className="px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    Get Quote
                  </button>
                </Link>
              </div>

              {/* Slide indicators */}
              <div className="flex items-center gap-3 mt-6">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? "w-12 bg-white"
                        : "w-8 bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <p className="text-white/80 text-sm lg:text-base mt-2 italic">
                LSA/FFA our specialty. Preventing the worst. Ensuring the best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced with cards and modern layout */}
      <section id="#about" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                About Us
              </div>

              <h2 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Your Trusted Partner in Safety Solutions
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                Based in Lagos, Nigeria, Pacific Safety Solution Limited
                specializes in providing top-tier safety equipment services. Our
                dedication to quality and innovation ensures that each product
                meets stringent safety standards and client needs.
              </p>

              {/* Feature points */}
              <div className="grid gap-4 mt-8">
                {[
                  "IMO & SOLAS Compliant Solutions",
                  "Expert LSA/FFA Maintenance",
                  "24/7 Emergency Response",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                    <span className="font-medium text-gray-800">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/company-profile">
                <button className="group mt-8 flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Compass className="w-5 h-5" />
                  View Company Profile
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            {/* Image with decorative elements */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/raft-3.webp"
                  alt="Safety equipment"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="object-cover w-full h-[400px] lg:h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern card design */}
      <section
        id="testimonials"
        className="py-16 lg:py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-4">
              Client Success Stories
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Don&apos;t just take our word for it - hear what our clients have
              to say about our services
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kab Agencies Ltd.",
                quote:
                  "Pacific Safety Solution exceeded our expectations with top-notch marine safety equipment and professional LSA/FFA services. Their team is incredibly knowledgeable and attentive to client needs.",
              },
              {
                name: "AIS Nautical Supplies",
                quote:
                  "Impressed with their exceptional service and high-quality safety equipment. The team's expertise in fiberglass services was evident, and they were always ready to assist.",
              },
              {
                name: "TMS Offshore Lome Sarl",
                quote:
                  "We are thoroughly impressed by their dedication to providing top-tier LSA/FFA services. Their expertise and customer-focused approach set them apart in the maritime environment.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="group p-8 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
              >
                <Quote className="w-10 h-10 text-orange-400 mb-4" />
                <p className="text-white text-base leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery CTA - Modern design */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        {/* Background collage with better overlay */}
        <div className="absolute inset-0 grid grid-cols-3 gap-1">
          <Image
            src="/images/marine-1.jpg"
            alt="Team at work"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          <Image
            src="/images/marine-2.jpg"
            alt="Office"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
          <Image
            src="/images/marine-3.jpg"
            alt="Project site"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative container mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            A Glimpse Into Our Work
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Explore photos of our team, projects, and facilities that bring our
            safety solutions to life
          </p>
          <Link
            href="/our-gallery"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            View Our Gallery
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Map Section - Enhanced */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0 w-full h-full" id="map" />

        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="bg-white/95 backdrop-blur-xl p-8 rounded-3xl shadow-2xl max-w-md border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Visit Us</h3>
            </div>
            <p className="text-gray-700 text-lg">Lagos, Nigeria</p>
            <p className="text-gray-600 mt-2">Serving West Africa and beyond</p>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern curved design */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Ensure Your Safety Today
            </h2>
            <p className="text-xl text-gray-700 mb-10">
              Choose Pacific Safety Solution for expert LSA/FFA maintenance and
              ship supplies. Secure your vessels, facilities, and offices with
              our reliable services.
            </p>
            <Link href="/#contact">
              <button className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-24 bg-gradient-to-b from-indigo-600 to-purple-700">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              alt="Industrial coating and repair"
              src="/images/drilling.jpg"
              width={1400}
              height={800}
              className="w-full h-[500px] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Contact Form - Modern design */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Reach Out to Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Contact us for all your safety equipment needs
            </p>
          </div>

          <form
            className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100"
            action="https://app.proforms.top/f/pr3861a45"
            method="POST"
          >
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-900">
                  Name *
                </label>
                <input
                  type="text"
                  autoComplete="name"
                  name="Name"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-900">
                  Email *
                </label>
                <input
                  type="email"
                  autoComplete="email"
                  name="Email"
                  required
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="lg:col-span-2">
                <label className="block mb-2 text-sm font-semibold text-gray-900">
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  name="message"
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your safety equipment needs..."
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>

              <p className="text-xs text-gray-500 mt-6 max-w-md mx-auto">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-indigo-600 hover:underline"
                >
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
