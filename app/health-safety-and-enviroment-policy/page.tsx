import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute top-[18%] lg:top-[25%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-4xl text-center lg:text-7xl">
            Health safety and enviroment (HSE) policy
          </h1>
        </div>
        <Image
          width={1000}
          height={600}
          src="/images/boat-men.jpg"
          alt="boat men"
          className="brightness-50 w-full h-[110px] lg:h-[280px] object-cover"
        />
      </div>
      <main className="mx-auto px-3 text-neutral-950 lg:px-0  lg:w-[80%]">
        <div className="flex flex-col mt-3 mb-2 lg:flex-row gap-1 lg:gap-10">
          <div className="order-[5] lg:order-none flex-1">
            <p className="text-sm font-[lato] lg:text-base text-justify leading-relaxed">
              Pacific Safety solution limited is committed to providing a safe
              and healthy working enviroment for all employees, visitors,
              clients and vendors operating within and outside the marine
              enviroment and also ensure to minimize the risk and enviromental
              impact while carrying out our operations.
            </p>
            <p className="font-[lato] text-sm lg:text-base my-1">
              Our HSE core principles are:
            </p>
            <ul className="text-sm font-[lato] list-disc list-inside lg:text-base">
              <li>Commitment to Safety</li>
              <li>Risk management</li>
              <li>Enviromental protection</li>
              <li>Legal compliance</li>
              <li>Continous improvements</li>
              <li>Traning and awareness</li>
              <li>Incident reporting</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
