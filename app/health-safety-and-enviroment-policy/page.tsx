import Image from "next/image";
import { Shield, CheckCircle, Leaf, AlertTriangle } from "lucide-react";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/images/boat-men.jpg"
          alt="Pacific Safety Solution HSE policy"
          priority
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-indigo-800/90" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Shield className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                Our Commitment
              </span>
            </div>
            <h1 className="text-2xl lg:text-6xl font-bold text-white mb-4 px-4">
              Health Safety and Environment (HSE) Policy
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              Protecting our people, clients, and the environment
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Policy Statement */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Our Commitment
                </h2>
                <p className="text-gray-600">
                  Safety and environmental responsibility
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <p className="text-gray-800 text-lg leading-relaxed">
                Pacific Safety solution limited is committed to providing a safe
                and healthy working environment for all employees, visitors,
                clients and vendors operating within and outside the marine
                environment and also ensure to minimize the risk and
                environmental impact while carrying out our operations.
              </p>
            </div>
          </div>

          {/* HSE Core Principles */}
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  HSE Core Principles
                </h2>
                <p className="text-white/90">
                  Guiding our operations every day
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Commitment to Safety
                  </h3>
                  <p className="text-sm text-white/90">
                    Safety is our top priority in all operations
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Risk Management</h3>
                  <p className="text-sm text-white/90">
                    Proactive identification and mitigation of risks
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Environmental Protection
                  </h3>
                  <p className="text-sm text-white/90">
                    Minimizing our environmental impact
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Legal Compliance</h3>
                  <p className="text-sm text-white/90">
                    Adhering to all regulations and standards
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Continuous Improvements
                  </h3>
                  <p className="text-sm text-white/90">
                    Always striving to enhance our HSE performance
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    Training and Awareness
                  </h3>
                  <p className="text-sm text-white/90">
                    Empowering our team with knowledge and skills
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 md:col-span-2">
                <CheckCircle className="w-6 h-6 text-green-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Incident Reporting</h3>
                  <p className="text-sm text-white/90">
                    Transparent reporting and learning from incidents
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
