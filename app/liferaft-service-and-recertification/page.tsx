import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white text-neutral-950">
      <div className="relative">
        <div className="absolute top-[18%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-4xl text-center lg:text-7xl">
            Liferaft Service & Recertification
          </h1>
        </div>
        <Image
          width={1000}
          height={600}
          src="/images/boat-men.jpg"
          alt="boat men"
          priority
          className="brightness-50 w-full h-[120px] lg:h-[400px] object-cover"
        />
      </div>
      <main className="mx-auto px-3 lg:px-0 lg:w-[80%]">
        <p className="text-sm font-[lato] lg:text-base text-neutral-950 text-justify leading-relaxed mt-3 lg:mt-10">
          At Marine Safety Equipment Service and Sales Company Limited we
          operate a Liferaft service station which is certified and fully
          compliant with IMO Resolution A.761(18) as amended by RESOLUTION
          MSC.55(66), and all manufactures whom we represent. Our Technicians
          are factory trained internationally by the manufactures we represent
          frequently, and work in a controlled facility which is clean, well lit
          , fully enclosed and large enough to service several Liferafts at once
          , we are also able to maintain sufficient control of temperature and
          humidity to carry out effective service and repairs. A full inventory
          of spare parts is always in stock to support our facility and our own
          in-house cylinder shop is capable of hydro-testing Liferaft cylinders
          and refilling of Carbon Dioxide and Nitrogen, which significantly
          reduces the time and cost of Liferaft overhauls. Performing 10%
          overload tests on Davit Launch Liferafts are not a problem with our
          Davit Launch testing system capable of testing up to 37 Person DL –
          type Liferafts in accordance with SOLAS and guidelines as specified by
          the manufacturer.
        </p>
      </main>
    </div>
  );
}
