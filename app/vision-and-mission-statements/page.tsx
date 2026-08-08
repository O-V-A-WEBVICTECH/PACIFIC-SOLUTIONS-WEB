import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Mission Statement | Pacific Safety Solution Limited",
  description:
    "Our vision is to be the leading provider of marine safety solutions in West Africa. Our mission focuses on delivering excellence, safety, and reliability in all maritime services.",
  keywords:
    "vision, mission, company vision, mission statement, maritime goals, business vision, strategic direction",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/vision-and-mission-statements",
    title: "Vision & Mission Statement | Pacific Safety Solution Limited",
    description:
      "Learn about our vision and mission to be the leading provider of marine safety solutions.",
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
          src="/images/boat-men.jpg"
          alt="Marine team at work"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
          <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">
            About Us
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
            Vision &amp; Mission Statement
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-16 py-12 lg:py-20 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#5200f5] flex items-center justify-center text-white text-sm font-bold">M</span>
              <h2 className="text-lg font-bold text-slate-900">Mission Statement</h2>
            </div>
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
              At Pacific Safety Solution Limited we are committed to safety and the
              principles and values guiding it — in accordance with national and
              international safety laws and with customer service of the highest
              standard. We deliver services of high quality which are value-specific
              to the needs of our customers, and equip our team with the knowledge,
              right tools, and work environment necessary to propel this company to
              the forefront of marine safety &amp; survival.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-slate-900 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-8 rounded-lg bg-[#5200f5] flex items-center justify-center text-white text-sm font-bold">V</span>
              <h2 className="text-lg font-bold text-white">Vision Statement</h2>
            </div>
            <p className="text-slate-300 text-sm lg:text-base leading-relaxed">
              To become the best leading marine safety and survival provider company
              where our customers receive the best technical and professional
              services — with the right team, tools, and documentation to deliver
              a top-notch marine service.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
