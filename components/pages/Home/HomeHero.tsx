"use client";
import React, { useEffect } from "react";
import Image from "@/node_modules/next/image";

export default function HomeHero() {
  useEffect(() => {
    // Check if there is a hash in the URL
    if (window.location.hash) {
      // Remove the hash part from the URL without reloading the page
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden flex justify-center">
      {/* Added relative to contain absolute elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-back"></div>
      <div className="absolute z-10 py-8 flex items-center justify-between xl:w-[1120px] w-full px-8 md:px-20 xl:px-0">
        <Image
          src="/l4.png"
          width={320}
          height={320}
          alt="Logo"
          className="w-[100px] xl:w-[140px] animate-fadeLeft delay-1000"
          priority // Ensures logo image loads faster
        />
        <a
          href="#contact"
          className="font-monBlack text-white bg-big rounded-full px-6 py-2 text-xs sm:text-sm md:text-base animate-fadeRight delay-1000"
        >
          Contacts
        </a>
      </div>
      <div className="absolute w-[1120px] h-full flex items-center xl:justify-between flex-col xl:flex-row justify-center gap-12">
        <div className="flex flex-col gap-8 top-52 xl:top-auto w-full xl:w-auto xl:items-start animate-fadeLeft delay-1000">
          <h1 className="2xl:text-[100px] xl:text-[80px] lg:text-[60px] text-[40px] text-big font-monBlack leading-[1.2] text-center xl:text-left">
            Household <br /> Cleaning <br /> Products
          </h1>
          <p className="2xl:text-[20px] xl:text-[16px] lg:text-[12px] text-[10px] w-[440px] text-small font-monRegular hidden xl:block text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequa
          </p>
        </div>
        <Image
          src="/low v2.png"
          width={720}
          height={720}
          alt="Desktop Background"
          className="animate-fadeRight delay-1000 w-[500px] xl:w-[720px]"
          priority // Ensures desktop background image loads faster
        />
      </div>
    </div>
  );
}
