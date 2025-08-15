import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute top-[25%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-4xl text-center lg:text-7xl">
            Fiberglass Repairs
          </h1>
        </div>
        <Image
          width={1000}
          height={600}
          src="/images/boat-men.jpg"
          alt="boat men"
          priority
          className="brightness-50 w-full h-[110px] lg:h-[280px] object-cover"
        />
      </div>
      <main className="mx-auto px-3 lg:px-0  lg:w-[80%]">
        <p className="text-sm font-[lato] lg:text-base text-neutral-950 text-justify leading-relaxed mt-2 mb-4 lg:mt-10">
          From minor cosmetic fixes to structural repairs, our team specializes
          in fiberglass work. We restore your vessel&apos;s integrity and
          appearance, protecting your investment and ensuring
          long-term durability.
        </p>
      </main>
    </div>
  );
}
