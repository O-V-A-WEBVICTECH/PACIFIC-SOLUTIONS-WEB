import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inflatable Liferaft Rental in Nigeria | SOLAS-Certified | Pacific Safety Solution",
  description:
    "Rent SOLAS-certified inflatable liferafts in Nigeria — 4-person to 25-person capacity. Fully serviced, inspected, and ready to deploy. Cost-effective alternative to liferaft ownership for vessels operating in Lagos and West Africa.",
  keywords:
    "inflatable liferaft rental Nigeria, liferaft hire Lagos, SOLAS liferaft rental, rent liferaft Nigeria, liferaft on hire West Africa, lifeboat rental Nigeria, marine safety equipment rental Lagos, short term liferaft hire Nigeria",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/inflatable-liferaft-rental",
    title: "Inflatable Liferaft Rental in Nigeria | SOLAS-Certified | Pacific Safety Solution",
    description:
      "SOLAS-certified inflatable liferaft rental in Lagos, Nigeria — 4 to 25-person capacity, fully serviced and ready to deploy.",
  },
};

const benefits = [
  "4-person to 25-person SOLAS-certified capacity",
  "Fully serviced and inspected before each deployment",
  "Compliant with SOLAS and IMO regulations",
  "No long-term ownership or maintenance commitment",
  "All servicing handled by our certified engineers",
  "Available for short-term or extended rental periods",
  "Ideal for seasonal vessel operators in Nigeria",
  "Rapid deployment across Lagos and West Africa",
];

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[220px] lg:h-[360px] overflow-hidden">
        <Image
          width={1600}
          height={600}
          src="/images/Crewsaver_Liferaft.jpg"
          alt="SOLAS-certified inflatable liferaft rental in Nigeria — Pacific Safety Solution Lagos"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
          <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">
            Maritime Safety Services — Lagos, Nigeria
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
            Inflatable Liferaft Rental in Nigeria — SOLAS-Certified, Ready to Deploy
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-16 py-12 lg:py-20 max-w-4xl">

        <p className="text-slate-700 text-sm lg:text-base leading-relaxed mb-6 font-medium">
          Pacific Safety Solution Limited offers <strong>SOLAS-certified inflatable
          liferaft rental in Nigeria</strong> — a flexible, cost-effective alternative
          to liferaft ownership for vessel operators, ship agencies, and offshore
          companies operating in Lagos and across West Africa.
        </p>

        <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify mb-6">
          Owning an inflatable liferaft comes with significant overhead — regular
          inspection, annual servicing, hydrostatic testing, and approved storage
          facilities. Our <strong>liferaft hire programme in Nigeria</strong> removes
          all of that burden. We supply fully serviced, inspected, and
          ready-to-deploy liferafts ranging from <strong>4-person to 25-person
          SOLAS-approved units</strong>.
        </p>

        <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify mb-10">
          When you rent a liferaft from us, our certified team handles all maintenance
          and compliance — you receive the equipment, you get the peace of mind.
          Ideal for seasonal operators, recreational boat owners, and commercial
          vessels looking to manage operational budgets efficiently.
        </p>

        <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-5">
          What&apos;s Included in Our Liferaft Rental Programme
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {benefits.map((item) => (
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
          Who Is This Liferaft Rental Service For?
        </h2>
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-10">
          Our inflatable liferaft hire service in Nigeria is suitable for vessel owners
          operating seasonally, foreign vessels calling at Nigerian ports requiring a
          compliant liferaft, recreational and charter boat operators, and any commercial
          operator seeking to reduce the cost and administrative burden of liferaft
          ownership while remaining fully SOLAS-compliant.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/liferaft-service-request">
            <button className="px-6 py-3 bg-[#5200f5] hover:bg-[#4400cc] text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-[#5200f5]/25">
              Request a Rental
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
