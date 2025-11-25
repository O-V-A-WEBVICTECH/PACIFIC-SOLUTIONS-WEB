import Image from "next/image";
import { Metadata } from "next";
import Script from "next/script";
import { Package, Shield, Ship, Anchor, Zap, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Pacific Safety Solution limited || Products",
  description:
    "PACIFIC SAFETY SOLUTION LIMITED we deal and supply ship maintenance part and other marine supplies such as ship Life Jackets and Work Vests, Immersion Suits, Emergency Food Rations and Water Marine Distress Signals (Pyrotechnics) Safety Lights, New Inflatable Life rafts, MOB, HRU & Line thrower Navigational aids Engines etc",
  other: {
    "google-site-verification": "dVdoPIU1AD1peVcptgjN0nu_zxE6WElWXIrzYzcratA",
  },
};

export default function Page() {
  const products = [
    {
      title: "Life Jackets & Work Vests",
      description:
        "High-quality, durable life jackets and work vests designed for safety and comfort in marine environments.",
      image: "/images/life-vest.jpg",
      category: "Life-Saving",
    },
    {
      title: "Immersion Suits",
      description:
        "Protective suits to ensure safety in extreme conditions, offering thermal insulation and buoyancy.",
      image: "/images/dive-suit.jpeg",
      category: "Life-Saving",
    },
    {
      title: "Emergency Food Rations & Water",
      description:
        "Long-shelf-life rations and potable water for emergency preparedness at sea.",
      image: "/images/emergency-ration.jpg",
      category: "Emergency Supplies",
    },
    {
      title: "Marine Distress Signals",
      description:
        "Reliable pyrotechnics for signaling distress, ensuring visibility in emergency situations.",
      image: "/images/signal.jpg",
      category: "Fire-Fighting",
    },
    {
      title: "Safety Lights",
      description:
        "Durable, high-intensity lights for enhanced visibility and safety on vessels.",
      image: "/images/flashlight.jpg",
      category: "Life-Saving",
    },
    {
      title: "Lifeboat",
      description:
        "High-quality life boat for emergency evacuation and survival at sea.",
      image: "/images/lifeboat.jpg",
      category: "Life-Saving",
    },
    {
      title: "MOB, HRU & Line Thrower",
      description:
        "Man Overboard (MOB) devices, Hydrostatic Release Units (HRU), and line throwers for rescue operations.",
      image: "/images/hydro-device.png",
      category: "Life-Saving",
    },
    {
      title: "Navigational Aids",
      description:
        "Advanced navigational tools to ensure safe and accurate maritime navigation.",
      image: "/images/navigation.jpg",
      category: "Navigation",
    },
    {
      title: "Engines & Electrical Parts",
      description:
        "Reliable engines and electrical components for vessel maintenance and performance.",
      image: "/images/engine-parts.jpg",
      category: "Maintenance",
    },
    {
      title: "Lube Oil",
      description:
        "High-performance lubricants to ensure smooth operation of marine engines.",
      image: "/images/marine-oil-1.jpg",
      category: "Maintenance",
    },
    {
      title: "Wire Ropes & Lifting Gears",
      description:
        "Durable wire ropes, anchor chains, and mooring ropes for secure lifting and docking.",
      image: "/images/lifting-devices.png",
      category: "Maintenance",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/raft-3.webp",
      category: "Services",
    },
  ];

  const categories = [
    {
      name: "Life-Saving Appliances",
      icon: Shield,
      description: "Essential equipment for crew safety",
      color: "from-red-600 to-orange-600",
    },
    {
      name: "Fire-Fighting Equipment",
      icon: Zap,
      description: "Emergency response systems",
      color: "from-orange-600 to-yellow-600",
    },
    {
      name: "Navigation Tools",
      icon: Compass,
      description: "Precision navigation equipment",
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "Ship Maintenance",
      icon: Anchor,
      description: "Parts and supplies for vessel upkeep",
      color: "from-indigo-600 to-purple-600",
    },
  ];

  return (
    <>
      <head>
        <Script
          id="organization-logo"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://pacificsafetysolutionltd.com",
              logo: "https://pacificsafetysolutionltd.com/images/logo.png",
              name: "Pacific Safety Solution Limited",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2348054094450",
                contactType: "Customer Service",
                areaServed: "NG",
              },
            }),
          }}
        />
      </head>

      <div className="bg-gradient-to-b from-white to-gray-50">
        {/* Hero Section */}
        <div className="relative h-[300px] lg:h-[400px] overflow-hidden">
          <Image
            width={1920}
            height={1080}
            src="/images/workers.jpg"
            alt="Marine safety professionals"
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
                  Product Catalog
                </span>
              </div>
              <h1 className="text-4xl lg:text-7xl font-bold text-white mb-4">
                Approvals & Products
              </h1>
              <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
                Comprehensive marine safety equipment and ship maintenance
                supplies
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
          {/* Categories Overview */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Product Categories
              </h2>
              <p className="text-xl text-gray-600">
                Complete solutions for marine safety and vessel maintenance
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-gray-600">
                Browse our extensive catalog of marine safety equipment
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <Image
                      width={500}
                      height={500}
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-indigo-700 border border-indigo-100">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <button className="group/btn w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300">
                      <span>Request Quote</span>
                      <Ship className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="max-w-6xl mx-auto mt-20">
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Certified & Approved Products
                </h2>
                <p className="text-lg text-white/90 max-w-2xl mx-auto">
                  All our products meet international maritime safety standards
                  and regulations
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <p className="text-3xl font-bold mb-2">IMO</p>
                  <p className="text-sm text-white/90">Compliant</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <p className="text-3xl font-bold mb-2">SOLAS</p>
                  <p className="text-sm text-white/90">Certified</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <p className="text-3xl font-bold mb-2">CE</p>
                  <p className="text-sm text-white/90">Approved</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-5xl mx-auto mt-20">
            <div className="bg-white rounded-3xl p-12 border border-gray-100 text-center shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Need Help Finding the Right Product?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to assist you in selecting the
                perfect equipment for your vessel
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact-us"
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Contact Our Team
                </a>
                <a
                  href="/liferaft-service-request"
                  className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-full border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300"
                >
                  Request Service
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
