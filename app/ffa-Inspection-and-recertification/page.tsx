import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LSA & FFA Inspection and Re-Certification in Nigeria | Pacific Safety Solution",
  description:
    "Professional LSA (Life-Saving Appliances) and FFA (Fire-Fighting Appliances) inspection and re-certification in Nigeria. SOLAS-compliant services for lifeboats, life jackets, fire extinguishers, and breathing apparatus. Serving Lagos and West Africa.",
  keywords:
    "LSA inspection Nigeria, FFA inspection Lagos, life-saving appliances re-certification, fire-fighting appliances inspection, SOLAS compliance Nigeria, lifeboat inspection Lagos, life jacket certification Nigeria, maritime safety inspection West Africa",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/ffa-Inspection-and-recertification",
    title: "LSA & FFA Inspection and Re-Certification in Nigeria | Pacific Safety Solution",
    description:
      "SOLAS-compliant LSA and FFA inspection and re-certification services in Lagos, Nigeria — lifeboats, life jackets, fire extinguishers, and more.",
  },
};

const scope = [
  "Fire extinguishers & CO₂ systems",
  "Breathing apparatus & SCBA sets",
  "Lifeboats & rescue boats",
  "Life jackets & immersion suits",
  "Lifebuoys & throwing lines",
  "EPIRB, SART & distress signals",
  "Hydrostatic release units (HRU)",
  "Fixed fire-detection & alarm systems",
];

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[220px] lg:h-[360px] overflow-hidden">
        <Image
          width={1600}
          height={600}
          src="/images/oxygen-tank.webp"
          alt="LSA FFA inspection and re-certification of oxygen tanks and breathing apparatus in Nigeria"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
          <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">
            Maritime Safety Services — Lagos, Nigeria
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
            LSA &amp; FFA Inspection and Re-Certification in Nigeria
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-16 py-12 lg:py-20 max-w-4xl">

        {/* Lead paragraph — keyword-rich, front-loaded */}
        <p className="text-slate-700 text-sm lg:text-base leading-relaxed mb-6 font-medium">
          Pacific Safety Solution Limited provides professional <strong>LSA (Life-Saving Appliances)
          and FFA (Fire-Fighting Appliances) inspection and re-certification</strong> services in
          Lagos, Nigeria — serving vessels trading across West Africa, including Cotonou, Lome,
          Tema, Dakar, and Douala.
        </p>

        <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify mb-6">
          Maintaining a safe and SOLAS-compliant vessel requires diligent inspection and upkeep
          of all life-saving and fire-fighting equipment. Our certified technicians carry out
          thorough inspections and re-certifications ensuring every appliance will perform
          flawlessly in an emergency — not just pass a checklist.
        </p>

        <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify mb-10">
          We follow the International Convention for the Safety of Life at Sea (SOLAS),
          ensuring your vessel is fully compliant and ready for port state control and
          classification society inspections. We pressure-test cylinders, service release
          mechanisms, and replace components that no longer meet performance standards —
          issuing certified inspection reports on completion.
        </p>

        {/* Scope of service */}
        <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-5">
          Equipment We Inspect &amp; Re-Certify
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {scope.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg border border-slate-100"
            >
              <span className="w-2 h-2 rounded-full bg-[#5200f5] shrink-0" />
              <span className="text-sm text-slate-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Why choose us */}
        <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">
          Why Choose Pacific Safety for LSA/FFA Services in Nigeria?
        </h2>
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-10">
          Our service engineers receive regular refresher training at manufacturer facilities,
          and our service station is fully equipped and approved to international standards.
          We serve oil &amp; gas companies, vessel owners, ship agencies, and commercial
          operators across Nigeria and West Africa — with fast turnaround and certified
          documentation.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/liferaft-service-request">
            <button className="px-6 py-3 bg-[#5200f5] hover:bg-[#4400cc] text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-[#5200f5]/25">
              Request Inspection Service
            </button>
          </Link>
          <Link href="/contact-us">
            <button className="px-6 py-3 border border-slate-200 hover:border-slate-300 text-slate-700 text-sm font-semibold rounded-lg transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
