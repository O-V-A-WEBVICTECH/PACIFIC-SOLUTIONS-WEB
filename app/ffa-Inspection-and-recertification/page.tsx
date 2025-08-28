import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white text-neutral-950">
      <div className="relative">
        <div className="absolute top-[18%] lg:top-[22%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-3xl text-center lg:text-7xl">
            LSA/FFA Inspection and Re-Certification
          </h1>
        </div>
        <Image
          width={1000}
          height={600}
          src="/images/oxygen-tank.webp"
          alt="oxygen tanks"
          priority
          className="brightness-50 w-full h-[120px] lg:h-[240px] object-cover"
        />
      </div>
      <main className="mx-auto py-4 text-sm lg:text-base text-justify font-[lato]  px-3 lg:px-0 lg:w-[80%]">
        <p>
          Maintaining a safe and compliant vessel requires diligent inspection
          and upkeep of all your safety gear. Our expert team specializes in the
          thorough inspection and re-certification of all Fire-Fighting
          Appliances (FFA) and Life-Saving Appliances (LSA). This is not just
          about meeting a checklist; it&apos;s about ensuring every piece of
          equipment will perform flawlessly in an emergency. We follow strict
          international regulations, including the International Convention for
          the Safety of Life at Sea (SOLAS), ensuring that your vessel is fully
          compliant and ready for inspection by classification societies and
          port state control. Our comprehensive process includes meticulous
          checks of everything from fire extinguishers and breathing apparatus
          sets to lifeboats, life jackets, and survival suits. We pressure-test
          cylinders, service release mechanisms, and replace any components that
          no longer meet performance standards. With our certified inspection
          reports, you can have complete peace of mind, knowing that in the
          event of an unforeseen incident, your safety equipment will function
          as it was designed to, protecting your crew and allowing for a rapid
          and effective response
        </p>
      </main>
    </div>
  );
}
