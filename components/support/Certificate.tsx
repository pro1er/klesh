import React from "react";
import Image from "@/node_modules/next/image";

interface CertificateProps {
  name: string;
}

export default function Certificate({ name }: CertificateProps) {
  return (
    <div className="bg-white w-full px-6 py-8 lg:px-8 lg:py-10 flex flex-col justify-center gap-4 lg:gap-6 items-center rounded-[30px] lg:rounded-[50px] text-center">
      {/* Image Container */}
      <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] overflow-hidden rounded-full">
        <Image
          src={`/certificate/${name}`}
          alt={`${name} Certificate`}
          width={320}
          height={320}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Description */}
      <p className="text-[12px] xl:text-[14px] font-monRegular">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
