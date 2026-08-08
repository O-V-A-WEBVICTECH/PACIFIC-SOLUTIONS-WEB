import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Marine Safety Equipment & Products in Nigeria | Pacific Safety Solution",
  description:
    "Buy SOLAS-approved marine safety equipment in Nigeria — life jackets, inflatable life rafts, immersion suits, fire extinguishers, distress signals, navigational aids, and ship maintenance parts. Supplied by Pacific Safety Solution Limited, Lagos.",
  keywords:
    "marine safety equipment Nigeria, SOLAS approved life jackets Lagos, inflatable life rafts Nigeria, immersion suits, fire extinguisher marine, ship maintenance parts Lagos, marine distress signals Nigeria, liferaft supplier West Africa",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/products",
    title: "Marine Safety Equipment & Products in Nigeria | Pacific Safety Solution",
    description:
      "SOLAS-approved marine safety equipment and ship maintenance parts supplied in Lagos, Nigeria and across West Africa.",
  },
  twitter: {
    card: "summary",
    title: "Marine Safety Equipment & Products in Nigeria",
    description: "SOLAS-approved marine safety equipment and ship maintenance parts — Lagos, Nigeria.",
  },
  other: {
    "google-site-verification": "dVdoPIU1AD1peVcptgjN0nu_zxE6WElWXIrzYzcratA",
  },
};

const products = [
  {
    title: "Life Jackets & Work Vests",
    description: "SOLAS-approved life jackets and work vests for offshore crews, vessel operators, and commercial mariners. Built for safety and long-term durability.",
    image: "/images/life-vest.jpg",
  },
  {
    title: "Immersion Suits",
    description: "SOLAS-certified immersion and survival suits providing thermal insulation and buoyancy for emergency abandonment at sea.",
    image: "/images/dive-suit.jpeg",
  },
  {
    title: "Emergency Food Rations & Water",
    description: "Long-shelf-life emergency food rations and potable water packs approved for liferaft and lifeboat survival kits.",
    image: "/images/emergency-ration.jpg",
  },
  {
    title: "Marine Distress Signals & Pyrotechnics",
    description: "SOLAS pyrotechnic distress signals including handheld flares, rocket parachute flares, and smoke signals for emergency use at sea.",
    image: "/images/signal.jpg",
  },
  {
    title: "Safety Lights & Torches",
    description: "High-intensity waterproof safety lights and torches for vessel visibility and search-and-rescue operations.",
    image: "/images/flashlight.jpg",
  },
  {
    title: "Lifeboat",
    description: "SOLAS-compliant lifeboats for emergency crew evacuation. Available for vessels operating in Nigerian and West African waters.",
    image: "/images/lifeboat.jpg",
  },
  {
    title: "MOB, HRU & Line Thrower",
    description: "Man Overboard (MOB) markers, Hydrostatic Release Units (HRU), and line throwers for rapid maritime rescue operations.",
    image: "/images/hydro-device.png",
  },
  {
    title: "Navigational Aids",
    description: "IMO-approved navigational aids including EPIRBs, SARTs, radar reflectors, and compass systems for safe vessel navigation.",
    image: "/images/navigation.jpg",
  },
  {
    title: "Engines & Electrical Parts",
    description: "Marine engine components and electrical parts for vessel maintenance, repair, and performance optimisation.",
    image: "/images/engine-parts.jpg",
  },
  {
    title: "Marine Lubricating Oil",
    description: "High-performance marine lubricants and engine oils for smooth, reliable operation of ship machinery and engines.",
    image: "/images/marine-oil-1.jpg",
  },
  {
    title: "Wire Ropes, Lifting Gears & Mooring Ropes",
    description: "Heavy-duty wire ropes, anchor chains, mooring ropes, and lifting gear for safe docking and cargo handling operations.",
    image: "/images/lifting-devices.png",
  },
  {
    title: "Inflatable Liferaft Rental",
    description: "Certified inflatable liferafts available for rental in Nigeria — 4-person to 25-person SOLAS-approved units, fully serviced.",
    image: "/images/raft-3.webp",
  },
];

export default function Page() {
  return (
    <>
      <Script
        id="organization-schema"
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
      <div className="bg-white">
        {/* Hero */}
        <div className="relative h-[220px] lg:h-[360px] overflow-hidden">
          <Image
            width={1600}
            height={600}
            src="/images/workers.jpg"
            alt="Marine safety equipment supply team at Pacific Safety Solution Limited, Lagos Nigeria"
            priority
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
            <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">
              SOLAS-Approved Equipment
            </p>
            <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
              Marine Safety Equipment &amp; Ship Maintenance Products in Nigeria
            </h1>
          </div>
        </div>

        {/* SEO intro block */}
        <div className="bg-slate-50 border-b border-slate-100">
          <div className="container mx-auto px-6 lg:px-12 py-8 lg:py-10 max-w-5xl">
            <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">
              Trusted Supplier of SOLAS-Certified Marine Safety Equipment in Lagos, Nigeria
            </h2>
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed max-w-4xl">
              Pacific Safety Solution Limited supplies a comprehensive range of
              SOLAS-approved and IMO-compliant marine safety equipment to vessel
              operators, oil &amp; gas companies, ship agencies, and offshore
              installations across Nigeria and West Africa. From life jackets and
              inflatable life rafts to ship maintenance parts and navigational
              aids — we are your one-stop maritime safety supplier in Lagos.
            </p>
          </div>
        </div>

        {/* Products grid */}
        <main className="container mx-auto px-6 lg:px-12 py-12 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-100 hover:border-[#5200f5]/20 hover:shadow-lg hover:shadow-[#5200f5]/5 transition-all duration-200 overflow-hidden"
              >
                <div className="relative h-40 lg:h-48 bg-slate-50">
                  <Image
                    fill
                    src={product.image}
                    alt={`${product.title} — marine safety equipment Nigeria`}
                    className="object-contain p-3"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm lg:text-base font-bold text-slate-900 mb-1 leading-tight">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 bg-slate-900 rounded-2xl px-8 py-10 text-center">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
              Need Marine Safety Equipment in Nigeria?
            </h2>
            <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto">
              Contact our team in Lagos for pricing, availability, and delivery of
              SOLAS-approved safety equipment across Nigeria and West Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact-us">
                <button className="px-8 py-3 bg-[#5200f5] hover:bg-[#4400cc] text-white font-semibold text-sm rounded-lg transition-colors shadow-lg shadow-[#5200f5]/25">
                  Contact Us
                </button>
              </Link>
              <Link href="/liferaft-service-request">
                <button className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm rounded-lg transition-colors">
                  Service Request
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
