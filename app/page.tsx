/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Compass, MapPin, Phone, Mail, ArrowRight, Quote } from "lucide-react";
import Script from "next/script";
import Image from "next/image";
import { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from "next/link";

interface Slide {
  src: string;
  alt: string;
}

const services = [
  {
    title: "LSA/FFA Inspection & Re-Certification",
    href: "/ffa-Inspection-and-recertification",
    image: "/images/oxygen-tank.webp",
    desc: "Full inspection and re-certification of life-saving and fire-fighting appliances to SOLAS standards.",
  },
  {
    title: "Foam Analysis & Air Quality Test",
    href: "/analysis",
    image: "/images/foam-analysis.jpg",
    desc: "Dynamic foam concentrate testing and breathing air quality analysis per MSC & ISO regulations.",
  },
  {
    title: "Inflatable Liferaft Rental",
    href: "/inflatable-liferaft-rental",
    image: "/images/Crewsaver_Liferaft.jpg",
    desc: "4 to 25-person certified liferafts available for short or long-term rental — fully serviced.",
  },
  {
    title: "Calibration of Equipment",
    href: "/calibration-of-equipment",
    image: "/images/gas-detector.jpg",
    desc: "Precision calibration of gas detectors, pressure gauges, flow meters, and other marine instruments.",
  },
  {
    title: "Marine Safety Equipment & Ship Maintenance",
    href: "/marine-equipment-and-ship-maintenance",
    image: "/images/marine-safety-equipment.jpg",
    desc: "Supply of certified safety gear and ship maintenance parts from leading manufacturers.",
  },
  {
    title: "Fiberglass Repairs",
    href: "/fiberglass-repairs",
    image: "/images/fiberglass.jpg",
    desc: "Expert hull and deck repairs using marine-grade resins — from gelcoat touch-ups to structural work.",
  },
];

const testimonials = [
  {
    name: "Kab Agencies Ltd.",
    quote:
      "Pacific Safety Solution Ltd exceeded our expectations with top-notch marine safety equipment and professional LSA/FFA services. Their team is incredibly knowledgeable and attentive to client needs. Highly recommended for reliable safety solutions in West Africa.",
  },
  {
    name: "AIS Nautical Supplies",
    quote:
      "Pacific Safety Solution impressed us with their exceptional service and high-quality safety equipment. The team's expertise in fiberglass services was evident, and they were always ready to assist. A trustworthy company for all safety needs in Lagos!",
  },
  {
    name: "TMS Offshore Lome Sarl",
    quote:
      "We are thoroughly impressed by Pacific Safety Solution's dedication to providing top-tier LSA/FFA services. Their expertise and customer-focused approach set them apart in the maritime environment. Always a pleasure working with such a professional team.",
  },
];

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

    new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [3.3792, 6.5244],
      zoom: 13,
    });

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-black">
      {/* Structured Data */}
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://pacificsafetysolutionltd.com/#webpage",
            url: "https://pacificsafetysolutionltd.com",
            name: "Pacific Safety Solution Limited | Marine Safety & Ship Maintenance",
            description:
              "Leading supplier of marine safety equipment, life jackets, lifeboats, inflatable life rafts, ship maintenance parts, and marine supplies in Nigeria.",
            isPartOf: { "@id": "https://pacificsafetysolutionltd.com/#website" },
            about: { "@id": "https://pacificsafetysolutionltd.com/#organization" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://pacificsafetysolutionltd.com" },
              ],
            },
          }),
        }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-[580px] lg:h-[700px] w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
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

        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/25 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent z-10" />

        <div className="relative z-20 h-full container mx-auto px-6 lg:px-12 flex items-center">
          <div className="flex flex-col gap-5 w-full max-w-2xl">
            <span className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-[#5200f5]/20 border border-[#5200f5]/50 text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4b5fd] animate-pulse" />
              IMO &amp; SOLAS Compliant
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight text-white">
              Your Trusted Partner in{" "}
              <span className="text-[#a78bfa]">Marine Safety</span>{" "}
              &amp; Ship Supplies
            </h1>

            <p className="text-sm lg:text-base text-slate-300 max-w-lg leading-relaxed">
              Top-tier LSA/FFA solutions crafted with professionalism, in
              accordance with the latest IMO and SOLAS conventions. Serving
              Lagos, Nigeria and across West Africa.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link href="/products">
                <button className="px-6 py-2.5 bg-[#5200f5] hover:bg-[#4400cc] text-white text-sm font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-[#5200f5]/30">
                  Explore Products
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-semibold rounded-lg transition-colors duration-200 backdrop-blur-sm">
                  Contact Us
                </button>
              </Link>
            </div>

            <div className="flex items-center gap-2 pt-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-6 h-2 bg-white"
                      : "w-2 h-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-20" />
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text */}
            <div className="flex-1 flex flex-col gap-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-[#5200f5] mb-3">
                  Who We Are
                </p>
                <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Your trusted partner in safety solutions
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">
                At Pacific Safety Solution Limited, based in the vibrant city of
                Lagos, Nigeria, we specialize in providing top-tier safety
                equipment services. Our dedication to quality and innovation
                ensures that each product meets stringent safety standards and
                client needs. We are committed to safeguarding your work
                environment with reliable solutions that offer peace of mind.
              </p>
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100">
                {[
                  { value: "15+", label: "Years Experience" },
                  { value: "200+", label: "Clients Served" },
                  { value: "100%", label: "SOLAS Certified" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl lg:text-3xl font-bold text-[#5200f5]">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/company-profile">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-lg transition-colors duration-200 w-fit">
                  <Compass size={15} />
                  Our Company Profile
                  <ArrowRight size={15} />
                </button>
              </Link>
            </div>

            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative w-full h-[380px] lg:h-[460px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/raft-3.webp"
                  alt="Pacific Safety team working on marine equipment"
                  fill
                  quality={100}
                  className="object-cover object-center"
                />
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 bg-white rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                  <span className="text-2xl">🛟</span>
                  <div>
                    <p className="text-xs font-bold text-slate-900">LSA/FFA Specialist</p>
                    <p className="text-xs text-slate-500">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#a78bfa] mb-3">
                What We Do
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Our Core Services
              </h2>
              <p className="mt-3 text-slate-400 max-w-xl text-sm lg:text-base leading-relaxed">
                Full-spectrum marine safety services for vessels, offshore facilities, and ship maintenance across West Africa.
              </p>
            </div>
            <Link
              href="/liferaft-service-request"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors shrink-0"
            >
              Request a service <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link key={service.href} href={service.href}>
                <div className="group relative h-60 lg:h-64 rounded-2xl overflow-hidden cursor-pointer">
                  {/* Background image */}
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay — always visible at bottom, deeper on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-slate-900/10 group-hover:from-slate-900 group-hover:via-slate-900/70 group-hover:to-slate-900/30 transition-all duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <h3 className="text-white font-bold text-sm lg:text-base leading-snug mb-1.5">
                      {service.title}
                    </h3>
                    {/* Description slides up on hover */}
                    <p className="text-slate-300 text-xs leading-relaxed max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 mb-2">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#a78bfa] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn more <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-slate-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#a78bfa] mb-3">
              Client Feedback
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white max-w-xl">
              Proven Safety Solutions: Client Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/8 transition-colors"
              >
                <Quote size={24} className="text-[#a78bfa] opacity-60" />
                <p className="text-slate-300 text-sm leading-relaxed flex-1">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                  <div className="w-8 h-8 rounded-full bg-[#5200f5]/30 flex items-center justify-center text-xs font-bold text-[#a78bfa]">
                    {t.name.charAt(0)}
                  </div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery CTA ───────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-3 gap-0.5">
          <Image src="/images/marine-1.jpg" alt="" fill={false} width={600} height={400} className="object-cover w-full h-full" />
          <Image src="/images/marine-2.jpg" alt="" fill={false} width={600} height={400} className="object-cover w-full h-full" />
          <Image src="/images/marine-3.jpg" alt="" fill={false} width={600} height={400} className="object-cover w-full h-full" />
        </div>
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="relative container mx-auto px-6 lg:px-12 py-20 lg:py-32 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#a78bfa] mb-4">
            Our Portfolio
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-5">
            A Glimpse Into Our Work
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm lg:text-base mb-8">
            Explore photos of our team, projects, and facilities that bring our
            safety solutions to life.
          </p>
          <Link
            href="/our-gallery"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#5200f5] hover:bg-[#4400cc] text-white font-semibold text-sm rounded-lg shadow-lg shadow-[#5200f5]/30 transition-colors duration-200"
          >
            View Our Gallery
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── Location / Map ────────────────────────────────────── */}
      <section className="relative h-[480px] lg:h-[560px]">
        <div className="absolute inset-0" id="map" />
        {/* Info card */}
        <div className="absolute top-1/2 -translate-y-1/2 right-6 lg:right-16 z-10 bg-white rounded-2xl shadow-2xl p-6 lg:p-8 w-64 lg:w-72 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-slate-900">Find Us</h3>
          <div className="flex items-start gap-3">
            <MapPin size={16} className="text-[#5200f5] mt-0.5 shrink-0" />
            <p className="text-sm text-slate-600 leading-relaxed">
              Plot QFF 10, Ibafon Street,<br />
              Off Apapa-Oshodi Expressway,<br />
              Lagos, Nigeria.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Phone size={16} className="text-[#5200f5] shrink-0" />
            <a href="tel:+2348054094450" className="text-sm text-slate-600 hover:text-[#5200f5] transition-colors">
              +234 805 409 4450
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-[#5200f5] shrink-0" />
            <a href="mailto:pacificsafety2020@yahoo.com" className="text-sm text-slate-600 hover:text-[#5200f5] transition-colors truncate">
              pacificsafety2020@yahoo.com
            </a>
          </div>
          <Link href="/contact-us">
            <button className="w-full mt-1 py-2.5 bg-[#5200f5] hover:bg-[#4400cc] text-white text-sm font-semibold rounded-lg transition-colors">
              Get Directions
            </button>
          </Link>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-[#5200f5]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Ensure Your Safety Today
              </h2>
              <p className="text-violet-200 text-sm lg:text-base leading-relaxed">
                Choose Pacific Safety Solution Ltd for expert LSA/FFA
                maintenance and ship store supplies. Secure your vessels,
                facilities, and offices with our reliable, professional services.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link href="/contact-us">
                <button className="px-7 py-3 bg-white text-[#5200f5] text-sm font-bold rounded-lg hover:bg-violet-50 transition-colors shadow-lg">
                  Contact Us
                </button>
              </Link>
              <Link href="/liferaft-service-request">
                <button className="px-7 py-3 bg-white/10 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-colors">
                  Service Request
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────── */}
      <section id="contact" className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#5200f5] mb-3">
                Get in Touch
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                Reach Out to Our Team
              </h2>
              <p className="mt-3 text-slate-500 text-sm lg:text-base">
                Contact us at Pacific Safety Solution for all safety equipment services.
              </p>
            </div>

            <form
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 lg:p-10"
              action="https://app.proforms.top/f/pr3861a45"
              method="POST"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-slate-700">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    autoComplete="name"
                    name="Name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
                  />
                </div>
                <div>
                  <label className="block mb-1.5 text-sm font-medium text-slate-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    autoComplete="email"
                    name="Email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition"
                  />
                </div>
                <div className="lg:col-span-2">
                  <label className="block mb-1.5 text-sm font-medium text-slate-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    name="message"
                    placeholder="Tell us about your requirements..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5200f5]/30 focus:border-[#5200f5] transition resize-none"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 pt-2">
                <button
                  type="submit"
                  className="w-full lg:w-auto px-10 py-3 bg-[#5200f5] hover:bg-[#4400cc] text-white font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-[#5200f5]/25"
                >
                  Send Message
                </button>
                <p className="text-xs text-slate-400 text-center max-w-sm">
                  This site is protected by reCAPTCHA and the Google{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">
                    Terms of Service
                  </a>{" "}
                  apply.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
