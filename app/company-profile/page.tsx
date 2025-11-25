import Image from "next/image";
import { CheckCircle, Globe, Ship, Award, Users, Target } from "lucide-react";

export default function Page() {
  const products = [
    "Life Jackets and Work Vests",
    "Immersion Suits",
    "Emergency Food Rations and Water",
    "Marine Distress Signals (Pyrotechnics)",
    "Safety Lights",
    "New Inflatable Life Rafts",
    "MOB, HRU & Line Thrower",
    "Navigational Aids",
    "Engines and Electrical Parts",
    "Lube Oil",
    "Wire Ropes, Lifting Gears, Anchor Chains, Mooring Rope",
  ];

  const stats = [
    { icon: Globe, label: "Countries Served", value: "12+" },
    { icon: Ship, label: "Vessels Serviced", value: "500+" },
    { icon: Award, label: "Years Experience", value: "3+" },
    { icon: Users, label: "Satisfied Clients", value: "100+" },
  ];

  const regions = [
    "Lagos, Nigeria",
    "Cotonou, Benin Republic",
    "Lome, Togo",
    "Tema & Takoradi, Ghana",
    "Dakar, Senegal",
    "Douala, Cameroon",
    "Freetown, Sierra Leone",
    "Abidjan, Ivory Coast",
    "Guinea-Conakry",
    "Republic of Liberia",
    "Angola",
    "Tanzania",
    "Gabon",
    "Mauritania",
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/images/liferaft.webp"
          alt="Marine safety equipment"
          priority
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/80 to-indigo-800/70" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="text-sm text-white font-medium">About Us</span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-4">
              Company Profile
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Your trusted partner in marine safety solutions across West Africa
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section
      <div className="relative -mt-20 z-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* About Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Who We Are
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-indigo-700">
                  Pacific Safety Solution Limited
                </span>{" "}
                is a duly registered Limited Liability Company with the
                Corporate Affairs Commission (CAC) in the Federal Republic of
                Nigeria with registration number{" "}
                <span className="font-semibold">RC1928296</span>.
              </p>

              <p className="text-lg">
                Our service station is strategically situated in Lagos, Nigeria,
                and we proudly extend our services to vessels trading across
                West and Central Africa.
              </p>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 my-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                  Our Clientele
                </h3>
                <p className="text-gray-700">
                  We serve oil and gas companies with offshore installations,
                  vessel owners and managers, ship agencies, foreign registered
                  commercial vessels through their local agents, as well as
                  foreign and locally registered yachts.
                </p>
              </div>

              <p className="text-lg">
                Founded in{" "}
                <span className="font-semibold text-indigo-700">2022</span> as a
                premier LSA/FFA service provider, we have since expanded our
                offerings to include comprehensive marine safety equipment and
                ship maintenance parts supply.
              </p>
            </div>
          </div>
        </div>

        {/* Service Coverage */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Service Coverage
            </h2>
            <p className="text-xl text-gray-600">
              Delivering excellence across West and Central Africa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions.map((region, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:from-indigo-600 group-hover:to-purple-600 transition-all">
                  <Globe className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-gray-700 group-hover:text-indigo-700 transition-colors">
                  {region}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center">
              Our Product Range
            </h2>
            <p className="text-lg text-white/90 mb-8 text-center max-w-3xl mx-auto">
              We supply a comprehensive range of marine safety equipment and
              ship maintenance parts
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{product}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Services */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Rental Service */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Ship className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Liferaft Rental Service
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We offer flexible liferaft rental services for operators who
                prefer short or extended rental periods. This cost-effective
                solution ensures your vessels remain compliant without the
                commitment of purchase.
              </p>
            </div>

            {/* Training & Certification */}
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Certified Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our service engineers receive regular refresher training at
                respective factories. Our service facility is fully equipped and
                approved in accordance with international standards, ensuring
                the highest quality of service.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-3xl p-12 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Work With Us?
            </h3>
            <p className="text-xl text-gray-600 mb-8">
              Contact our team today to discuss your marine safety needs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
              <a
                href="/products"
                className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-full border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                View Products
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
