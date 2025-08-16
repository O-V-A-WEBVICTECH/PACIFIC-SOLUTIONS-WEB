import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute top-[25%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-4xl text-center lg:text-7xl">
            Marine Safety Equipment & Ship Maintenance Parts
          </h1>
        </div>
        <Image
          width={1000}
          height={600}
          src="/images/boat-men.jpg"
          alt="boat men"
          priority
          className="brightness-50 w-full h-[130px] lg:h-[280px] object-cover"
        />
      </div>
      <main className="mx-auto px-3 lg:px-0  lg:w-[80%]">
        <p className="text-sm font-[lato] lg:text-base text-neutral-950 text-justify leading-relaxed mt-2 mb-4 lg:mt-10">
          Operating a vessel requires a constant supply of reliable parts and
          equipment. As your dedicated maritime partner, we stock an extensive
          inventory of all the essentials you need to keep your ship safe and
          running smoothly. Our product line is divided into two key areas:
          Marine Safety Equipment: We supply a comprehensive range of certified
          safety gear. This includes life jackets, flares, survival suits,
          immersion suits, lifebuoys, first-aid kits, and fire extinguishers. We
          only source products that meet or exceed international safety
          standards (e.g., SOLAS, USCG approved), ensuring every item is built
          to perform when it is needed most. Ship Maintenance Parts: We
          understand that a vessel is a complex machine that requires ongoing
          maintenance. Our inventory includes a wide variety of essential
          maintenance parts, such as engine filters, impellers, anodes, oils,
          greases, marine hardware, bilge pumps, and navigation lights. We work
          with leading manufacturers to provide quality components that you can
          trust to keep your vessel in peak condition, minimizing downtime and
          maximizing efficiency. By providing a one-stop-shop for both safety
          and maintenance needs, we simplify your procurement process and ensure
          you have access to the quality components necessary for safe and
          reliable marine operations. Ready to enhance your vessel’s safety and
          performance? Contact us today to discuss your specific needs.
        </p>
      </main>
    </div>
  );
}
