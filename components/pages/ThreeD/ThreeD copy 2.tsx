"use client";
import React from "react";
import ThreeCanvas from "@/components/support/ThreeCanvas copy 2";
import { useTranslations } from "next-intl";
import Image from "@/node_modules/next/image";
const ThreeD2 = () => {
  const t = useTranslations("Product3");
  return (
    <div className="bg-back min-h-screen flex items-center justify-center w-full xl:px-44 px-8">
      <div className="flex flex-col md:flex-row items-center xl:gap-40 max-w-7xl mx-auto 2xl:gap-60">
        {/* Left Section - Product Image */}
        <div className="xl:h-screen 2xl:w-[540px] xl:w-[400px] h-[600px] relative">
          <ThreeCanvas />
        </div>

        {/* Right Section - Content */}
        <div className="text-left justify-between flex-1 flex flex-col gap-8 xl:w-2/3 w-full">
          <div className="flex flex-row justify-between">
            <h1 className="2xl:text-[80px] xl:text-[68px] text-[40px] leading-none font-monBlack text-big">
              {t("title1")}
              <br />
              <span className="2xl:text-[80px] xl:text-[68px] text-[40px] leading-none font-monBlack text-big">
                {t("title2")}
              </span>
            </h1>
            <p className="text-big font-monBlack xl:text-right 2xl:text-[20px] xl:text-[16px] xl:ml-4 mt-4">
              {t("size")}
            </p>
          </div>
          <p className="2xl:text-[20px] xl:text-[16px] mt-6 text-small leading-tight text-justify">
            Манай хамгийн сүүлийн үеийн аяга таваг угаагч шингэнийг Герман
            технологийн хүчийг мэдрээрэй. Таны гарт ээлтэй зөөлөн байхын
            зэрэгцээ хамгийн хатуу тослог, бохирдлыг арилгах хамгийн сүүлийн
            үеийн томьёогоор бүтээсэн. Таны гарт ээлтэй зөөлөн байхын зэрэгцээ
            хамгийн хатуу тослог, бохирдлыг арилгах хамгийн сүүлийн үеийн
            томьёогоор бүтээсэн.
          </p>

          {/* Features Section */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="flex flex-col items-center gap-2">
            <div className="text-blue-900 text-2xl w-14 h-14 flex justify-center items-center" >
                <Image
                  src="/icon/washing powder/1. washing powder.svg"
                  alt="Dish Washing Icon"
                  width={48} // Replace with your desired width
                  height={48} // Replace with your desired height
                />
              </div>
              <p className="text-[16px] text-small text-center">
                {t("advantage1")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
            <div className="text-blue-900 text-2xl w-14 h-14 flex justify-center items-center" >
                <Image
                  src="/icon/washing powder/2. washing powder.svg"
                  alt="Dish Washing Icon"
                  width={48} // Replace with your desired width
                  height={48} // Replace with your desired height
                />
              </div>
              <p className="text-[16px] text-small text-center">
                {t("advantage2")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
            <div className="text-blue-900 text-2xl w-14 h-14 flex justify-center items-center" >
                <Image
                  src="/icon/washing powder/3. washing powder.svg"
                  alt="Dish Washing Icon"
                  width={48} // Replace with your desired width
                  height={48} // Replace with your desired height
                />
              </div>
              <p className="text-[16px] text-small text-center">
                {t("advantage3")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
            <div className="text-blue-900 text-2xl w-14 h-14 flex justify-center items-center" >
                <Image
                  src="/icon/washing powder/4. washing powder.svg"
                  alt="Dish Washing Icon"
                  width={48} // Replace with your desired width
                  height={48} // Replace with your desired height
                />
              </div>
              <p className="text-[16px] text-small text-center">
                {t("advantage4")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeD2;
