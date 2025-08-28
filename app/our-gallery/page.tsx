import Image from "next/image";

export default function GalleryPage() {
  const products = [
    {
      title: "Inflatable Life Rafts",
      description:
        "High-quality inflatable life rafts for emergency evacuation and survival at sea.",
      image: "/images/liferaft.webp",
    },

    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/boat-rentals.jpg",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/hero-image-1.webp",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/boat-2.webp",
    },
    {
      title: "Liferaft Rental Service",
      description:
        "Flexible liferaft rental options for short- or long-term maritime operations.",
      image: "/images/liferaft-3.jpg",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative">
        <div className="absolute top-[30%] lg:top-[60%] z-20 w-full flex items-center justify-center text-white">
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
