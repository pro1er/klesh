"use client";
import React, { useState, useEffect } from "react";
import ThreeCanvas from "@/components/support/ThreeCanvas";
import { TextureLoader, Texture } from "three";

const ThreeD: React.FC = () => {
  const [labelTexture, setLabelTexture] = useState<Texture | null>(null);
  const [activeTexture, setActiveTexture] = useState<string>("yellow"); // Track the active texture

  // Load textures for the labels
  const labelTextures: { [key: string]: Texture } = {
    yellow: new TextureLoader().load("/label/label.jpeg", (texture) => {
      texture.flipY = false; // Fix the upside-down texture
    }),
    green: new TextureLoader().load("/label/label.jpeg", (texture) => {
      texture.flipY = false; // Fix the upside-down texture
    }),
  };

  // Set the first button (red) as active on load
  useEffect(() => {
    setLabelTexture(labelTextures.yellow);
    setActiveTexture("yellow");
  }, []);

  const handleSetTexture = (textureKey: string) => {
    setLabelTexture(labelTextures[textureKey]);
    setActiveTexture(textureKey);
  };

  return (
    <div className="bg-back min-h-screen flex items-center justify-center w-full px-44">
      <div className="flex flex-col md:flex-row items-center xl:gap-40  2xl:gap-60">
        {/* Left Section - 3D Model */}
        <div className="h-screen 2xl:w-[540px] xl:w-[400px] relative">
          <ThreeCanvas labelTexture={labelTexture} />
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
            <button
              className={`w-6 h-6 bg-yellow-500 text-white rounded-full ${
                activeTexture === "yellow" ? "ring-8 ring-yellow-500 outline outline-4 outline-offset-1 outline-back" : ""
              }`}
              onClick={() => handleSetTexture("yellow")}
            ></button>
            <button
              className={`w-6 h-6 bg-green-500 text-white rounded-full ${
                activeTexture === "green" ? "ring-8 ring-green-500 outline outline-4 outline-offset-1 outline-back" : ""
              }`}
              onClick={() => handleSetTexture("green")}
            ></button>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="text-left flex-1 flex flex-col gap-8">
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
              <div className="text-blue-900 xl:text-2xl 2xl:text-3xl">✨</div>
              <p className="2xl:text-[20px] xl:text-[16px]] text-small text-center">
                Толбо арилгагч найрлага
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-blue-900 xl:text-2xl 2xl:text-3xl">✨</div>
              <p className="2xl:text-[20px] xl:text-[16px]] text-small text-center">
                Толбо арилгагч найрлага
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-blue-900 xl:text-2xl 2xl:text-3xl">✨</div>
              <p className="2xl:text-[20px] xl:text-[16px]] text-small text-center">
                Толбо арилгагч найрлага
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-blue-900 xl:text-2xl 2xl:text-3xl">✨</div>
              <p className="2xl:text-[20px] xl:text-[16px]] text-small text-center">
                Толбо арилгагч найрлага
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeD;
