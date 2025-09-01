import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white text-neutral-950">
      <div className="relative">
        <div className="absolute top-[18%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-4xl text-center lg:text-7xl">
            Calibration of equipment
          </h1>
        </div>
        <Image
          width={1000}
          height={600}
          src="/images/liferaft-3.jpg"
          alt="boat men"
          priority
          className="brightness-50 w-full h-[140px] lg:h-[240px] object-cover"
        />
      </div>
      <main className="mx-auto px-3 lg:px-0 lg:w-[80%]">
        <div className="flex mb-2 flex-col mt-3 lg:flex-row gap-1 lg:gap-10">
          <div className="order-[5] lg:order-none flex-1">
            <p className="py-2">We calibrate equipment ranges from:</p>
            <ul className="list-disc text-sm lg:text-base list-inside space-y-1">
              <li>Gas detector</li>
              <li>UTI</li>
              <li>Pressure gauge</li>
              <li>Multi gas detector</li>
              <li>Temperature/pressure calibrator</li>
              <li>OWS</li>
              <li>Fire detection and alarm system</li>
              <li>Flow meter</li>
              <li>Sampling pumps</li>
              <li>Pressure transmitter</li>
              <li>ODME</li>
              <li>O₂ Analyzer</li>
            </ul>
          </div>
          {/* <div className="order-[1] lg:order-none flex-1">
            <Image
              alt="raft"
              width={1000}
              height={1000}
              src="/images/liferaft-3.jpg"
              quality={100}
              className="rounded-md"
            />
          </div> */}
        </div>
      </main>
    </div>
  );
}
