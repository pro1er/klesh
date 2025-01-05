import React from "react";
import Image from "@/node_modules/next/image";
export default function HomeHero() {
  return (
    <div className="w-full h-screen">
      <div className="absolute p-9 flex items-center justify-between w-full">
        <Image src="/logo.png" width={120} height={120} alt="" className="bg-blue-700"/>
        <div className=" font-monBlack text-[20px] text-white bg-big rounded-full px-6 py-2">Contacts</div>
      </div>
      <div className="w-full h-full flex items-center">
        <Image src="/Background image.jpg" width={1920} height={1080} alt="" />
        <div className="absolute flex flex-col  ml-44 gap-8">
          <h1 className=" text-[80px] text-big font-monBlack leading-[1.2]">
            Household <br /> Cleaning <br /> Products
          </h1>
          <p className=" text-[16px] text-small font-monRegular ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
            sed do eiusmod tempor incididunt ut labore et dolore <br />
            magna aliqua. Ut enim ad minim veniam, quis nostrud <br />
            exercitation ullamco laboris nisi ut aliquip ex ea <br />
            commodo consequa
          </p>
        </div>
      </div>
    </div>
  );
}
