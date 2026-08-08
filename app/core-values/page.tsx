import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Values | Pacific Safety Solution Limited",
  description:
    "Learn about the core values that guide Pacific Safety Solution Limited - integrity, safety, excellence, and customer commitment in maritime services.",
  keywords:
    "core values, company values, safety commitment, maritime industry, corporate responsibility, integrity",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/core-values",
    title: "Core Values | Pacific Safety Solution Limited",
    description:
      "Learn about the core values and commitment to safety and excellence.",
  },
};

const values = [
  {
    icon: "🤝",
    title: "Customer Focus",
    body: "We will be the best we can be for our customers. Our focus is on the relationship we will build and maintain with them. We will do our best to service their needs and adapt to suit their ever-changing nature.",
  },
  {
    icon: "⚖️",
    title: "Integrity",
    body: "Our customers, suppliers, and employees are vital to our operations. Building trust and confidence with these people is very important to us. We are committed to being honest, reliable, and upright in all we do.",
  },
  {
    icon: "👥",
    title: "Teamwork",
    body: "Teamwork is crucial to our success and customer satisfaction. We care about our team and continue to invest in their development. Our team is passionate about what they do and work together, bringing a wealth of ever-growing expertise, experience, innovation, and optimism to better serve our customers.",
  },
  {
    icon: "🏆",
    title: "Professionalism",
    body: "We maintain a high level of professionalism in all that we do while being committed, confident, and goal-oriented. This drives us to maintain a high level of efficiency as we continuously strive for excellence.",
  },
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
          alt="Marine team"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
          <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">
            About Us
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
            Core Values
          </h1>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-16 py-12 lg:py-20 max-w-4xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((v) => (
            <div
              key={v.title}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-[#5200f5]/20 hover:shadow-lg hover:shadow-[#5200f5]/5 transition-all duration-200"
            >
              <div className="text-3xl mb-3">{v.icon}</div>
              <h2 className="text-base font-bold text-slate-900 mb-2">{v.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
