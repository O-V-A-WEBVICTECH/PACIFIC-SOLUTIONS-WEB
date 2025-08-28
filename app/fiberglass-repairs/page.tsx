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
          src="/images/boat-repair.jpg"
          alt="fiber glass ship repair"
          className="brightness-50 w-full h-[130px] lg:h-[280px] object-cover"
        />
      </div>
      <main className="mx-auto px-3 lg:px-0  lg:w-[80%]">
        <div className="flex flex-col mt-3 mb-2 lg:flex-row gap-1 lg:gap-10">
          <div className="order-[5] lg:order-none flex-1">
            <p className="text-sm font-[lato] lg:text-base text-neutral-950 text-justify leading-relaxed">
              Over time, wear and tear, and even minor collisions can compromise
              a vessel&apos;s fiberglass hull and deck. These issues are more
              than just cosmetic; if left unaddressed, they can lead to water
              ingress, delamination, and structural failure. Our team consists
              of skilled fiberglass technicians who are experts in a wide range
              of repair services, from simple gelcoat touch-ups to complex
              structural reinforcements. We handle everything from minor
              scratches and spider cracks to significant impact damage. Our
              process begins with a detailed assessment of the damage, followed
              by the use of high-quality marine-grade resins and fabrics to
              restore the material&apos;s strength and integrity. We
              meticulously blend colors to match your vessel&apos;s original
              finish, making the repair virtually invisible. By addressing
              fiberglass damage promptly and professionally, we not only restore
              your vessel&apos;s aesthetic appeal but also protect its value and
              extend its operational life.
            </p>
          </div>
          {/* <div className="order-[1] lg:order-none flex-1">
            <Image
              alt="raft"
              width={1000}
              height={1000}
              src="/images/worker-2.jpg"
              quality={100}
              className="rounded-md"
            />
          </div> */}
        </div>
      </main>
    </div>
  );
}
