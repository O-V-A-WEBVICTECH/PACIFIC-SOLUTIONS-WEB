import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marine Equipment Calibration Services in Nigeria | Pacific Safety Solution",
  description:
    "Professional calibration of marine safety and industrial equipment in Nigeria — gas detectors, pressure gauges, flow meters, UTI, ODME, O₂ analyzers, and more. SOLAS and IMO-compliant calibration services in Lagos, West Africa.",
  keywords:
    "marine equipment calibration Nigeria, gas detector calibration Lagos, pressure gauge calibration Nigeria, UTI calibration, ODME calibration Lagos, flow meter calibration Nigeria, O2 analyzer calibration, maritime calibration services West Africa",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/calibration-of-equipment",
    title: "Marine Equipment Calibration Services in Nigeria | Pacific Safety Solution",
    description:
      "IMO and SOLAS-compliant calibration of gas detectors, pressure gauges, flow meters, and marine safety instruments in Lagos, Nigeria.",
  },
};

const equipmentList = [
  { name: "Gas Detector", detail: "Portable & fixed gas detection systems" },
  { name: "UTI (Ullage Temperature Interface)", detail: "For cargo tank measurement" },
  { name: "Pressure Gauge", detail: "Hydraulic & pneumatic pressure gauges" },
  { name: "Multi-Gas Detector", detail: "4-gas and multi-channel detectors" },
  { name: "Temperature / Pressure Calibrator", detail: "Process instrument calibration" },
  { name: "OWS (Oil Water Separator)", detail: "15 ppm bilge alarm calibration" },
  { name: "Fire Detection & Alarm System", detail: "Smoke, heat, and flame detectors" },
  { name: "Flow Meter", detail: "Liquid and gas flow measurement" },
  { name: "Sampling Pumps", detail: "Atmospheric & personal sampling" },
  { name: "Pressure Transmitter", detail: "Industrial & marine transmitters" },
  { name: "ODME (Oil Discharge Monitoring Equipment)", detail: "MARPOL compliance" },
  { name: "O₂ Analyzer", detail: "Oxygen content analysis in confined spaces" },
];

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[220px] lg:h-[360px] overflow-hidden">
        <Image
          width={1600}
          height={600}
          src="/images/gas-detector.jpg"
          alt="Marine gas detector and equipment calibration services in Nigeria"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
          <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">
            Maritime Safety Services — Lagos, Nigeria
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
            Marine &amp; Industrial Equipment Calibration Services in Nigeria
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-16 py-12 lg:py-20 max-w-4xl">

        <p className="text-slate-700 text-sm lg:text-base leading-relaxed mb-6 font-medium">
          Pacific Safety Solution Limited offers professional <strong>marine and industrial
          equipment calibration services</strong> in Lagos, Nigeria — covering gas detectors,
          pressure gauges, UTI systems, ODME, flow meters, O₂ analyzers, and more. All
          calibrations are performed in compliance with SOLAS, IMO, and MARPOL regulations.
        </p>

        <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify mb-10">
          Accurate, reliable instruments are critical for vessel safety, environmental
          compliance, and operational efficiency. Our certified technicians calibrate a wide
          range of marine and safety equipment — ensuring your instruments are accurate,
          traceable, and ready for port state control inspections across West Africa.
        </p>

        <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-5">
          Equipment We Calibrate in Nigeria
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {equipmentList.map((item) => (
            <div
              key={item.name}
              className="flex items-start gap-3 px-4 py-3 bg-slate-50 rounded-lg border border-slate-100"
            >
              <span className="w-2 h-2 rounded-full bg-[#5200f5] shrink-0 mt-1.5" />
              <div>
                <p className="text-sm font-semibold text-slate-800">{item.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-lg lg:text-xl font-bold text-slate-900 mb-3">
          Why Regular Instrument Calibration Matters
        </h2>
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-10">
          Uncalibrated instruments can give false readings that lead to unsafe decisions
          at sea. Gas detectors that don&apos;t alarm correctly, pressure gauges with
          drift, or ODME systems out of tolerance can all result in safety incidents,
          MARPOL violations, and detention at port. Regular calibration by qualified
          engineers keeps your vessel safe, legal, and operational.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/liferaft-service-request">
            <button className="px-6 py-3 bg-[#5200f5] hover:bg-[#4400cc] text-white text-sm font-semibold rounded-lg transition-colors shadow-lg shadow-[#5200f5]/25">
              Request Calibration Service
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
