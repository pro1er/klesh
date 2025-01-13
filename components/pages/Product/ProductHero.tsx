import React from "react";
import Marquee from "react-fast-marquee";
import Image from "@/node_modules/next/image";
export default function ProductHero() {
  return (
    <div className="w-full xl:h-screen max-h-screen py-20 xl:py-0">
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        {/* First Marquee scrolling left */}
        <Marquee speed={60} direction="left">
          <Image
            src="/zurag/1.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
          <Image
            src="/zurag/2.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
          <Image
            src="/zurag/3.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
          <Image
            src="/zurag/4.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
          <Image
            src="/zurag/5.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
          <Image
            src="/zurag/6.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
          <Image
            src="/zurag/7.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
        </Marquee>

        {/* Second Marquee scrolling right */}
        <Marquee speed={30} direction="right">
          <Image
            src="/zurag/1.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
          <Image
            src="/zurag/2.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
          <Image
            src="/zurag/3.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
          <Image
            src="/zurag/4.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
          <Image
            src="/zurag/5.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
          <Image
            src="/zurag/6.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
          <Image
            src="/zurag/7.jpg"
            width={320}
            height={320}
            alt="Product 1"
            className="mr-8 rounded-[40px] w-[200px] md:w-auto "
          />
        </Marquee>
      </div>
    </div>
  );
}
