import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company Profile | Pacific Safety Solution Limited",
  description:
    "Learn about Pacific Safety Solution Limited - CAC Registration RC1928296. A leading marine safety company providing services across West Africa including Nigeria, Ghana, Cameroon, Senegal, and more.",
  keywords:
    "company profile, about us, Pacific Safety Solution, marine company, Nigeria, West Africa, ship services",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/company-profile",
    title: "Company Profile | Pacific Safety Solution Limited",
    description:
      "Learn about Pacific Safety Solution Limited and our services across West Africa.",
  },
};

const supplies = [
  "Life Jackets and Work Vests",
  "Immersion Suits",
  "Emergency Food Rations and Water",
  "Marine Distress Signals (Pyrotechnics)",
  "Safety Lights",
  "New Inflatable Life Rafts",
  "MOB, HRU & Line Thrower",
  "Navigational Aids",
  "Engines and Electrical Parts",
  "Lube Oil",
  "Wire Ropes, Lifting Gears, Anchor Chains, Mooring Rope",
];

export default function Page() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <div className="relative h-[200px] lg:h-[360px] overflow-hidden">
        <Image
          width={1600}
          height={600}
          src="/images/liferaft.webp"
          alt="Liferaft"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/60 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
          <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">About Us</p>
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
            Company Profile
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-16 py-12 lg:py-20 max-w-4xl">
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify mb-4">
          PACIFIC SAFETY SOLUTION LIMITED is a duly registered, Limited
          Liability Company with CAC in the Federal Republic of Nigeria with
          registration number RC1928296. The company&apos;s service station is
          situated in Lagos, Nigeria and renders services to vessels trading
          within other African countries including Cotonou-Benin Republic,
          Lome-Togo, Tema and Takoradi-Ghana, Dakar-Senegal, Douala-Cameroon,
          Freetown-Sierra Leone, Abidjan-Ivory Coast, Guinea-Conakry, Republic
          of Liberia, Angola, Tanzania, Gabon, and Mauritania.
        </p>
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify mb-6">
          Her major customers include oil/gas companies with offshore
          installations, vessel owners/managers, ship agencies, foreign
          registered commercial vessels through their local agents, and foreign
          and locally registered yachts. The company was founded in 2022
          primarily as an LSA/FFA service provider and later grew into supplies
          of other marine and ship maintenance parts including:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {supplies.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg border border-slate-100"
            >
              <span className="w-2 h-2 rounded-full bg-[#5200f5] shrink-0" />
              <span className="text-sm text-slate-700">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify">
          We also offer a liferaft rental service for operators who find it
          beneficial to rent liferafts for either short or extended periods. Our
          service engineers receive refresher training courses at the respective
          factories frequently, and our service facility is fully equipped and
          approved in accordance with international standards.
        </p>
      </main>
    </div>
  );
}
