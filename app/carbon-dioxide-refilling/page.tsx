import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute top-[25%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-4xl text-center lg:text-7xl">
            Carbon Dioxide Refilling
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
          We operate a highly efficient carbon dioxide filling facility using a
          4.5 ton refrigerated bulk storage tank and High Torque Pumping unit
          which can transfer about 10 lbs of Liquid Co2 per minute. A high
          accuracy calibrated weighing scale is also used to ensure the correct
          amount of Co2 has been filled. Our equipment and refilling method does
          not require freezing of cylinders prior to filling so work can
          commence almost immediately on receipt of cylinders. We also carry
          many adapters to allow us to fill various cylinders but we always
          advise customers to supply adapters if available as we may not carry
          for certain valve or head types.
        </p>
      </main>
    </div>
  );
}
