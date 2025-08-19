/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Loader2 } from "lucide-react";
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

  //function to submit form
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
      if (res.status === 200)
        return toast("✅Form Submited", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
    } catch (error) {
      return console.log("error submititng form:", error);
    } finally {
      return setLoading(false);
    }
  }

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
      <main className="container mx-auto mb-20  px-3 py-12">
        <div className="grid grid-cols-1 text-neutral-950 lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div>
            <h4 className="text-base pl-2 lg:pl-0 lg:text-lg font-semibold mb-2 lg:mb-6">
              GET IN TOUCH
            </h4>

            <ul className="space-y-2 text-sm lg:text-base text-neutral-950">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3">
                  <i className="fas fa-map-marked-alt"></i>
                </span>
                <span>
                  PLOT QFF 10. IBAFON STREET
                  <br />
                  OFF APAPA-OSHODI EXPRESS WAY
                  <br />
                  LAGOS-NIGERIA.
                </span>
              </li>

              <li className="flex items-center">
                <span className="text-blue-600 mr-3">
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <span>+2348054094490</span>
              </li>

              <li className="flex items-center">
                <span className="text-blue-600 mr-3">
                  <i className="far fa-envelope"></i>
                </span>
                <span>pacificsafety2020@yahoo.com</span>
              </li>
            </ul>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-6">
              CONTACT US FOR ANY QUESTIONS
            </h4>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="border border-neutral-800 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="border border-neutral-800 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="phone"
                  name="phone"
                  placeholder="Phone Number"
                  className="border border-neutral-800 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="text"
                  placeholder="Company"
                  name="company"
                  className="border border-neutral-800 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <textarea
                placeholder="Enter your message..."
                maxLength={180}
                name="message"
                rows={6}
                className="border border-neutral-800 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <select
                className="border border-neutral-800 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                name="referral"
              >
                <option value="">How did you hear about our website</option>
                <option value="web-search">Web Search</option>
                <option value="facebook">Facebook</option>
                <option value="press-ad">Press Ad</option>
                <option value="other">Other</option>
              </select>

              <button
                disabled={loading}
                type="submit"
                className="bg-blue-600 flex items-center gap-1   hover:bg-blue-700 text-white px-6 py-2 rounded"
              >
                Send Message
                {loading ? <Loader2 className="h4 w-4 animate-spin" /> : null}
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
