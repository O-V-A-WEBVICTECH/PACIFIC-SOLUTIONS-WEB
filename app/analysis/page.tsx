import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foam Analysis & Breathing Air Quality Testing in Nigeria | Pacific Safety Solution",
  description:
    "Professional foam concentrate analysis and breathing air quality testing for vessels in Nigeria. Compliant with MSC.1/Circ.1312, MSC.1/Circ.670, and ISO 8573-1. Serving Lagos and West Africa.",
  keywords:
    "foam analysis Nigeria, foam concentrate testing Lagos, breathing air quality test vessels Nigeria, air compressor testing marine, MSC 1312 foam test Nigeria, ISO 8573 breathing air, maritime foam analysis West Africa, fire suppression foam testing",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/analysis",
    title: "Foam Analysis & Breathing Air Quality Testing in Nigeria | Pacific Safety Solution",
    description:
      "MSC and ISO-compliant foam concentrate analysis and breathing air quality testing for marine vessels in Lagos, Nigeria.",
  },
};

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[220px] lg:h-[360px] overflow-hidden">
        <Image
          width={1600}
          height={600}
          src="/images/foam-analysis.jpg"
          alt="Foam concentrate analysis and air quality testing for marine vessels in Nigeria"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
          <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">
            Maritime Safety Services — Lagos, Nigeria
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
            Foam Analysis &amp; Breathing Air Quality Testing for Vessels in Nigeria
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-16 py-12 lg:py-20 max-w-4xl">

        <p className="text-slate-700 text-sm lg:text-base leading-relaxed mb-8 font-medium">
          Pacific Safety Solution Limited provides professional <strong>foam concentrate
          analysis and breathing air quality testing</strong> for marine vessels operating
          in Nigeria and across West Africa — in full compliance with international MSC
          and ISO maritime regulations.
        </p>

        {/* Foam analysis */}
        <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">
          Marine Foam Concentrate Analysis (MSC-Compliant)
        </h2>
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify mb-8">
          Our professional team uses the latest equipment to carry out <strong>dynamic foam
          concentrate and foam solution testing</strong>, measuring critical properties
          including foam height, drainage time, pH value, viscosity, sediment content, and
          expansion ratio. All tests are performed in accordance with:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {[
            "MSC.1/Circ.1312 — low expansion foam",
            "MSC.1/Circ.670 — high expansion foam",
            "Foam height & drainage time measurement",
            "pH value & viscosity analysis",
            "Sediment content testing",
            "Expansion ratio verification",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 px-4 py-3 bg-slate-50 rounded-lg border border-slate-100"
            >
              <span className="w-2 h-2 rounded-full bg-[#5200f5] shrink-0" />
              <span className="text-sm text-slate-700">{item}</span>
            </div>
          ))}
        </div>

        {/* Air quality */}
        <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">
          Breathing Air Quality Testing for Marine Compressors (ISO 8573-1)
        </h2>
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify mb-8">
          Regular <strong>breathing air compressor compartment testing</strong> is essential
          for crew safety and system efficiency on vessels. We test for the presence of water,
          oil, and solid particles in breathing air systems in full compliance with{" "}
          <strong>ISO 8573-1</strong>, protecting against contaminated breathing air aboard
          ships, offshore platforms, and other marine environments.
        </p>

        <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">
          Why Test Foam &amp; Air Quality on Your Vessel?
        </h2>
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-10">
          Degraded foam concentrate can fail to suppress fires when it matters most.
          Contaminated breathing air puts crew lives at risk. Regular certified testing
          ensures your fire-suppression systems and breathing apparatus are fully functional,
          keeps your vessel compliant with SOLAS and port state control requirements, and
          prevents costly equipment failures at sea.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/liferaft-service-request">
            <button className="px-6 py-3 bg-[#5200f5] hover:bg-[#4400cc] text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-[#5200f5]/25">
              Request Testing Service
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
