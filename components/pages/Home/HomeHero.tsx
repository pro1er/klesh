import React from "react";
import Image from "@/node_modules/next/image";
export default function HomeHero() {
  return (
    <div className="w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>

      {/* Bottom Half - Gray */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-back"></div>
      <div className="absolute z-10 py-8 xl:px-44 px-8 flex items-center justify-between w-full">
        <Image
          src="/l4.png"
          width={320}
          height={320}
          alt=""
          className="w-[100px] xl:w-[140px]"
        />
        <div className=" font-monBlack 2xl:text-[20px] xl:text-[16px] lg:text-[12px] text-[10px] text-white bg-big rounded-full px-6 py-2">
          Contacts
        </div>
      </div>
      <div className=" absolute w-full h-full flex items-end xl:items-center">
        <Image
          src="/Back mobile.jpg"
          width={1620}
          height={2160}
          alt=""
          className="xl:hidden" // Image will be hidden on screens larger than md
          />
          <Image
          src="/Background image.jpg"
          width={1920}
          height={1080}
          alt=""
          className="hidden xl:flex" // Image will be hidden on screens larger than md
          />
        <div className="absolute flex flex-col  xl:ml-44  gap-8 top-52 xl:top-auto w-full xl:w-auto xl:items-start ">
          <h1 className="2xl:text-[100px] xl:text-[80px] lg:text-[60px] text-[40px] text-big font-monBlack leading-[1.2] text-center xl:text-left">
            Household <br /> Cleaning <br /> Products
          </h1>
          <p className="2xl:text-[20px] xl:text-[16px] lg:text-[12px] text-[10px]  text-small font-monRegular hidden xl:block">
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
