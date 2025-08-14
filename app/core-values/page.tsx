import Image from "next/image";

export default function Page() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute top-[30%] z-[100] w-full flex items-center justify-center text-white">
          <h1 className="text-4xl lg:text-7xl">Core Values</h1>
        </div>
        <Image
          width={1000}
          height={600}
          src="/images/boat-men.jpg"
          alt="boat men"
          priority
          className="brightness-50 w-full h-[120px] lg:h-[280px] object-cover"
        />
      </div>
      <main className="mx-auto font-[lato] px-2 lg:px-0  lg:w-[80%]">
        <h2 className="text-lg lg:text-xl mb-1 mt-3 font-bold">
          Customer Focus
        </h2>
        <p className="text-sm lg:text-base">
          We will be the best we can be for our customers. Our focus is on the
          relationship we will build and maintain with them. We will do our best
          to service their needs and adapt to suit their ever-changing nature.
        </p>
        <h2 className="text-lg lg:text-xl mb-1 font-bold">Integrity </h2>
        <p className="text-sm lg:text-base">
          Our customers, suppliers, and employees are vital to our operations,
          building trust and confidence with these people is very important to
          us. We are committed to being honest, reliable, and upright in all we
          do.
        </p>
        <h2 className="text-lg lg:text-xl mb-1 font-bold">Teamwork </h2>
        <p className="mb-1 text-sm  lg:text-base">
          Teamwork is crucial to our success and customer satisfaction. We care
          about our team and continue to invest in their development.
        </p>
        <p className="text-sm lg:text-base">
          Our team is passionate about what they do and work together bringing a
          wealth of ever-growing expertise, experience, innovation, and optimism
          to better serve our customers.
        </p>
        <h2 className="text-lg lg:text-xl mb-1 font-bold">Professionalism </h2>
        <p className="text-sm lg:text-base mb-4">
          We maintain a high level of professionalism in all that we do while
          being committed, confident, and goal oriented. This drives us to
          maintain a high level of efficiency as we continuously strive for
          excellence.
        </p>
      </main>
    </div>
  );
}
