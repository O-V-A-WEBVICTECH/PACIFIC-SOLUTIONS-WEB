import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute top-[25%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-4xl text-center lg:text-7xl">
            Carbon Dioxide Refilling & Medical Oxygen n
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
          The integrity of your vessel&apos;s onboard firefighting and emergency
          medical systems is paramount. We provide professional refilling
          services for Carbon Dioxide (CO2) cylinders used in fixed firefighting
          systems and portable extinguishers. A properly charged CO2 system is a
          critical first line of defense against onboard fires. Our process
          involves a thorough inspection of each cylinder before refilling to
          ensure it is safe and free of damage, followed by a precise refill to
          the correct weight and pressure. This guarantees your fire suppression
          system is ready to activate instantly and effectively when it matters
          most. Beyond fire safety, we also supply and refill Medical Oxygen
          cylinders. Having a reliable supply of medical oxygen is crucial for
          treating a variety of medical emergencies at sea, from respiratory
          distress to trauma. We ensure that our medical oxygen is of the
          highest purity and that all cylinders are handled and stored according
          to strict medical-grade protocols. By offering both services, we serve
          as your single partner for maintaining two of the most critical
          emergency systems on your vessel.
        </p>
      </main>
    </div>
  );
}
