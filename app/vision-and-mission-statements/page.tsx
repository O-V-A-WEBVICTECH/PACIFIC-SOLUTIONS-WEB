import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white text-neutral-950">
      <div className="relative">
        <div className="absolute top-[30%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-2xl lg:text-7xl">Vision and Mission Statement</h1>
        </div>
        <Image
          width={1000}
          height={600}
          src="/images/boat-men.jpg"
          alt="boat men"
          priority
          className="brightness-50 w-full h-[100px] lg:h-[280px] object-cover"
        />
      </div>
      <main className="mx-auto px-3 lg:px-0  font-[lato] lg:w-[80%]">
        <h2 className="text-lg lg:text-xl mb-1  mt-3 font-bold">
          Mission Statement
        </h2>
        <p className="text-sm lg:text-base text-justify mb-2">
          At Pacific Safety Solution Limited we are committed to safety and the
          principles and values guiding it rules in accordance with national and
          international safety laws and with customer service of the highest
          standard, services of high quality which are value specific to the
          needs of our customers, and our team with the knowledge, right tools,
          and work environment necessary to propel this company to the forefront
          of marine safety & survival.
        </p>

        <h2 className="text-lg lg:text-xl mb-1 font-bold">Vision Statement</h2>
        <p className="text-justify text-sm lg:text-base  mb-4">
          To become the best leading marine safety and survival provider company
          where our customers receive the best technical and professional
          services with the right team, tools and paper work to deliver a
          top-notch marine service.
        </p>
      </main>
    </div>
  );
}
