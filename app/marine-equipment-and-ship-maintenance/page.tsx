import Image from "next/image";
import {
  Package,
  Shield,
  Wrench,
  CheckCircle,
  Award,
  Anchor,
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/images/marine-safety-equipment.jpg"
          alt="Marine Safety Equipment & Ship Maintenance Parts"
          priority
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-indigo-800/90" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Package className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                Complete Solutions
              </span>
            </div>
            <h1 className="text-2xl lg:text-6xl font-bold text-white mb-4 px-4">
              Marine Safety Equipment & Ship Maintenance Parts
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              Your one-stop maritime partner for safety and maintenance
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Anchor className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Your Maritime Partner
                </h2>
                <p className="text-gray-600">
                  Reliable parts and equipment for every vessel
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <p className="text-gray-800 text-lg leading-relaxed">
                Operating a vessel requires a constant supply of reliable parts
                and equipment. As your dedicated maritime partner, we stock an
                extensive inventory of all the essentials you need to keep your
                ship safe and running smoothly. Our product line is divided into
                two key areas:
              </p>
            </div>
          </div>

          {/* Marine Safety Equipment */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Marine Safety Equipment
                </h2>
                <p className="text-gray-600">
                  Certified safety gear that meets international standards
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-6">
              <p className="text-gray-800 text-lg leading-relaxed">
                We supply a comprehensive range of certified safety gear. This
                includes life jackets, flares, survival suits, immersion suits,
                lifebuoys, first-aid kits, and fire extinguishers. We only
                source products that meet or exceed international safety
                standards (e.g., SOLAS, USCG approved), ensuring every item is
                built to perform when it is needed most.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Life-Saving Equipment
                  </h3>
                  <p className="text-sm text-gray-600">
                    Life jackets, survival suits, immersion suits, lifebuoys
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Emergency Supplies
                  </h3>
                  <p className="text-sm text-gray-600">
                    Flares, first-aid kits, fire extinguishers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl md:col-span-2">
                <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    International Standards
                  </h3>
                  <p className="text-sm text-gray-600">
                    All products meet or exceed SOLAS and USCG approval
                    standards
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Ship Maintenance Parts */}
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  Ship Maintenance Parts
                </h2>
                <p className="text-white/90">
                  Quality components for peak vessel performance
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-6">
              <p className="text-white text-lg leading-relaxed">
                We understand that a vessel is a complex machine that requires
                ongoing maintenance. Our inventory includes a wide variety of
                essential maintenance parts, such as engine filters, impellers,
                anodes, oils, greases, marine hardware, bilge pumps, and
                navigation lights. We work with leading manufacturers to provide
                quality components that you can trust to keep your vessel in
                peak condition, minimizing downtime and maximizing efficiency.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Engine Components</h3>
                  <p className="text-sm text-white/90">
                    Filters, impellers, oils, greases, and more
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Essential Hardware</h3>
                  <p className="text-sm text-white/90">
                    Marine hardware, bilge pumps, navigation lights
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Corrosion Protection
                  </h3>
                  <p className="text-sm text-white/90">
                    Anodes and protective coatings
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Trusted Manufacturers
                  </h3>
                  <p className="text-sm text-white/90">
                    Quality components from leading brands
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* One-Stop-Shop Benefits */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Us?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  One-Stop Shop
                </h3>
                <p className="text-gray-700">
                  Simplified procurement for both safety and maintenance needs
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Quality Assured
                </h3>
                <p className="text-gray-700">
                  Only certified products that meet international standards
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Reliable Operations
                </h3>
                <p className="text-gray-700">
                  Minimize downtime and maximize vessel efficiency
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Enhance Your Vessel&apos;s Safety and Performance?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your specific needs and discover how
              we can support your maritime operations
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Package className="w-5 h-5" />
              Get Started Today
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
