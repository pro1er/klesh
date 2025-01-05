"use client";
import React from "react";
import ThreeCanvas from "@/components/support/ThreeCanvas copy";

const ThreeD1 = () => {
  return (
    <div className="bg-back min-h-screen flex items-center justify-center w-full px-44">
      <div className="flex flex-col md:flex-row items-center gap-40 max-w-7xl mx-auto">
        {/* Left Section - Product Image */}
        <div className="h-screen w-[400px] relative">
          <ThreeCanvas />
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="text-left flex-1 flex flex-col gap-8 ">
          <div className="flex justify-between">
            <h1 className="text-[68px] leading-none font-monBlack text-big">
              DISH <br />
              <span className="font-monBlack">WASHING</span> <br />
              <span className="text-[32px] text-mid leading-none font-monBlack block">
                LIQUID
              </span>
            </h1>
            <p className="text-big font-monBlack text-right text-[16px] ml-4">
              750ml
            </p>
          </div>
          <p className="text-[16px] mt-6 text-small leading-tight text-justify">
            Манай хамгийн сүүлийн үеийн аяга таваг угаагч шингэнийг Герман
            технологийн хүчийг мэдрээрэй. Таны гарт ээлтэй зөөлөн байхын
            зэрэгцээ хамгийн хатуу тослог, бохирдлыг арилгахаар бүтээсэн. Манай
            хамгийн сүүлийн үеийн аяга таваг угаагч шингэнийг Герман технологийн
            хүчийг мэдрээрэй. Таны гарт ээлтэй зөөлөн байхын зэрэгцээ хамгийн
            хатуу тослог, бохирдлыг арилгахаар бүтээсэн.
          </p>

          {/* Features Section */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <div className="text-blue-900 text-2xl">✨</div>
              <p className="text-[16px] text-small text-center">
                Толбо арилгагч найрлага
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-blue-900 text-2xl">✨</div>
              <p className="text-[16px] text-small text-center">
                Толбо арилгагч найрлага
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-blue-900 text-2xl">✨</div>
              <p className="text-[16px] text-small text-center">
                Толбо арилгагч найрлага
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-blue-900 text-2xl">✨</div>
              <p className="text-[16px] text-small text-center">
                Толбо арилгагч найрлага
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeD1;
