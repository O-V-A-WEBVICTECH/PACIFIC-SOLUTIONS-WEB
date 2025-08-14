import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute top-[18%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-3xl text-center lg:text-7xl">
            Cylinder Hydrotesting & Requalification
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
        <h3 className="font-bold mb-3">
          We operate a DOT Approved testing and re-qualification facility for
          hydrotesting both low and high pressure cylinders.
        </h3>
        <p className="leading-relaxed text-sm mb-2">
          Our DOT issued requalifier identification number(RIN) is i265. For
          High pressure cylinders (Over 1000 Psi) we test using the water jacket
          method. Our Hydro-Test system is rated for testing in a range of 2000
          – 10,000psi, and Meets U.S. DOT requirements for accuracy and
          readability.
        </p>
        <h3 className="font-bold my-2">
          We can test high pressure cylinders up to 12″ diameter x 60″ tall.
        </h3>
        <p className="leading-relaxed">
          For Low Pressure cylinders (Under 1000 Psi) we perform a proof test
          using a DOT Compliant Dual Gauge Setup and Test Cage. Our system can
          test between 111 – 1000 psi and Meets U.S. DOT requirements for
          accuracy and readability.
        </p>
        <h3 className="font-bold my-2">
          We can test low pressure cylinders up to 10″ diameter x 30″ tall.
        </h3>
        <p className="leading-relaxed text-justify">
          Our personnel have been professionally trained and perform cylinder
          re-qualification based on DOT regulations, CGA guidelines and our own
          stringent internal procedures. All cylinders also undergo visual
          inspection before and after being testing. A Hot-Air Dryer is used to
          ensure all cylinders are properly dried after testing, this reduces
          the risk of internal corrosion and is a requirement for operating an
          approved facility.
        </p>
        <div className="my-3">
          <h3 className="font-bold text-lg lg:text-xl">Eddy Current Testing</h3>
          <p className="leading-relaxed">
            In keeping with the requirements of DOT, we currently use an
            Eddy-Current Non-Destructive Testing System on all 6351-T6 alloy
            cylinders used for SCUBA, Breathing Air and Oxygen service. This
            type of testing is now mandatory at 5 Year Year re-qualifications
            due to the sustained load cracking risk involved in 6351-T6 alloy
            cylinders. The system not only detects cracks it identifies
            corrosion, gouges, pits, folds, valleys, tool stops and other types
            of indications and it shows you the differences among them on five
            different color-coded graphs, including both linear and
            three-dimensional views, on a computer screen.
          </p>
        </div>
      </main>
    </div>
  );
}
