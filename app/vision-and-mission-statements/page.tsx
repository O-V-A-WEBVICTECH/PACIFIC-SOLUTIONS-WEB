import Image from "next/image";
import { Target, Compass, CheckCircle, Star } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/images/boat-men.jpg"
          alt="Pacific Safety Solution vision and mission"
          priority
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-indigo-800/90" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Target className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                Our Purpose
              </span>
            </div>
            <h1 className="text-3xl lg:text-7xl font-bold text-white mb-4">
              Vision and Mission Statement
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              Guiding principles that drive our commitment to excellence
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Mission Statement */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Mission Statement
                </h2>
                <p className="text-gray-600">
                  Our commitment to safety and excellence
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <p className="text-gray-800 text-lg leading-relaxed">
                At Pacific Safety Solution Limited we are committed to safety
                and the principles and values guiding it rules in accordance
                with national and international safety laws and with customer
                service of the highest standard, services of high quality which
                are value specific to the needs of our customers, and our team
                with the knowledge, right tools, and work environment necessary
                to propel this company to the forefront of marine safety &
                survival.
              </p>
            </div>

            {/* Mission Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Safety First</h3>
                  <p className="text-sm text-gray-600">
                    Committed to national and international safety standards
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">
                    Quality Service
                  </h3>
                  <p className="text-sm text-gray-600">
                    High-quality services tailored to customer needs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Expert Team</h3>
                  <p className="text-sm text-gray-600">
                    Knowledgeable team with right tools and environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Compass className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  Vision Statement
                </h2>
                <p className="text-white/90">Our aspiration for the future</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-white text-lg leading-relaxed">
                To become the best leading marine safety and survival provider
                company where our customers receive the best technical and
                professional services with the right team, tools and paper work
                to deliver a top-notch marine service.
              </p>
            </div>

            {/* Vision Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Star className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Industry Leader</h3>
                  <p className="text-sm text-white/90">
                    Best in marine safety and survival services
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Star className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Professional Excellence</h3>
                  <p className="text-sm text-white/90">
                    Top technical and professional services
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <Star className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">Complete Solutions</h3>
                  <p className="text-sm text-white/90">
                    Right team, tools, and documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Preview Section */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 text-center shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Learn more about the principles that guide our daily operations
              and long-term strategy
            </p>
            <a
              href="/core-values"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Target className="w-5 h-5" />
              Explore Our Core Values
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
