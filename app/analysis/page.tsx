import Image from "next/image";
import {
  Microscope,
  Wind,
  CheckCircle,
  Award,
  Droplets,
  Gauge,
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/images/foam-analysis.jpg"
          alt="Foam Analysis and Air Quality Testing"
          priority
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-indigo-800/90" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Microscope className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                Professional Testing
              </span>
            </div>
            <h1 className="text-2xl lg:text-6xl font-bold text-white mb-4 px-4">
              Foam Analysis and Air Quality Test
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              Advanced testing services ensuring safety and compliance
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Foam Analysis Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Droplets className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Foam Concentrate Analysis
                </h2>
                <p className="text-gray-600">
                  Comprehensive testing to meet quality standards
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 mb-6">
              <p className="text-gray-800 text-lg leading-relaxed">
                At Pacific Safety Solution Ltd we engage our professional team
                and latest equipment to carryout the foam concentrate/solution
                test to ensure they meet quality standards, using techniques
                like dynamic foam analysis to measures properties such as the
                foam height, drainage time, and other key parameters like pH
                value, viscosity, sediment content, expansion ratio and in
                accordance with the latest MSC regulations viz-a-viz
                msc.1/Cir.1312 for low expansion foam whilst msc.1/Cir.670 for
                high expansion foam.
              </p>
            </div>

            {/* Foam Testing Parameters */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Foam Height</h3>
                  <p className="text-sm text-gray-600">
                    Precise measurement of foam expansion
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Drainage Time
                  </h3>
                  <p className="text-sm text-gray-600">
                    Analysis of foam stability
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">pH Value</h3>
                  <p className="text-sm text-gray-600">
                    Chemical property testing
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Viscosity</h3>
                  <p className="text-sm text-gray-600">
                    Flow characteristics assessment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Sediment Content
                  </h3>
                  <p className="text-sm text-gray-600">
                    Purity and contamination check
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Expansion Ratio
                  </h3>
                  <p className="text-sm text-gray-600">
                    Performance measurement
                  </p>
                </div>
              </div>
            </div>

            {/* MSC Regulations */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-2xl">
                <Award className="w-8 h-8 mb-3" />
                <h3 className="font-bold text-xl mb-2">Low Expansion Foam</h3>
                <p className="text-white/90">
                  Tested per MSC.1/Cir.1312 regulations
                </p>
              </div>

              <div className="p-5 bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl">
                <Award className="w-8 h-8 mb-3" />
                <h3 className="font-bold text-xl mb-2">High Expansion Foam</h3>
                <p className="text-white/90">
                  Tested per MSC.1/Cir.670 regulations
                </p>
              </div>
            </div>
          </div>

          {/* Air Quality Testing Section */}
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Wind className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  Air Compressor Quality Test
                </h2>
                <p className="text-white/90">
                  Ensuring safe breathing air onboard vessels
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-6">
              <p className="text-white text-lg leading-relaxed">
                Regular testing of the air compressor compartment is very
                crucial for optimizing system efficiency while protecting future
                harmful breathing air onboard vessels. We follow duly diligent
                rules for the usage of equipment and ensuring compliance with
                safety and quality standards for various breathing air
                compartments. The purpose is to test for the presence of water,
                oil, solid particles in accordance with ISO 8573-1.
              </p>
            </div>

            {/* Testing Parameters */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Gauge className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Water Content</h3>
                  <p className="text-sm text-white/90">
                    Moisture level detection
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Gauge className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Oil Presence</h3>
                  <p className="text-sm text-white/90">Contamination testing</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Gauge className="w-6 h-6 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Solid Particles</h3>
                  <p className="text-sm text-white/90">
                    Particulate matter analysis
                  </p>
                </div>
              </div>
            </div>

            {/* ISO Compliance */}
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
              <div className="flex items-center gap-4">
                <Award className="w-10 h-10 text-yellow-300 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">
                    ISO 8573-1 Compliance
                  </h3>
                  <p className="text-white/90">
                    All testing conducted in accordance with international
                    standards for compressed air quality
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Regular Testing Matters
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Safety Assurance
                </h3>
                <p className="text-gray-700">
                  Protect crew with verified breathing air quality
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Gauge className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  System Efficiency
                </h3>
                <p className="text-gray-700">
                  Optimize compressor and foam system performance
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  Regulatory Compliance
                </h3>
                <p className="text-gray-700">
                  Meet MSC and ISO international standards
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Schedule Your Testing Today
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our professional team to arrange foam analysis or air
              quality testing for your vessel
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Microscope className="w-5 h-5" />
              Contact Us Now
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
