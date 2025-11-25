import Image from "next/image";
import {
  Anchor,
  CheckCircle,
  DollarSign,
  Shield,
  Clock,
  Wrench,
} from "lucide-react";

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/images/Crewsaver_Liferaft.jpg"
          alt="Inflatable Liferaft Rental"
          priority
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-indigo-800/90" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Anchor className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                Flexible Solutions
              </span>
            </div>
            <h1 className="text-2xl lg:text-6xl font-bold text-white mb-4 px-4">
              Inflatable Liferaft on Rental Basis
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              Cost-effective, hassle-free safety solutions for your vessel
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Main Description */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100 mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Anchor className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  Why Rent Instead of Own?
                </h2>
                <p className="text-gray-600">
                  Flexible, cost-effective, and worry-free
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
              <p className="text-gray-800 text-lg leading-relaxed">
                Owning an inflatable liferaft comes with the significant
                overhead of regular inspection, servicing, and storage, which
                can be a complex and costly process. Our inflatable liferaft
                rental program provides a flexible, cost-effective, and
                hassle-free alternative. We offer a wide range of liferafts,
                from small 4-person units to large 25-person models, all of
                which are meticulously maintained and certified to the highest
                safety standards. When you rent from us, you get a fully
                serviced, inspected, and ready-to-deploy liferaft without the
                long-term commitment or maintenance burdens. This is an ideal
                solution for vessels that operate seasonally, for recreational
                boat owners who want the highest level of safety without the
                ownership costs, or for commercial operators looking to manage
                their budget more efficiently. Our team handles all the
                servicing, ensuring the liferaft you receive is in perfect
                working order and fully compliant with all regulations. We
                provide the equipment, you get the peace of mind.
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white mb-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">
                  Key Benefits
                </h2>
                <p className="text-white/90">
                  What you get when you rent from us
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Cost-Effective</h3>
                  <p className="text-white/90">
                    No upfront investment or ongoing maintenance costs. Pay only
                    for what you need, when you need it.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Fully Serviced</h3>
                  <p className="text-white/90">
                    Every liferaft is meticulously inspected, serviced, and
                    certified before delivery to you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Safety Certified</h3>
                  <p className="text-white/90">
                    All units meet the highest safety standards and are fully
                    compliant with regulations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Flexible Terms</h3>
                  <p className="text-white/90">
                    Perfect for seasonal operations, short-term needs, or
                    budget-conscious operators.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Available Sizes */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Available Sizes
              </h2>
              <p className="text-xl text-gray-600">
                From small recreational boats to large commercial vessels
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  4-Person
                </div>
                <p className="text-gray-700">
                  Small vessels & recreational boats
                </p>
              </div>

              <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border-2 border-indigo-200">
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  6-10 Person
                </div>
                <p className="text-gray-700">Medium-sized vessels</p>
              </div>

              <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  12-25 Person
                </div>
                <p className="text-gray-700">Large commercial operations</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your liferaft rental needs and get a
              custom quote
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Anchor className="w-5 h-5" />
              Contact Us Now
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
