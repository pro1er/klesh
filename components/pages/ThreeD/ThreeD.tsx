"use client";

import React, { useState, useEffect } from "react";
import ThreeCanvas from "@/components/support/ThreeCanvas";
import { TextureLoader, Texture } from "three";
import { useTranslations } from "next-intl";
import Image from "@/node_modules/next/image";
const ThreeD: React.FC = () => {
  const t = useTranslations("Product1");
  const [labelTexture, setLabelTexture] = useState<Texture | null>(null);
  const [activeTexture, setActiveTexture] = useState<string>("yellow");
  const [bottleColor] = useState<string>("#FFC107");

  // Load textures in useEffect to ensure it only runs on the client
  useEffect(() => {
    const labelTextures: { [key: string]: Texture } = {
      yellow: new TextureLoader().load("/label/2.png", (texture) => {
        texture.flipY = false; // Fix the upside-down texture
      }),
      green: new TextureLoader().load("/label/1.png", (texture) => {
        texture.flipY = false; // Fix the upside-down texture
      }),
    };

    // Set the initial texture on load
    setLabelTexture(labelTextures.yellow);

    // Cleanup function if needed
    return () => {
      // Cleanup if needed when the component is unmounted
    };
  }, []);

  // Move handleSetTexture outside of useEffect so it is accessible to the JSX
  const handleSetTexture = (textureKey: string) => {
    const labelTextures: { [key: string]: string } = {
      yellow: "/label/2.png",
      green: "/label/1.png",
    };

    const newTexture = new TextureLoader().load(
      labelTextures[textureKey],
      (texture) => {
        texture.flipY = false; // Fix the upside-down texture whenever a new texture is loaded
      }
    );

    setLabelTexture(newTexture);
    setActiveTexture(textureKey);
  };

  return (
    <div className="bg-back min-h-screen flex items-center justify-center w-full xl:px-44 px-8">
      <div className="flex flex-col md:flex-row items-center xl:gap-40 max-w-7xl mx-auto 2xl:gap-60">
        {/* Left Section - Product Image */}
        <div className="xl:h-screen 2xl:w-[540px] xl:w-[400px] h-[600px] relative">
          <ThreeCanvas labelTexture={labelTexture} bottleColor={bottleColor} />

          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-30">
            <button
              className={`w-6 h-6 bg-yellow-500 text-white rounded-full  ${
                activeTexture === "yellow"
                  ? "ring-8 ring-yellow-500 outline outline-4 outline-offset-1 outline-back"
                  : ""
              }`}
              onClick={() => handleSetTexture("yellow")}
            ></button>
            <button
              className={`w-6 h-6 bg-green-500 text-white rounded-full  ${
                activeTexture === "green"
                  ? "ring-8 ring-green-500 outline outline-4 outline-offset-1 outline-back"
                  : ""
              }`}
              onClick={() => handleSetTexture("green")}
            ></button>
          </div>

          {/* 3D Toggle Button */}
        </div>

        {/* Right Section - Content */}
        <div className="text-left flex-1 flex flex-col gap-8 xl:w-2/3 w-full">
          <div className="flex flex-row justify-between">
            <h1 className="2xl:text-[80px] xl:text-[68px] text-[40px] leading-none font-monBlack text-big">
              {t("title1")}
              <br />
              <span className="2xl:text-[80px] xl:text-[68px] text-[40px] leading-none font-monBlack text-big">
                {t("title2")}
              </span>
              <span className="2xl:text-[40px] xl:text-[32px] text-[28px] text-mid leading-none font-monBlack block">
                {t("subtitle")}{" "}
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
            <div className="text-blue-900 text-2xl w-10 h-10 flex justify-center items-center" >
                <Image
                  src="/icon/dish washing/1. dish washing.svg"
                  alt="Dish Washing Icon"
                  width={32} // Replace with your desired width
                  height={32} // Replace with your desired height
                  style={{
                    filter:
                    "brightness(0) saturate(100%) invert(77%) sepia(93%) saturate(4938%) hue-rotate(1deg) brightness(106%) contrast(101%)",
                  }}
                />
              </div>
              <p className="text-[16px] text-small text-center">
                {t("advantage1")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
            <div className="text-blue-900 text-2xl w-10 h-10 flex justify-center items-center" >
                <Image
                  src="/icon/dish washing/2. dish washing.svg"
                  alt="Dish Washing Icon"
                  width={32} // Replace with your desired width
                  height={32} // Replace with your desired height
                  style={{
                    filter:
                    "brightness(0) saturate(100%) invert(77%) sepia(93%) saturate(4938%) hue-rotate(1deg) brightness(106%) contrast(101%)",
                  }}
                />
              </div>
              <p className="text-[16px] text-small text-center">
                {t("advantage2")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
            <div className="text-blue-900 text-2xl w-10 h-10 flex justify-center items-center" >
                <Image
                  src="/icon/dish washing/3. dish washing.svg"
                  alt="Dish Washing Icon"
                  width={32} // Replace with your desired width
                  height={32} // Replace with your desired height
                  style={{
                    filter:
                    "brightness(0) saturate(100%) invert(77%) sepia(93%) saturate(4938%) hue-rotate(1deg) brightness(106%) contrast(101%)",
                  }}
                />
              </div>
              <p className="text-[16px] text-small text-center">
                {t("advantage3")}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
            <div className="text-blue-900 text-2xl w-10 h-10 flex justify-center items-center" >
                <Image
                  src="/icon/dish washing/4. dish washing.svg"
                  alt="Dish Washing Icon"
                  width={32} // Replace with your desired width
                  height={32} // Replace with your desired height
                  style={{
                    filter:
                    "brightness(0) saturate(100%) invert(77%) sepia(93%) saturate(4938%) hue-rotate(1deg) brightness(106%) contrast(101%)",
                  }}
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

export default ThreeD;
