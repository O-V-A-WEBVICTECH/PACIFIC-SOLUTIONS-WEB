import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white text-neutral-950">
      <div className="relative">
        <div className="absolute top-[18%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-3xl text-center lg:text-7xl">
            FFA & LSA Inspection AND Re Certification
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
      <main className="mx-auto text-sm lg:text-base text-justify font-[lato]  px-2 lg:px-0 lg:w-[80%]">
        <p>
          Comprehensive Marine Safety Solutions Your vessel&apos;s safety and
          readiness are our top priorities. We offer a full range of marine
          safety services and supplies to ensure you meet all regulatory
          standards and are prepared for any situation at sea. Our Services FFA
          & LSA Inspection and Re-certification Stay compliant and keep your
          crew safe. We provide expert inspection and re-certification services
          for all your Fire-Fighting Appliances (FFA) and Life-Saving Appliances
          (LSA). Our certified technicians ensure all equipment meets
          international standards, giving you peace of mind. Inflatable Liferaft
          Rental Whether you need a temporary solution or want to avoid the
          costs of ownership and maintenance, our inflatable liferaft rental
          service is the perfect choice. We offer a variety of sizes and
          capacities to suit your specific needs, all maintained to the highest
          safety standards. CO2 Refilling & Medical Oxygen We offer professional
          refilling services for fire suppression systems, including carbon
          dioxide (CO2) cylinders. We also provide medical oxygen supplies,
          ensuring you have critical resources on board for any emergencies.
          Fiberglass Repairs From minor cosmetic fixes to structural repairs,
          our team specializes in fiberglass work. We restore your vessel&apos;s
          integrity and appearance, protecting your investment and ensuring
          long-term durability. Marine Safety Equipment & Ship Maintenance Parts
          We are your one-stop shop for all marine safety equipment and ship
          maintenance parts. We supply everything from life jackets and fire
          extinguishers to essential engine components and deck gear. Our
          extensive inventory ensures you get the quality parts you need, when
          you need them. Ready to get started? Contact us today to learn more
          about our services and how we can support your vessel&apos;s safety
          and maintenance needs.
        </p>
      </main>
    </div>
  );
}
