import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white text-neutral-950">
      <div className="relative">
        <div className="absolute top-[30%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-4xl lg:text-7xl">Company Profile</h1>
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
      <main className="mx-auto px-3 lg:px-0  font-[lato] lg:w-[80%]">
        <p className="text-sm text-neutral-950 text-justify leading-relaxed mt-2 mb-1 lg:mt-10">
          PACIFIC SAFETY SOLUTION LIMITED is a duly registered, Limited
          Liability Company with CAC in the federal republic of Nigeria with
          registration number RC1928296. The company’s service station is
          situated in Lagos Nigeria and the company covers/render services to
          vessels trading within other Africa countries. Its major customers
          include oil/gas companies with offshore installations, vessel
          owners/managers, ship agencies and other foreign registered commercial
          vessels through their local agents as well as foreign and locally
          registered yachts.
        </p>
        <p className="pt-1 text-sm">
          The company was founded in 2022 primarily as an LSA/FFA Service
          provider and later grown into supplies of other marine and ship
          maintenance parts such as:
        </p>
        <ul className="font-[lato]  text-sm list-inside mt-2 list-disc text-neutral-900 ">
          <li className="py-1 ">Life Jackets and Work Vests</li>
          <li className="py-1 ">Immersion Suits</li>
          <li className="py-1">Emergency Food Rations and Water</li>
          <li className="py-1">Marine Distress Signals (Pyrotechnics)</li>
          <li className="py-1">Safety Lights</li>
          <li className="py-1">New Inflatable Life Rafts</li>
          <li className="py-1">MOB, HRU & Line Thrower</li>
          <li className="py-1">Navigational Aids</li>
          <li className="py-1">Engines and Electrical Parts</li>
          <li className="py-1">Lube Oil</li>
          <li className="py-1">
            Wire Ropes, Lifting Gears, Anchor Chains, Mooring Rope
          </li>
        </ul>
        <p className="my-3 text-sm font-[lato] text-justify leading-relaxed">
          We also offer a Liferaft rental service for operators who find it
          beneficial to rent liferafts for either short or extended periods. Our
          Service Engineers receive a refresher training courses at the
          respective factories frequently and our Service facility is fully
          equipped and approved in accordance with international standards
        </p>
      </main>
    </div>
  );
}
