"use client";

import React, { useState, useEffect } from "react";
import ThreeCanvas from "@/components/support/ThreeCanvas copy";
import { TextureLoader, Texture } from "three";

const ThreeD2: React.FC = () => {
  const [labelTexture, setLabelTexture] = useState<Texture | null>(null);
  const [activeTexture, setActiveTexture] = useState<string>("rainbow");
  const [is3DEnabled, setIs3DEnabled] = useState<boolean>(false);

  // Load textures in useEffect to ensure it only runs on the client
  useEffect(() => {
    const labelTextures: { [key: string]: Texture } = {
      rainbow: new TextureLoader().load("/label/3.png", (texture) => {
        texture.flipY = false; // Fix the upside-down texture
      }),
      gray: new TextureLoader().load("/label/4.png", (texture) => {
        texture.flipY = false; // Fix the upside-down texture
      }),
    };

    // Set the initial texture on load
    setLabelTexture(labelTextures.rainbow);

    return () => {
      // Cleanup if needed when the component is unmounted
    };
  }, []);

  // Move handleSetTexture outside of useEffect so it is accessible to the JSX
  const handleSetTexture = (textureKey: string) => {
    const labelTextures: { [key: string]: string } = {
      rainbow: "/label/3.png",
      gray: "/label/4.png",
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
          <ThreeCanvas labelTexture={labelTexture} />
          
          {/* Label Change Buttons */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-30">
            <button
              className={`w-6 h-6 rounded-full ${
                activeTexture === "rainbow"
                  ? "ring-8 ring-gradient  from-blue-500 via-purple-500 to-pink-500 outline outline-4 outline-offset-1 outline-back"
                  : ""
              }`}
              style={{
                background: "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
              }}
              onClick={() => handleSetTexture("rainbow")}
            ></button>
            <button
              className={`w-6 h-6 bg-gray-300 text-white rounded-full ${
                activeTexture === "gray"
                  ? "ring-8 ring-gray-300 outline outline-4 outline-offset-1 outline-back"
                  : ""
              }`}
              onClick={() => handleSetTexture("gray")}
            ></button>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="text-left flex-1 flex flex-col gap-8 xl:w-2/3 w-full">
          <div className="flex flex-row justify-between">
            <h1 className="2xl:text-[80px] xl:text-[68px] text-[40px] leading-none font-monBlack text-big">
              LAUNDRY <br />
              <span className="2xl:text-[80px] xl:text-[68px] text-[40px] leading-none font-monBlack text-big">
                DETERGENT
              </span>
              <span className="2xl:text-[40px] xl:text-[32px] text-[28px] text-mid leading-none font-monBlack block">
                LIQUID
              </span>
            </h1>
            <p className="text-big font-monBlack xl:text-right 2xl:text-[20px] xl:text-[16px] xl:ml-4 mt-4">
              750ml
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

export default ThreeD2;
