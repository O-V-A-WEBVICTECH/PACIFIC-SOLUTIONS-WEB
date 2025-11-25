import Image from "next/image";
import {
  Shield,
  CheckCircle,
  FileCheck,
  AlertCircle,
  ClipboardCheck,
  Award,
  Wrench,
  Ship,
} from "lucide-react";

export default function Page() {
  const services = [
    {
      icon: Shield,
      title: "Fire-Fighting Appliances (FFA)",
      items: [
        "Fire extinguishers inspection and servicing",
        "Breathing apparatus sets testing",
        "Fire detection and alarm systems",
        "Fixed fire suppression systems",
        "Emergency fire pumps and hoses",
      ],
    },
    {
      icon: Ship,
      title: "Life-Saving Appliances (LSA)",
      items: [
        "Lifeboats and rescue boats",
        "Life jackets and work vests",
        "Inflatable life rafts",
        "Immersion suits and thermal protective aids",
        "Life buoys and lines",
      ],
    },
  ];

  const process = [
    {
      icon: ClipboardCheck,
      title: "Thorough Inspection",
      description:
        "Comprehensive examination of all safety equipment following SOLAS regulations and manufacturer specifications.",
    },
    {
      icon: Wrench,
      title: "Testing & Servicing",
      description:
        "Pressure testing cylinders, service release mechanisms, and functional testing of all safety components.",
    },
    {
      icon: FileCheck,
      title: "Component Replacement",
      description:
        "Replace any parts that no longer meet performance standards with certified original equipment.",
    },
    {
      icon: Award,
      title: "Certification",
      description:
        "Issue certified inspection reports recognized by classification societies and port state control.",
    },
  ];

  const compliance = [
    "International Convention for the Safety of Life at Sea (SOLAS)",
    "International Maritime Organization (IMO) regulations",
    "Classification society requirements",
    "Port state control standards",
    "Manufacturer maintenance guidelines",
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/images/oxygen-tank.webp"
          alt="Fire safety equipment"
          priority
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-orange-900/85 to-red-800/90" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                Safety Services
              </span>
            </div>
            <h1 className="text-3xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              LSA/FFA Inspection and
              <br />
              Re-Certification
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto">
              Ensuring your vessel&apos;s safety equipment performs flawlessly
              when it matters most
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Introduction Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Why Regular Inspection Matters
                </h2>
                <p className="text-gray-600">
                  Professional safety compliance for your vessel
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                Maintaining a safe and compliant vessel requires diligent
                inspection and upkeep of all your safety gear. Our expert team
                specializes in the thorough inspection and re-certification of
                all Fire-Fighting Appliances (FFA) and Life-Saving Appliances
                (LSA).
              </p>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 my-6">
                <p className="text-gray-800 font-medium mb-2">
                  This is not just about meeting a checklist — it&apos;s about
                  ensuring every piece of equipment will perform flawlessly in
                  an emergency.
                </p>
                <p className="text-gray-700">
                  With our certified inspection reports, you can have complete
                  peace of mind, knowing that in the event of an unforeseen
                  incident, your safety equipment will function as designed,
                  protecting your crew and allowing for a rapid and effective
                  response.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services We Inspect */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Equipment We Inspect & Certify
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive coverage of all safety systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Inspection Process
            </h2>
            <p className="text-xl text-gray-600">
              Four-step approach to complete safety compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center mb-4 mt-2 group-hover:from-red-600 group-hover:to-orange-600 transition-all">
                    <step.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Standards */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-red-600 via-orange-600 to-red-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Compliance Standards
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                We follow strict international regulations to ensure your vessel
                meets all safety requirements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {compliance.map((standard, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                >
                  <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-lg">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Services
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Complete Peace of Mind
                </h3>
                <p className="text-gray-600 text-sm">
                  Know your equipment will perform when needed most
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Full Compliance
                </h3>
                <p className="text-gray-600 text-sm">
                  Ready for classification society and port state inspections
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Certified Reports
                </h3>
                <p className="text-gray-600 text-sm">
                  Internationally recognized documentation
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-3xl p-12 border border-gray-100 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Schedule Your Inspection Today
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don&apos;t wait for an emergency. Ensure your vessel&apos;s safety
              equipment is inspection-ready and fully compliant.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Request Inspection
              </a>
              <a
                href="/liferaft-service-request"
                className="px-8 py-4 bg-white text-red-700 font-semibold rounded-full border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-300"
              >
                Service Request Form
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
