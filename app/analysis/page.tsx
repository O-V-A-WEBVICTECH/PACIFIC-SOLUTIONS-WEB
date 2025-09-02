import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute top-[25%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-4xl text-center lg:text-7xl">
            FOAM ANALYSIS AND AIR QUALITY TEST
          </h1>
        </div>
        <Image
          width={1000}
          height={600}
          src="/images/foam-analysis.jpg"
          alt="boat men"
          priority
          className="brightness-50 w-full h-[130px] lg:h-[240px] object-cover"
        />
      </div>
      <main className="mx-auto px-3 lg:px-0  lg:w-[80%]">
        <p className="text-sm font-[lato] lg:text-base text-neutral-950 text-justify leading-relaxed mt-2 mb-4 lg:mt-10">
          At Pacific Safety Solution Ltd we engage our professional team and
          latest equipment to carryout the foam concentrate/solution test to
          ensure they meet quality standards, using techniques like dynamic foam
          analysis to measures properties such as the foam height, drainage
          time, and other key parameters like pH value, viscosity, sediment
          content, expansion ratio and in accordance with the latest MSC
          regulations viz-a-viz msc.1/Cir.1312 for low expansion foam whilst
          msc.1/Cir.670 for high expansion foam. Air Compressor quality test.
          However, Regular testing of the air compressor compartment is very
          crucial for optimizing system efficiency while protecting future
          harmful breathing air onboard vessels. We follow duly diligent rules
          for the usage of equipment and ensuring compliance with safety and
          quality standards for various breathing air compartments. The purpose
          is to test for the presence of water, oil, solid particles in
          accordance with ISO 8573-1.
        </p>
      </main>
    </div>
  );
}
