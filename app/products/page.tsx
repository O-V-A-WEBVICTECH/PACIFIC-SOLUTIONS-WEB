import Image from "next/image";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pacific Safety Solution limited || Products",
  description:
    "PACIFIC SAFETY SOLUTION LIMITED we deal and supply ship maintainace part and other marine supplies such as ship Life Jackets and Work Vests, Immersion Suits, Emergency Food Rations and Water Marine Distress Signals (Pyrotechnics) Safety Lights, New Inflatable Life rafts, MOB, HRU & Line thrower Navigational aids Engines etc ",
  other: {
    "google-site-verification": "dVdoPIU1AD1peVcptgjN0nu_zxE6WElWXIrzYzcratA",
  },
};

export default function Page() {
  return (
    <>
      <head>
        <Script
          id="organization-logo"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://pacificsafetysolutionltd.com",
              logo: "https://pacificsafetysolutionltd.com/images/logo.png",
              name: "Pacific Safety Solution Limited",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2348054094450",
                contactType: "Customer Service",
                areaServed: "NG",
              },
            }),
          }}
        />
      </head>
      <div className="bg-white">
        <div className="relative">
          <div className="absolute top-[18%] lg:top[60%] z-[100] w-full flex items-center justify-center text-white">
            <h1 className="text-4xl lg:text-7xl">Approvals/Products</h1>
          </div>
          <Image
            width={1000}
            height={600}
            src="/images/workers.jpg"
            alt="boat men"
            priority
            className="brightness-50 w-full h-[100px] lg:h-[300px] object-cover"
          />
        </div>
        <main className="mx-auto font-[lato] px-3 lg:px-0 lg:w-[80%]">
          <div className="grid grid-cols-2 mt-3 mb-6 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Life Jackets & Work Vests",
                description:
                  "High-quality, durable life jackets and work vests designed for safety and comfort in marine environments.",
                image: "/images/life-vest.jpg",
              },
              {
                title: "Immersion Suits",
                description:
                  "Protective suits to ensure safety in extreme conditions, offering thermal insulation and buoyancy.",
                image: "/images/dive-suit.jpeg",
              },
              {
                title: "Emergency Food Rations & Water",
                description:
                  "Long-shelf-life rations and potable water for emergency preparedness at sea.",
                image: "/images/emergency-ration.jpg",
              },
              {
                title: "Marine Distress Signals",
                description:
                  "Reliable pyrotechnics for signaling distress, ensuring visibility in emergency situations.",
                image: "/images/signal.jpg",
              },
              {
                title: "Safety Lights",
                description:
                  "Durable, high-intensity lights for enhanced visibility and safety on vessels.",
                image: "/images/flashlight.jpg",
              },
              {
                title: "lifeboat",
                description:
                  "High-quality life boat for emergency evacuation and survival at sea.",
                image: "/images/lifeboat.jpg",
              },
              {
                title: "MOB, HRU & Line Thrower",
                description:
                  "Man Overboard (MOB) devices, Hydrostatic Release Units (HRU), and line throwers for rescue operations.",
                image: "/images/hydro-device.png",
              },
              {
                title: "Navigational Aids",
                description:
                  "Advanced navigational tools to ensure safe and accurate maritime navigation.",
                image: "/images/navigation.jpg",
              },
              {
                title: "Engines & Electrical Parts",
                description:
                  "Reliable engines and electrical components for vessel maintenance and performance.",
                image: "/images/engine-parts.jpg",
              },
              {
                title: "Lube Oil",
                description:
                  "High-performance lubricants to ensure smooth operation of marine engines.",
                image: "/images/marine-oil-1.jpg",
              },
              {
                title: "Wire Ropes & Lifting Gears",
                description:
                  "Durable wire ropes, anchor chains, and mooring ropes for secure lifting and docking.",
                image: "/images/lifting-devices.png",
              },
              {
                title: "Liferaft Rental Service",
                description:
                  "Flexible liferaft rental options for short- or long-term maritime operations.",
                image: "/images/raft-3.webp",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white p-2 h-fit rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">
                  <Image
                    width={500}
                    height={500}
                    src={product.image}
                    alt={product.title}
                    className="w-full rounded-md h-[140px] lg:h-[200px]  object-contain"
                  />
                </div>
                <h3 className="text-base lg:text-lg leading-tight font-bold mb-1 text-gray-900">
                  {product.title}
                </h3>
                <p className="text-gray-600   text-sm font-[lato]">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
