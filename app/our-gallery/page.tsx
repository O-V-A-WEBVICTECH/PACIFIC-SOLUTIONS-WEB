import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Pacific Safety Solution Limited - Marine Equipment & Services",
  description:
    "View our gallery showcasing inflatable life rafts, marine safety equipment, ship maintenance services, and professional maritime solutions in action.",
  keywords:
    "marine gallery, inflatable life rafts, safety equipment gallery, ship maintenance, maritime services, product gallery",
  openGraph: {
    type: "website",
    url: "https://pacificsafetysolutionltd.com/our-gallery",
    title: "Gallery | Pacific Safety Solution Limited",
    description:
      "View our portfolio of marine safety equipment and professional maritime services.",
  },
};

const images = [
  { src: "/images/marine-1.jpg", alt: "Marine operations" },
  { src: "/images/marine-2.jpg", alt: "Liferaft service" },
  { src: "/images/marine-3.jpg", alt: "Marine equipment" },
  { src: "/images/marine-4.jpg", alt: "Safety inspection" },
  { src: "/images/marine-10.jpg", alt: "Marine safety equipment" },
  { src: "/images/marine-6.jpg", alt: "Vessel maintenance" },
  { src: "/images/marine-11.jpg", alt: "Equipment service" },
  { src: "/images/marine-14.jpg", alt: "Safety operations" },
  { src: "/images/marine-device-1.jpg", alt: "Marine device" },
  { src: "/images/marine-device-2.jpg", alt: "Marine device" },
  { src: "/images/marine-device-3.jpg", alt: "Marine device" },
  { src: "/images/marine-device-4.jpg", alt: "Marine device" },
  { src: "/images/marine-device-5.jpg", alt: "Marine device" },
  { src: "/images/marine-device-6.jpg", alt: "Marine device" },
  { src: "/images/marine-device-7.jpg", alt: "Marine device" },
  { src: "/images/marine-distress-signal-1.jpg", alt: "Distress signal" },
  { src: "/images/marine-distress-signal-2.jpg", alt: "Distress signal" },
  { src: "/images/emergency-ration.jpg", alt: "Emergency rations" },
  { src: "/images/emergency-drink.jpg", alt: "Emergency drinking water" },
  { src: "/images/life-vest.jpg", alt: "Life vest" },
  { src: "/images/line-thrower.jpg", alt: "Line thrower" },
  { src: "/images/fiberglass.jpg", alt: "Fiberglass repair" },
  { src: "/images/life-jacket.jpg", alt: "Life jacket" },
];

export default function GalleryPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[220px] lg:h-[360px] overflow-hidden">
        <Image
          width={1600}
          height={600}
          src="/images/hero-image-1.webp"
          alt="Marine safety operations"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/65 to-slate-900/30" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16">
          <p className="text-[#c4b5fd] text-xs font-semibold tracking-widest uppercase mb-2">
            Portfolio
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
            Our Gallery
          </h1>
        </div>
      </div>

      {/* Gallery grid */}
      <main className="container mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <p className="text-slate-500 text-sm text-center mb-10 max-w-xl mx-auto">
          A look at our equipment, services, and team in action across Nigeria and West Africa.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 lg:gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group rounded-xl overflow-hidden aspect-square bg-slate-100"
            >
              <Image
                fill
                src={img.src}
                alt={img.alt}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-end p-3">
                <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
