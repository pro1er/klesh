import React from "react";
import Image from "@/node_modules/next/image";

interface CertificateProps {
  name: string;
}

export default function Certificate({ name }: CertificateProps) {
  return (
    <div className="bg-white w-full px-6 py-8 lg:px-8 lg:py-10 flex flex-col justify-center gap-4 lg:gap-6 items-center rounded-[30px] lg:rounded-[50px] text-center">
      {/* Image Container */}
      <div className="relative w-[40px] h-[40px] sm:w-[600px] sm:h-[600px] lg:w-[100px] lg:h-[100px] overflow-hidden">
        <Image
          src={`/certificate/${name}`}
          alt={`${name} Certificate`}
          fill
          className="object-contain"
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
