import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white text-neutral-950">
      <div className="relative">
        <div className="absolute top-[25%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-4xl text-center lg:text-7xl">
            Inflatable Liferaft on Rental Basis
          </h1>
        </div>
        <Image
          width={1000}
          height={600}
          src="/images/boat-men.jpg"
          alt="boat men"
          priority
          className="brightness-50 w-full h-[120px] lg:h-[240px] object-cover"
        />
      </div>
      <main className="mx-auto mt-3 mb-5 px-3 lg:px-0 lg:w-[80%]">
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-10">
          <div className="flex-1 order-5 lg:order-none">
            <p className="text-justify">
              Owning an inflatable liferaft comes with the significant overhead
              of regular inspection, servicing, and storage, which can be a
              complex and costly process. Our inflatable liferaft rental program
              provides a flexible, cost-effective, and hassle-free alternative.
              We offer a wide range of liferafts, from small 4-person units to
              large 25-person models, all of which are meticulously maintained
              and certified to the highest safety standards. When you rent from
              us, you get a fully serviced, inspected, and ready-to-deploy
              liferaft without the long-term commitment or maintenance burdens.
              This is an ideal solution for vessels that operate seasonally, for
              recreational boat owners who want the highest level of safety
              without the ownership costs, or for commercial operators looking
              to manage their budget more efficiently. Our team handles all the
              servicing, ensuring the liferaft you receive is in perfect working
              order and fully compliant with all regulations. We provide the
              equipment, you get the peace of mind.
            </p>
          </div>
          <div className="flex-1 order-1 lg:order-none">
            <Image
              alt="raft"
              width={1000}
              height={1000}
              src="/images/liferaft.webp"
              className="rounded-md"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
