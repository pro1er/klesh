"use client";
import React, { useEffect } from "react";
import Image from "@/node_modules/next/image";
export default function HomeHero() {
  useEffect(() => {
    // Check if there is a hash in the URL
    if (window.location.hash) {
      // Remove the hash part from the URL without reloading the page
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <div className="w-full h-screen relative"> {/* Added relative to contain absolute elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-back"></div>
      
      <div className="absolute z-10 py-8 xl:px-44 px-8 flex items-center justify-between w-full">
        <Image
          src="/l4.png"
          width={320}
          height={320}
          alt="Logo"
          className="w-[100px] xl:w-[140px]"
          priority // Ensures logo image loads faster
        />
        <a href="#contact" className="font-monBlack text-white bg-big rounded-full px-6 py-2 text-xs sm:text-sm md:text-base">
          Contacts
        </a>
      </div>
      
      <div className="absolute w-full h-full flex items-end xl:items-center">
        {/* Ensure the background images load properly */}
        <Image
          src="/Back mobile.jpg"
          width={1620}
          height={2160}
          alt="Mobile Background"
          className="md:hidden" // Hidden on screens larger than md
          priority // Ensures mobile background image loads faster
        />
        <Image
          src="/Background image.jpg"
          width={1920}
          height={1080}
          alt="Desktop Background"
          className="hidden md:flex" // Hidden on screens smaller than md
          priority // Ensures desktop background image loads faster
        />
        
        <div className="absolute flex flex-col xl:ml-44 gap-8 top-52 xl:top-auto w-full xl:w-auto xl:items-start ">
          <h1 className="2xl:text-[100px] xl:text-[80px] lg:text-[60px] text-[40px] text-big font-monBlack leading-[1.2] text-center xl:text-left">
            Household <br /> Cleaning <br /> Products
          </h1>
          <p className="2xl:text-[20px] xl:text-[16px] lg:text-[12px] text-[10px] w-[440px] text-small font-monRegular hidden xl:block text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequa
          </p>
        </div>
      </div>
    </div>
  );
}
