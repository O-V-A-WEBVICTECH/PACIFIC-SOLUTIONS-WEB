import Image from "next/image";

export default function GalleryPage() {
  const products = [
    {
      title: "Inflatable Life Rafts",
      description:
        "High-quality inflatable life rafts for emergency evacuation and survival at sea.",
      image: "/images/marine-1.jpg",
    },

    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-2.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-3.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-4.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-10.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-6.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-11.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-14.jpg",
    },

    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-device-1.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-device-2.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-device-3.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-device-4.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-device-5.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-device-6.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-device-7.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-distress-signal-1.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/marine-distress-signal-2.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/emergency-ration.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/emergency-drink.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/life-vest.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/line-thrower.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/fiberglass.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/life-jacket.jpg",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative">
        <div className="absolute top-[30%] lg:top-[40%] z-20 w-full flex items-center justify-center text-white">
          <h1 className="text-4xl lg:text-7xl font-bold">Our Gallery</h1>
        </div>
        <Image
          width={1600}
          height={600}
          src="/images/hero-image-1.webp"
          alt="ship"
          priority
          className="brightness-50 w-full h-[140px] lg:h-[350px] object-cover"
        />
      </div>

      {/* Gallery */}
      <main className="mx-auto px-3 lg:px-0 lg:w-[85%] py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                width={500}
                height={400}
                src={product.image}
                alt={product.title}
                className="w-full h-[220px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-200">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
