import Image from "next/image";
import { Settings, CheckCircle, Gauge, Award, TrendingUp } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/images/gas-detector.jpg"
          alt="Calibration of Equipment"
          priority
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-indigo-800/90" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Settings className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                Precision Services
              </span>
            </div>
            <h1 className="text-3xl lg:text-7xl font-bold text-white mb-4">
              Calibration of Equipment
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              Professional calibration services for marine safety equipment
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Introduction Section */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Gauge className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Comprehensive Calibration Services
                </h2>
                <p className="text-gray-600">
                  Ensuring accuracy and compliance for your critical equipment
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <p className="text-gray-800 text-lg leading-relaxed mb-4">
                We calibrate equipment ranges from:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">
                    Gas detector
                  </span>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">UTI</span>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">
                    Pressure gauge
                  </span>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">
                    Multi gas detector
                  </span>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">
                    Temperature/pressure calibrator
                  </span>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">OWS</span>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">
                    Fire detection and alarm system
                  </span>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">Flow meter</span>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">
                    Sampling pumps
                  </span>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">
                    Pressure transmitter
                  </span>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">ODME</span>
                </div>

                <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">O₂ Analyzer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Categories */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white shadow-xl">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Detection Equipment</h3>
              <p className="text-white/90">
                Gas detectors, multi gas detectors, O₂ analyzers, and fire
                detection systems
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-xl">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Measurement Tools</h3>
              <p className="text-white/90">
                Pressure gauges, flow meters, UTI, temperature calibrators, and
                sampling pumps
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-8 text-white shadow-xl">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Marine Systems</h3>
              <p className="text-white/90">
                OWS, ODME, pressure transmitters, and specialized marine
                monitoring equipment
              </p>
            </div>
          </div>

          {/* Why Calibration Matters */}
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white mb-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  Why Regular Calibration Matters
                </h2>
                <p className="text-white/90">
                  Critical for safety, accuracy, and compliance
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Accuracy Assurance</h3>
                  <p className="text-white/90">
                    Maintain precise measurements for critical safety equipment
                    and operational systems
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">
                    Regulatory Compliance
                  </h3>
                  <p className="text-white/90">
                    Meet international maritime standards and certification
                    requirements
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Settings className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">
                    Equipment Longevity
                  </h3>
                  <p className="text-white/90">
                    Extend the life of your equipment through proper maintenance
                    and calibration
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">
                    Operational Efficiency
                  </h3>
                  <p className="text-white/90">
                    Optimize performance and minimize downtime with reliable,
                    calibrated equipment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Schedule Your Calibration Service
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to arrange professional calibration for your
              equipment
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Settings className="w-5 h-5" />
              Get Started
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
