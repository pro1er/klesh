import Image from "next/image";

export default function Features() {
  return (
    <div className="min-h-screen bg-white p-12" id="features">
      <div className="px-[222px] gap-8 flex flex-col">
        <h1 className="font-bold text-[60px] ">Product features</h1>
        <p>
          This is your Services section. This is a great place to give more
          information about the services you provide. You
          <br /> can write a general description of what your business offers
          then add more details below.​This section can be <br />
          adapted for your website.
        </p>
      </div>

      <section className=" bg-gray-200 w-full py-12 pb-24 mt-12">
        <div className="flex gap-8 justify-center relative">
          {/* Feature 1: Eco-friendly packaging */}
          <div className="flex flex-col items-center">
            <Image
              src="/features/Foam.webp"
              alt="Eco-friendly packaging"
              width={286}
              height={335}
              className="rounded-md"
            />
            <h1 className="mt-4 text-center text-lg  bg-white absolute bottom-0 translate-x-4 w-[286px] py-8 translate-y-2/4">Eco-friendly packaging</h1>
          </div>

          {/* Feature 2: Plant origin */}
          <div className="flex flex-col items-center">
            <Image
              src="/features/Hands_edited.webp"
              alt="Plant origin"
              width={286}
              height={335}
              className="rounded-md"
            />
            <h1 className="mt-4 text-center text-lg  bg-white absolute bottom-0 translate-x-4 w-[286px] py-8 translate-y-2/4">Eco-friendly packaging</h1>
          </div>

          {/* Feature 3: More foamy */}
          <div className="flex flex-col items-center">
            <Image
              src="/features/Image by Igor Son.webp"
              alt="More foamy"
              width={286}
              height={335}
              className="rounded-md"
            />
            <h1 className="mt-4 text-center text-lg  bg-white absolute bottom-0 translate-x-4 w-[286px] py-8 translate-y-2/4">Eco-friendly packaging</h1>
          </div>

          {/* Feature 4: Not cause allergic, dryness */}
          <div className="flex flex-col items-center">
            <Image
              src="/features/Recycling Bin.webp"
              alt="Not cause allergic, dryness"
              width={286}
              height={335}
              className="rounded-md"
            />
            <h1 className="mt-4 text-center text-lg  bg-white absolute bottom-0 translate-x-4 w-[286px] py-8 translate-y-2/4">Eco-friendly packaging</h1>
          </div>
        </div>
      </section>
    </div>
  );
}
