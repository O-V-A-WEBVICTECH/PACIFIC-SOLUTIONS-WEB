import Image from "next/image";
import {
  Wrench,
  Shield,
  CheckCircle,
  AlertTriangle,
  Sparkles,
  Clock,
  Award,
  Layers,
} from "lucide-react";

export default function Page() {
  const services = [
    {
      icon: Sparkles,
      title: "Gelcoat Touch-Ups",
      description:
        "Minor scratches and surface imperfections restored to original finish",
    },
    {
      icon: AlertTriangle,
      title: "Spider Crack Repair",
      description:
        "Surface cracks sealed and reinforced to prevent water ingress",
    },
    {
      icon: Shield,
      title: "Impact Damage Restoration",
      description:
        "Significant collision damage repaired with structural reinforcement",
    },
    {
      icon: Layers,
      title: "Delamination Repair",
      description:
        "Layer separation issues addressed with marine-grade materials",
    },
    {
      icon: Wrench,
      title: "Structural Reinforcement",
      description: "Complex repairs to restore hull and deck integrity",
    },
    {
      icon: Sparkles,
      title: "Color Matching & Finishing",
      description: "Perfect color blending for invisible repairs",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Damage Assessment",
      description:
        "Thorough inspection to determine extent of damage and optimal repair approach",
    },
    {
      step: "02",
      title: "Surface Preparation",
      description:
        "Proper cleaning, sanding, and preparation of the damaged area",
    },
    {
      step: "03",
      title: "Material Application",
      description:
        "Application of marine-grade resins and fabrics with precision techniques",
    },
    {
      step: "04",
      title: "Curing & Finishing",
      description:
        "Proper curing time followed by sanding, polishing, and color matching",
    },
  ];

  const issues = [
    "Water ingress and moisture damage",
    "Delamination and layer separation",
    "Structural weakness and failure",
    "Decreased vessel value",
    "Compromised safety",
    "Accelerated deterioration",
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Structural Integrity",
      description: "Restore full strength and durability to damaged areas",
    },
    {
      icon: Sparkles,
      title: "Aesthetic Appeal",
      description: "Invisible repairs that match your vessel's original finish",
    },
    {
      icon: Clock,
      title: "Extended Lifespan",
      description: "Protect your investment and extend operational life",
    },
    {
      icon: Award,
      title: "Professional Quality",
      description: "Marine-grade materials and expert craftsmanship",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/images/boat-repair.jpg"
          alt="Professional fiberglass boat repair"
          priority
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-cyan-900/85 to-blue-800/90" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Wrench className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                Repair Services
              </span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-4">
              Fiberglass Repairs
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              Expert restoration of your vessel&apos;s hull and deck integrity
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
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Why Fiberglass Repairs Matter
                </h2>
                <p className="text-gray-600">
                  Protecting your vessel&apos;s structural integrity and value
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Over time, wear and tear, and even minor collisions can
                compromise a vessel&apos;s fiberglass hull and deck. These
                issues are more than just cosmetic — if left unaddressed, they
                can lead to serious problems.
              </p>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 my-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Potential Issues if Left Unrepaired
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {issues.map((issue, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg">
                Our team consists of skilled fiberglass technicians who are
                experts in a wide range of repair services. We meticulously
                blend colors to match your vessel&apos;s original finish, making
                the repair virtually invisible. By addressing fiberglass damage
                promptly and professionally, we not only restore your
                vessel&apos;s aesthetic appeal but also protect its value and
                extend its operational life.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Repair Services
            </h2>
            <p className="text-xl text-gray-600">
              From minor touch-ups to major structural repairs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-cyan-600 transition-all">
                  <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Repair Process */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Repair Process
            </h2>
            <p className="text-xl text-gray-600">
              Professional approach to every repair
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {item.step}
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Materials & Quality */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Marine-Grade Materials
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                We use only the highest quality materials designed for marine
                environments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Premium Resins</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Marine-grade polyester and epoxy resins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>UV-resistant formulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Water-resistant and flexible</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Quality Fabrics</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>High-strength fiberglass cloth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>
                      Multiple weave patterns for different applications
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
                    <span>Optimal strength-to-weight ratio</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Professional Repair
            </h2>
            <p className="text-xl text-gray-600">
              Why choose our expert fiberglass services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Note */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Invisible Repairs
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Our meticulous color matching and finishing techniques ensure
                that repairs blend seamlessly with your vessel&apos;s original
                gelcoat, making damage virtually undetectable.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-12 border border-gray-100 text-center shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Restore Your Vessel?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Don&apos;t let fiberglass damage compromise your vessel&apos;s
              integrity. Contact us today for a professional assessment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Request Quote
              </a>
              <a
                href="/liferaft-service-request"
                className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Service Request
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
