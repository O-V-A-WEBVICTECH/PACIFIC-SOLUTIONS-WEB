import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiberglass Boat & Ship Repair in Nigeria | Hull & Deck Repair Lagos | Pacific Safety Solution",
  description:
    "Professional fiberglass boat and ship repair in Lagos, Nigeria — hull repairs, deck repairs, gelcoat restoration, and structural reinforcement. Expert fiberglass technicians serving maritime industry across West Africa.",
  keywords:
    "fiberglass boat repair Nigeria, ship hull repair Lagos, fiberglass repair Lagos, gelcoat restoration Nigeria, vessel hull repair West Africa, deck repair marine Nigeria, structural fiberglass repair Lagos, boat repair service Nigeria",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/fiberglass-repairs",
    title: "Fiberglass Boat & Ship Repair in Nigeria | Hull & Deck Repair Lagos",
    description:
      "Expert fiberglass hull and deck repair for ships and vessels in Lagos, Nigeria — gelcoat restoration, spider crack repair, and structural reinforcement.",
  },
};

const repairTypes = [
  "Gelcoat touch-ups and colour matching",
  "Spider crack and stress fracture repair",
  "Impact damage and collision repair",
  "Hull delamination treatment",
  "Deck structural reinforcement",
  "Water ingress and osmotic blister repair",
  "Marine-grade resin lamination",
  "Full hull and deck restoration",
];

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[220px] lg:h-[360px] overflow-hidden">
        <Image
          width={1600}
          height={600}
          src="/images/boat-repair.jpg"
          alt="Fiberglass ship hull repair and gelcoat restoration in Lagos Nigeria"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
          <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">
            Maritime Services — Lagos, Nigeria
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
            Fiberglass Boat &amp; Ship Hull Repair in Nigeria
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-16 py-12 lg:py-20 max-w-4xl">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          <div className="flex-1">
            <p className="text-slate-700 text-sm lg:text-base leading-relaxed mb-6 font-medium">
              Pacific Safety Solution Limited provides expert <strong>fiberglass hull and
              deck repair for boats and ships in Lagos, Nigeria</strong> — from minor gelcoat
              damage to major structural reinforcement — serving vessel operators across
              West Africa.
            </p>

            <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify mb-6">
              Over time, wear and tear, UV exposure, and even minor collisions compromise
              a vessel&apos;s fiberglass hull and deck. These issues are more than cosmetic —
              left unaddressed, <strong>fiberglass damage leads to water ingress,
              delamination, and structural failure</strong> that can put your crew and
              vessel at risk.
            </p>

            <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify mb-8">
              Our skilled fiberglass technicians use high-quality <strong>marine-grade
              resins and fabrics</strong> to restore structural strength and integrity.
              We meticulously match colours to your vessel&apos;s original finish, making
              the repair virtually invisible. Prompt, professional repair protects your
              vessel&apos;s value and extends its operational life.
            </p>

            <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-4">
              Fiberglass Repair Services We Offer in Nigeria
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {repairTypes.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg border border-slate-100"
                >
                  <span className="w-2 h-2 rounded-full bg-[#5200f5] shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">
              Why Choose Us for Fiberglass Repairs in Lagos?
            </h2>
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-8">
              Our technicians are experienced in both minor cosmetic and complex structural
              fiberglass work on all types of marine vessels. We serve commercial operators,
              offshore companies, recreational boat owners, and ship agencies operating in
              Lagos, Cotonou, Lome, and across West Africa — delivering quality repairs
              that last.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link href="/liferaft-service-request">
                <button className="px-6 py-3 bg-[#5200f5] hover:bg-[#4400cc] text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-[#5200f5]/25">
                  Request Repair Service
                </button>
              </Link>
              <Link href="/contact-us">
                <button className="px-6 py-3 border border-slate-200 hover:border-slate-300 text-slate-700 text-sm font-semibold rounded-lg transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Side image */}
          <div className="w-full lg:w-72 shrink-0">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/images/fiberglass.jpg"
                alt="Fiberglass repair work on marine vessel in Lagos Nigeria"
                width={500}
                height={400}
                className="w-full h-56 lg:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
