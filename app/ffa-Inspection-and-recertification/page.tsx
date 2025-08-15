import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white text-neutral-950">
      <div className="relative">
        <div className="absolute top-[18%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-3xl text-center lg:text-7xl">
            FFA & LSA Inspection and Re Certification
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
      <main className="mx-auto py-4 text-sm lg:text-base text-justify font-[lato]  px-3 lg:px-0 lg:w-[80%]">
        <p>
          Stay compliant and keep your crew safe. We provide expert inspection
          and re-certification services for all your Fire-Fighting Appliances
          (FFA) and Life-Saving Appliances (LSA). Our certified technicians
          ensure all equipment meets international standards, giving you peace
          of mind.
        </p>
      </main>
    </div>
  );
}
