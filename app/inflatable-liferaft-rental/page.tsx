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
      <main className="mx-auto  mb-6 px-3 lg:px-0 lg:w-[80%]">
        <p className="text-sm lg:text-base font-[lato] text-neutral-950 text-justify  mt-4 lg:mt-10">
          At Marine Safety Equipment Service and Sales Company Limited we offer
          a Life Raft Rental Service to all our customers as many operators find
          it beneficial to rent life rafts for either short or extended periods.
          Currently Marine Safety Equipment has SOLAS Approved liferafts ranging
          from 6 Person to 25 person capacity available for rental with SOLAS /
          USCG Approved Liferafts available in 20 and 25 person Capacity.
        </p>
        <h3 className="font-bold leading-tight mt-1 text-lg">
          Benefits of renting a life raft for short term use
        </h3>
        <ul className="font-[lato] text-sm lg:text-base pl-8 list-disc">
          <li>Quickly and easily available</li>
          <li>
            Life rafts are generally available from stock with none or little
            waiting time
          </li>
          <li>Cost effective</li>
          <li>
            Cheaper than purchasing a life raft as there is no capital
            expenditure.
          </li>
          <li>Perfect for occasional or impromptu use</li>
        </ul>
        <p className="font-[lato] text-sm lg:text-base text-justify">
          Operators can also compensate for temporary increases in labour on
          board the ship, rig or offshore platform. Where brief voyages or
          deliveries are concerned a short term hire is obviously more economic
          than a purchase.
        </p>
        <h3 className="font-bold leading-tight text-lg">
          Benefits of renting a life raft for long term use
        </h3>
        <ul className="font-[lato] text-sm lg:text-base list-disc pl-8">
          <li>Economical</li>
          <li>There is no capital outlay.</li>
          <li>Comprehensive payment</li>
        </ul>
        <p className="font-[lato] text-sm lg:text-base text-justify">
          arrangements A fixed term or annual fee can be agreed in advance which
          overcomes the unpredictability of servicing costs, especially where
          older equipment is concerned.
        </p>
        <h3 className="font-medium">No worrying about fine details </h3>
        <p className="font-[lato] text-sm lg:text-base text-justify">
          When the requirement ends the equipment can simply be collected /
          returned and the rental concluded. There is no surplus to requirement
          Liferafts to store, service or dispose of.
        </p>
      </main>
    </div>
  );
}
