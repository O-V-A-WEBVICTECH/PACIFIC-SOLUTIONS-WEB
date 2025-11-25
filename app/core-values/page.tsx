import Image from "next/image";
import { Heart, Shield, Users, Award, Target } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/images/boat-men.jpg"
          alt="Pacific Safety Solution core values"
          priority
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-indigo-800/90" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Heart className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                What We Stand For
              </span>
            </div>
            <h1 className="text-3xl lg:text-7xl font-bold text-white mb-4">
              Core Values
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Customer Focus */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Customer Focus
                </h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 lg:p-8">
              <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
                We will be the best we can be for our customers. Our focus is on
                the relationship we will build and maintain with them. We will
                do our best to service their needs and adapt to suit their
                ever-changing nature.
              </p>
            </div>
          </div>

          {/* Integrity */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Integrity
                </h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 lg:p-8">
              <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
                Our customers, suppliers, and employees are vital to our
                operations, building trust and confidence with these people is
                very important to us. We are committed to being honest,
                reliable, and upright in all we do.
              </p>
            </div>
          </div>

          {/* Teamwork */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                  Teamwork
                </h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 lg:p-8">
              <p className="text-gray-800 text-base lg:text-lg leading-relaxed mb-4">
                Teamwork is crucial to our success and customer satisfaction. We
                care about our team and continue to invest in their development.
              </p>
              <p className="text-gray-800 text-base lg:text-lg leading-relaxed">
                Our team is passionate about what they do and work together
                bringing a wealth of ever-growing expertise, experience,
                innovation, and optimism to better serve our customers.
              </p>
            </div>
          </div>

          {/* Professionalism */}
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-2">
                  Professionalism
                </h2>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/20">
              <p className="text-white text-base lg:text-lg leading-relaxed">
                We maintain a high level of professionalism in all that we do
                while being committed, confident, and goal oriented. This drives
                us to maintain a high level of efficiency as we continuously
                strive for excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Preview Section */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 text-center shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Our Vision & Mission
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover the guiding principles that drive our commitment to
              excellence
            </p>
            <a
              href="/vision-mission"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-5 h-5" />
              Explore Vision & Mission
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
