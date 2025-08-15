import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white text-neutral-950">
      <div className="relative">
        <div className="absolute top-[25%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-4xl text-center lg:text-7xl">
            Inflatable Liferaft Rental
          </h1>
        </div>
        <Image
          width={1000}
          height={600}
          src="/images/boat-men.jpg"
          alt="boat men"
          priority
          className="brightness-50 w-full h-[120px] lg:h-[300px] object-cover"
        />
      </div>
      <main className="mx-auto mt-3 mb-5 px-3 lg:px-0 lg:w-[80%]">
        <p className="text-justify">
          Whether you need a temporary solution or want to avoid the costs of
          ownership and maintenance, our inflatable liferaft rental service is
          the perfect choice. We offer a variety of sizes and capacities to suit
          your specific needs, all maintained to the highest safety standards.
        </p>
      </main>
    </div>
  );
}
