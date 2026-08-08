import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marine Safety Equipment & Ship Maintenance Parts in Nigeria | Pacific Safety Solution",
  description:
    "Supply of SOLAS-approved marine safety equipment and ship maintenance parts in Nigeria — life jackets, fire extinguishers, survival suits, engine parts, bilge pumps, and more. Reliable maritime supplier in Lagos, West Africa.",
  keywords:
    "marine safety equipment Nigeria, ship maintenance parts Lagos, SOLAS safety equipment Nigeria, life jackets Nigeria, fire extinguisher marine Lagos, survival suits Nigeria, ship stores Lagos, maritime supplies West Africa, vessel maintenance parts Nigeria",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/marine-equipment-and-ship-maintenance",
    title: "Marine Safety Equipment & Ship Maintenance Parts in Nigeria | Pacific Safety Solution",
    description:
      "SOLAS-approved marine safety equipment and ship maintenance parts in Lagos, Nigeria — your one-stop maritime supplier for West Africa.",
  },
};

const safetyEquipment = [
  "Life jackets & work vests (SOLAS/USCG approved)",
  "Flares & pyrotechnic distress signals",
  "Survival suits & immersion suits",
  "Lifebuoys & throwlines",
  "First-aid kits & medical supplies",
  "Fire extinguishers & fire-fighting equipment",
];

const maintenanceParts = [
  "Engine filters, impellers & spare parts",
  "Anodes & corrosion protection materials",
  "Marine lubricating oils & greases",
  "Marine hardware & deck fittings",
  "Bilge pumps & pumping systems",
  "Navigation lights & instruments",
];

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[220px] lg:h-[360px] overflow-hidden">
        <Image
          width={1600}
          height={600}
          src="/images/marine-safety-equipment.jpg"
          alt="Marine safety equipment and ship maintenance parts supplier in Lagos Nigeria"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
          <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">
            Maritime Supplies — Lagos, Nigeria
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
            Marine Safety Equipment &amp; Ship Maintenance Parts in Nigeria
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-16 py-12 lg:py-20 max-w-4xl">

        <p className="text-slate-700 text-sm lg:text-base leading-relaxed mb-6 font-medium">
          Pacific Safety Solution Limited is a trusted <strong>supplier of SOLAS-approved
          marine safety equipment and ship maintenance parts in Lagos, Nigeria</strong> —
          serving vessel operators, oil &amp; gas companies, ship agencies, and offshore
          installations across West Africa.
        </p>

        <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify mb-10">
          Operating a vessel requires a constant supply of reliable safety gear and
          maintenance components. As your dedicated maritime partner, we stock an extensive
          inventory of certified equipment from leading manufacturers — giving you a
          one-stop source for both safety and maintenance needs. This simplifies procurement,
          reduces downtime, and ensures your vessel stays compliant and seaworthy.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Safety Equipment */}
          <div>
            <h2 className="text-base lg:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-[#5200f5] inline-block shrink-0" />
              SOLAS-Certified Marine Safety Equipment
            </h2>
            <p className="text-slate-500 text-xs mb-3 leading-relaxed">
              All safety equipment sourced meets or exceeds SOLAS, IMO, and USCG certification requirements.
            </p>
            <div className="flex flex-col gap-2">
              {safetyEquipment.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg border border-slate-100"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5200f5] shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Maintenance Parts */}
          <div>
            <h2 className="text-base lg:text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-5 rounded-full bg-[#5200f5] inline-block shrink-0" />
              Ship Maintenance &amp; Engine Parts
            </h2>
            <p className="text-slate-500 text-xs mb-3 leading-relaxed">
              Quality components from leading manufacturers to keep your vessel in peak condition.
            </p>
            <div className="flex flex-col gap-2">
              {maintenanceParts.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg border border-slate-100"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5200f5] shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">
          Your Trusted Maritime Supplier in Lagos, Nigeria
        </h2>
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-10">
          We supply marine safety equipment and ship maintenance parts to customers across
          Nigeria, Cotonou, Lome, Tema, Dakar, Douala, Abidjan, and other West African
          ports. Whether you need a single replacement part or a complete restock of safety
          gear, contact our Lagos team for fast availability and competitive pricing.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/contact-us">
            <button className="px-6 py-3 bg-[#5200f5] hover:bg-[#4400cc] text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-[#5200f5]/25">
              Enquire About Equipment
            </button>
          </Link>
          <Link href="/products">
            <button className="px-6 py-3 border border-slate-200 hover:border-slate-300 text-slate-700 text-sm font-semibold rounded-lg transition-colors">
              View All Products
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
