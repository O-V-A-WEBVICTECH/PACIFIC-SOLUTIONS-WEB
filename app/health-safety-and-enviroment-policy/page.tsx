import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health, Safety & Environment Policy | Pacific Safety Solution",
  description:
    "Our comprehensive Health, Safety, and Environment (HSE) policy ensures safe operations and environmental responsibility in all maritime services and operations.",
  keywords:
    "HSE policy, health and safety, environmental policy, maritime safety, occupational health, environmental responsibility",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/health-safety-and-enviroment-policy",
    title: "Health, Safety & Environment Policy",
    description:
      "Our comprehensive HSE policy for safe and responsible maritime operations.",
  },
};

const principles = [
  { icon: "🛡️", label: "Commitment to Safety" },
  { icon: "⚠️", label: "Risk Management" },
  { icon: "🌱", label: "Environmental Protection" },
  { icon: "📋", label: "Legal Compliance" },
  { icon: "📈", label: "Continuous Improvement" },
  { icon: "🎓", label: "Training and Awareness" },
  { icon: "📣", label: "Incident Reporting" },
];

export default function Page() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[220px] lg:h-[360px] overflow-hidden">
        <Image
          width={1600}
          height={600}
          src="/images/boat-men.jpg"
          alt="Marine safety operations"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
          <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">
            About Us
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
            Health, Safety &amp; Environment Policy
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-16 py-12 lg:py-20 max-w-4xl">
        <p className="text-slate-600 text-sm lg:text-base leading-relaxed text-justify mb-10">
          Pacific Safety Solution Limited is committed to providing a safe and
          healthy working environment for all employees, visitors, clients, and
          vendors operating within and outside the marine environment. We also
          ensure the minimization of risk and environmental impact while
          carrying out our operations.
        </p>

        <h2 className="text-base font-bold text-slate-900 mb-5">
          Our HSE Core Principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((p) => (
            <div
              key={p.label}
              className="flex items-center gap-3 px-4 py-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-[#5200f5]/20 transition-colors"
            >
              <span className="text-2xl">{p.icon}</span>
              <span className="text-sm font-medium text-slate-700">{p.label}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
