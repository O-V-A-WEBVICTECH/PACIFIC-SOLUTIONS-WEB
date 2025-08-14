/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Page() {
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

  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute top-[30%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-4xl lg:text-7xl">Contact </h1>
        </div>
        <Image
          width={1000}
          height={600}
          src="/images/boat-men.jpg"
          alt="boat men"
          priority
          className="brightness-50 w-full h-[120px] lg:h-[280px] object-cover"
        />
      </div>
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">GET IN TOUCH</h4>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">
                  <i className="fas fa-map-marked-alt"></i>
                </span>
                <span>
                  Cor. Tucker Valley &amp; Airways Roads,
                  <br />
                  Chaguaramas, Trinidad, W.I.
                </span>
              </li>

              <li className="flex items-center">
                <span className="text-blue-600 mr-3">
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <span>1-868-634-4410</span>
              </li>

              <li className="flex items-center">
                <span className="text-blue-600 mr-3">
                  <i className="fas fa-fax"></i>
                </span>
                <span>1-868-634-2067</span>
              </li>

              <li className="flex items-center">
                <span className="text-blue-600 mr-3">
                  <i className="far fa-envelope"></i>
                </span>
                <span>info@companyemail</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              CONTACT US FOR ANY QUESTIONS
            </h4>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <textarea
                placeholder="Enter your message..."
                maxLength={180}
                rows={6}
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <select
                className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">How did you hear about our website</option>
                <option value="web-search">Web Search</option>
                <option value="facebook">Facebook</option>
                <option value="press-ad">Press Ad</option>
                <option value="other">Other</option>
              </select>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      <section className="relative ">
        <div className="relative flex min-h-screen z-30 -mt-[89px] pt-[89px] pb-[88px]">
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
    </div>
  );
}
