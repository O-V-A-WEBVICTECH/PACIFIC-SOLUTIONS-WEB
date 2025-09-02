/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Compass } from "lucide-react";

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
    <div className="min-h-screen  overflow-x-hidden bg-white text-black">
      {/* Hero Section */}
      <section className="relative lg:h-[560px] w-full">
        <div className="relative w-full h-full">
          <div>
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
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
          </div>

          <div className="absolute inset-0 z-10 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "rgb(82, 0, 245)", opacity: "0.75" }}
            />
          </div>

          <div className="relative z-20 container mx-auto px-5 md:px-6  lg:px-0 pt-10 lg:pt-20 pb-10 lg:pb-48 flex  h-full">
            <div className="flex flex-col gap-4 w-full md:max-w-4xl items-start">
              <h1 className="text-3xl lg:text-6xl font-bold leading-tight text-white">
                YOUR TRUSTED PARTNER IN MARINE SAFETY AND OTHER SHIP SUPPLIES.
              </h1>
              <p className="text-sm lg:text-base text-white lg:w-[70%]">
                Ensure your safety with our top-notch safety services and
                premier LSA/FFA solutions crafted with professionalism and in
                accordance with latest IMO and SOLAS convention.
              </p>
              <div className="flex flex-row items-center  gap-4 lg:mt-2">
                <Link href="/products">
                  <button className="bg-white uppercase text-black text-sm px-6  py-2 rounded-lg font-semibold hover:bg-black hover:text-white transition">
                    Explore Our Products
                  </button>
                </Link>
              </div>
              <div className="flex items-center gap-2 mt-2 lg:mt-6">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "w-6" : "w-2 opacity-20"
                    }`}
                    style={{ backgroundColor: "white" }}
                  />
                ))}
              </div>
              <p className="font-[lato] text-white text-sm lg:text-base">
                LSA/FFA our specialty. Preventing the worst. Ensuring the best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="#about" className="py-5 lg:mb-8 bg-white text-[#121212]">
        <div className="container mx-auto px-3  lg:px-0 flex items-center lg:items-start flex-col lg:flex-row gap-4 lg:gap-10">
          {/* Text content */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold font-[lato]  mb-2">
              Your Trusted Partner in Safety Solutions
            </h1>

            <div className="text-justify text-base font-[lato]">
              <p className="text-sm lg:text-base">
                At Pacific Safety Solution limited, based in the vibrant city of
                Lagos, Nigeria, we specialize in providing top-tier safety
                equipment and fiberglass services. Our dedication to quality and
                innovation ensures that each product meets stringent safety
                standards and client needs. We are committed to safeguarding
                your work environment with reliable solutions that offer peace
                of mind. Trust us to deliver excellence, as we continue our
                mission to enhance workplace safety across diverse industries.
              </p>
            </div>
            <div className="mt-4">
              <Link href="/company-profile">
                <button className="text-sm lg:text-base text-white flex items-center flex-row gap-1 uppercase font-medium font-[lato] w-fit px-6 py-2 bg-orange-600">
                  <Compass size={17} />
                  our Company profile
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1">
            <div className="relative w-full lg:h-full shadow-lg">
              <Image
                src="/images/raft-3.webp"
                alt="Technician adjusting safety glasses"
                width={500}
                height={500}
                className="object-cover lg:h-[380px] rounded-md  w-full min-h-[100%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative">
        <div
          className="relative flex items-center fix-safari-flickering"
          style={{
            minHeight: "0px",
            zIndex: 35,
            paddingTop: "20px",
            paddingBottom: "40px",
          }}
        >
          {/* Background */}
          <div className="absolute  inset-0 z-10 pointer-events-none">
            <div className="absolute inset-0 bg-[#5200f5] z-10" />
          </div>

          {/* Content */}
          <div className="relative px-4 lg:px-0 z-10 container mx-auto  pt-10 lg:pt-32 pb-8 lg:pb-10">
            <div className="flex flex-col gap-4 max-w-5xl mb-12 text-left text-white">
              <p className="text-sm font-[lato] font-semibold">
                Trusted Feedback
              </p>
              <h2 className="text-3xl lg:text-5xl  font-bold">
                Proven Safety Solutions: Client Success Stories
              </h2>
              <p className="text-sm lg:text-base  lg:w-[45%] font-[lato]">
                &quot;Excellent LSA/FFA top quality services. Their expertise in
                marine safety solutions is unmatched in Lagos and other Africa
                countries. Highly recommended.!&quot;
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="flex flex-col lg:flex-row gap-4">
              {[
                {
                  name: " Kab Agencies Ltd.",
                  quote:
                    "Pacific Safety Solution Ltd exceeded our expectations with top-notch marine safety equipment’s and professional LSA/FFA services. Their team is incredibly knowledgeable and attentive to client needs. I highly recommend them to anyone seeking reliable safety solutions in west Africa.",
                },
                {
                  name: "AIS NAUTICAL SUPPLIES",
                  quote:
                    "Pacific Safety Solution impressed us with their exceptional service and high-quality safety equipment. The team’s expertise in fiberglass services was evident, and they were always ready to assist. A trustworthy company for all safety needs in Lagos!",
                },
                {
                  name: "TMS Offshore Lome Sarl",
                  quote:
                    "We are thoroughly impressed by Pacific Safety Solution's dedication to providing top-tier safety equipment services-LSA/FFA. And Their expertise and customer-focused approach set them apart in the maritime environment. It's always a pleasure working with such a reliable and professional team.",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-6 p-4  bg-[#7533f7] bg-opacity-20 rounded-lg font-[lato] text-[#fafafa] max-w-2xl"
                >
                  <h3 className="text-base lg:text-lg font-medium">
                    {testimonial.quote}
                  </h3>
                  <p className="text-base">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative mb-10 bg-gray-900">
        {/* Background collage */}
        <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-30">
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative container mx-auto px-6 py-20 lg:py-32 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white font-inter-tight mb-6 animate-fade-up">
            A Glimpse Into Our Work
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto font-lato mb-8 animate-fade-up">
            Step inside our world — explore photos of our team, projects, and
            facilities that bring our safety solutions to life.
          </p>
          <Link
            href="/our-gallery"
            className="px-8 text-sm py-4 bg-[#5200f5] hover:bg-[#3d00b8] text-white font-semibold rounded-xl shadow-lg transition duration-300 animate-fade-up"
          >
            View Our Gallery
          </Link>
        </div>
      </section>

      <section className="relative ">
        <div className="relative flex h-[500px] lg:h-[600px] z-30 -mt-[89px] pt-[89px] pb-[88px]">
          {/* Map Container */}
          <div className="absolute inset-0 w-full">
            <div className="h-full w-full absolute inset-0 z-5" id="map"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 px-2 lg:px-0 container mx-auto py-12 lg:py-14 xl:py-20 flex items-center">
            <div className="flex flex-row w-full md:flex-row-reverse">
              <div className="relative z-10 w-full md:w-1/2 xl:w-2/5 flex flex-col gap-6 p-6 lg:p-10 shadow overflow-hidden rounded-sm md:rounded-md lg:rounded-lg">
                <div className="absolute inset-0 z-10  pointer-events-none">
                  <div className="absolute inset-0 z-10 bg-gray-100"></div>
                </div>
                <div className="relative z-10 flex flex-col gap-4">
                  <h2 className="text-2xl  font-bold text-gray-900 font-inter-tight">
                    Location
                  </h2>
                  <p className="text-gray-900 font-lato">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div
          className="flex relative items-center break-words z-30 -mt-[89px] pt-[89px] pb-0"
          style={{
            scrollMarginTop: "5rem",
            minHeight: "0px",
          }}
        >
          <div className="flex  px-6 justify-center w-full items-center break-words">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="absolute inset-0 z-10 sm:w-fit bg-[#e0dde4]"></div>
            </div>

            {/* Content */}
            <div
              className="relative z-10 container mx-auto pt-4 lg:pt-32 pb-12 lg:pb-20"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 50% 90%, 25% 100%, 0 90%)",
                WebkitClipPath:
                  "polygon(0 0, 100% 0, 100% 90%, 75% 100%, 50% 90%, 25% 100%, 0 90%)",
              }}
            >
              <div className="transition-all ease-in-out duration-500 opacity-100 translate-y-0 flex flex-col gap-4 max-w-3xl items-start ml-0 mr-auto text-left">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-inter-tight">
                  Ensure Your Safety Today
                </h2>
                <p className="text-sm lg:text-base md:text-lg text-gray-900 font-lato">
                  Choose Pacific Safety Solution Ltd in Lagos Nigeria and other
                  Africa countries for expert LSA/FFA maintenance and other ship
                  stores supplies. Secure your Vessels, Facilities, and offices
                  with our reliable and professional services.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button
                    type="button"
                    className="px-6 py-3 border-2 shadow-none font-medium bg-[#5200f5] text-white rounded-lg border-[#5200f5]"
                  >
                    <Link href="/#contact"> Contact Us</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative">
        <div
          id="688e5691fa86f3be4852316b"
          className="flex flex-none relative items-center fix-safari-flickering"
          style={{
            minHeight: "0px",
            zIndex: 31,
            scrollMarginTop: "5rem",
            paddingTop: "0px",
            paddingBottom: "88px",
            clipPath: "url(#688e5691fa86f3be4852316b-curveDown)",
          }}
        >
          {/* Purple Background Overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div
              className="absolute inset-0 z-10"
              style={{ backgroundColor: "rgb(82, 0, 245)" }}
            ></div>
          </div>

          {/* Image Content */}
          <div className="relative z-10 px-4 container pt-12 lg:pt-20 pb-12 lg:pb-20 mx-auto">
            <div className="transition-all ease-in-out duration-500 opacity-100 translate-y-0 relative z-10  mx-auto overflow-hidden flex justify-center items-center">
              <div className="relative overflow-hidden w-full aspect-[3/2] rounded-sm md:rounded-md lg:rounded-lg">
                <Image
                  alt="Lining process of coating tank and repair by resin and fiberglass"
                  title="Lining process of coating tank and repair by resin and fiberglass"
                  src="/images/drilling.jpg"
                  fill
                  className="w-full h-[500px] object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Clip Path SVG Definition (hidden) */}
          <svg
            className="absolute bottom-0 left-0"
            width="1449"
            height="1069"
            viewBox="0 0 1449 1069"
          >
            <clipPath id="688e5691fa86f3be4852316b-curveDown">
              <rect width="1449" height="981" fill="transparent" />
              <path
                d="M0 88 C724.5 0 724.5 0 1449 88 L1449 0 L0 0"
                transform="translate(0, 981)"
                fill="transparent"
              />
            </clipPath>
          </svg>
        </div>

        {/* White stroke curve */}
        <svg
          className="absolute bottom-0 left-0 z-50 overflow-visible"
          fill="transparent"
          width="1449"
          height="88"
          viewBox="0 0 1449 88"
        >
          <path
            d="M0 88 C724.5 0 724.5 0 1449 88"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
        </svg>
      </section>

      {/* Contact Form */}
      <section id="contact" className="relative">
        <div
          id="688e5691fa86f3be4852316c"
          className="flex flex-none flex-shrink-0 relative items-center -mt-[89px] pt-[89px] pb-0 z-[30]"
        >
          {/* Background overlay */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <div className="absolute inset-0 z-10 bg-[#f5f4f6]"></div>
          </div>

          <div className="relative z-10 px-6 lg:px-0 container mx-auto pt-16 lg:pt-32 pb-16 lg:pb-32">
            <div className="transition-all duration-500 ease-in-out opacity-100 translate-y-0 flex flex-col w-full gap-10 max-w-3xl mx-auto">
              {/* Heading */}
              <div className="w-full text-center text-gray-900">
                <h3 className="text-2xl font-bold">Reach Out to Our Team</h3>
                <p className="mt-2">
                  Contact us at Pacific Safety Solution for all safety equipment
                  services
                </p>
              </div>

              {/* Form */}
              <form
                className="w-full block"
                action="https://app.proforms.top/f/pr3861a45"
                method="POST"
              >
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 w-full mb-4">
                  {/* Name */}
                  <div>
                    <label className="mb-1 text-sm text-gray-900 block">
                      Name *
                    </label>
                    <input
                      type="text"
                      autoComplete="name"
                      name="Name"
                      required
                      className="w-full px-4 py-2 rounded-full bg-black/10 text-gray-900 placeholder-current outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1 text-sm text-gray-900 block">
                      Email *
                    </label>
                    <input
                      type="email"
                      autoComplete="email"
                      name="Email"
                      required
                      className="w-full px-4 py-2 rounded-full bg-black/10 text-gray-900 placeholder-current outline-none"
                    />
                  </div>

                  {/* Message */}
                  <div className="col-span-2">
                    <label className="mb-1 text-sm text-gray-900 block">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      name="message"
                      className="w-full px-4 py-2 rounded-lg bg-black/10 text-gray-900 placeholder-current outline-none resize-none"
                    ></textarea>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col justify-between gap-4 items-center text-center md:pt-4">
                  <button
                    type="submit"
                    className="min-w-[9rem] mt-2 md:mt-0 border-2 border-gray-900 text-gray-900 rounded-full px-6 py-2"
                  >
                    Send Message
                  </button>

                  <div className="text-xs max-w-sm text-gray-500">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-gray-900"
                    >
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-gray-900"
                    >
                      Terms of Service
                    </a>{" "}
                    apply.
                  </div>
                </div>

                {/* Invisible reCAPTCHA (can be moved to next.js middleware/backend) */}
                <div className="hidden">
                  <div>
                    <div className="grecaptcha-badge">
                      {/* Add reCAPTCHA script separately if needed */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
