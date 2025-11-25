import Image from "next/image";
import { Camera, Grid3x3, Maximize2 } from "lucide-react";

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Service Station Facility",
      category: "Facilities",
      image: "/images/marine-1.jpg",
    },
    {
      title: "Workshop Operations",
      category: "Facilities",
      image: "/images/marine-2.jpg",
    },
    {
      title: "Equipment Storage",
      category: "Facilities",
      image: "/images/marine-3.jpg",
    },
    {
      title: "Service Area",
      category: "Facilities",
      image: "/images/marine-4.jpg",
    },
    {
      title: "Inspection Station",
      category: "Facilities",
      image: "/images/marine-10.jpg",
    },
    {
      title: "Technical Workshop",
      category: "Facilities",
      image: "/images/marine-6.jpg",
    },
    {
      title: "Quality Control Area",
      category: "Facilities",
      image: "/images/marine-11.jpg",
    },
    {
      title: "Testing Facility",
      category: "Facilities",
      image: "/images/marine-14.jpg",
    },
    {
      title: "Safety Equipment Testing",
      category: "Equipment",
      image: "/images/marine-device-1.jpg",
    },
    {
      title: "LSA/FFA Inspection",
      category: "Equipment",
      image: "/images/marine-device-2.jpg",
    },
    {
      title: "Marine Safety Devices",
      category: "Equipment",
      image: "/images/marine-device-3.jpg",
    },
    {
      title: "Calibration Equipment",
      category: "Equipment",
      image: "/images/marine-device-4.jpg",
    },
    {
      title: "Testing Instruments",
      category: "Equipment",
      image: "/images/marine-device-5.jpg",
    },
    {
      title: "Quality Assurance Tools",
      category: "Equipment",
      image: "/images/marine-device-6.jpg",
    },
    {
      title: "Inspection Equipment",
      category: "Equipment",
      image: "/images/marine-device-7.jpg",
    },
    {
      title: "Marine Distress Signals",
      category: "Products",
      image: "/images/marine-distress-signal-1.jpg",
    },
    {
      title: "Pyrotechnic Signals",
      category: "Products",
      image: "/images/marine-distress-signal-2.jpg",
    },
    {
      title: "Emergency Food Rations",
      category: "Products",
      image: "/images/emergency-ration.jpg",
    },
    {
      title: "Emergency Drinking Water",
      category: "Products",
      image: "/images/emergency-drink.jpg",
    },
    {
      title: "Life Vests & Jackets",
      category: "Products",
      image: "/images/life-vest.jpg",
    },
    {
      title: "Line Throwing Apparatus",
      category: "Products",
      image: "/images/line-thrower.jpg",
    },
    {
      title: "Fiberglass Repair Work",
      category: "Services",
      image: "/images/fiberglass.jpg",
    },
    {
      title: "Life Jacket Inspection",
      category: "Products",
      image: "/images/life-jacket.jpg",
    },
  ];

  const categories = [
    { name: "All", count: galleryItems.length },
    {
      name: "Facilities",
      count: galleryItems.filter((item) => item.category === "Facilities")
        .length,
    },
    {
      name: "Equipment",
      count: galleryItems.filter((item) => item.category === "Equipment")
        .length,
    },
    {
      name: "Products",
      count: galleryItems.filter((item) => item.category === "Products").length,
    },
    {
      name: "Services",
      count: galleryItems.filter((item) => item.category === "Services").length,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="relative h-[350px] lg:h-[450px] overflow-hidden">
        <Image
          width={1920}
          height={1080}
          src="/images/hero-image-1.webp"
          alt="Pacific Safety Solution facilities and operations"
          priority
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/85 to-indigo-800/90" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <Camera className="w-4 h-4 text-white" />
              <span className="text-sm text-white font-medium">
                Photo Gallery
              </span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold text-white mb-4">
              Our Gallery
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              Explore our facilities, equipment, and services in action
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Photos", value: galleryItems.length },
              { label: "Facilities", value: 8 },
              { label: "Equipment", value: 7 },
              { label: "Products", value: 7 },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}+
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  index === 0
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-indigo-600 hover:text-indigo-700"
                }`}
              >
                {category.name}
                <span className="ml-2 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/3]"
              >
                {/* Image */}
                <Image
                  width={600}
                  height={450}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-indigo-700 border border-indigo-100">
                    {item.category}
                  </span>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-indigo-700" />
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-300 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    <Grid3x3 className="w-4 h-4" />
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-3xl shadow-2xl p-8 lg:p-12 text-white text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <Camera className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Want to See More?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Visit our facilities or contact us to learn more about our
              services, equipment, and capabilities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact-us"
                className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="/company-profile"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
