import React from "react";
import Image from "@/node_modules/next/image";

interface CertificateProps {
  name: string;
  description: string;
}

export default function Certificate({ name,description}: CertificateProps) {
  return (
    <div className="bg-white w-full h-[320px] px-6 py-8 lg:px-8 lg:py-10 flex flex-col justify-center gap-6 items-center rounded-[30px] lg:rounded-[50px] text-center">
      {/* Image Container */}
      <div className="relative w-[120px] h-[120px] md:w-[100px] md:h-[100px] lg:w-[100px] lg:h-[100px] overflow-hidden">
        <Image
          src={`/certificate/${name}`}
          alt={`${name} Certificate`}
          fill
          className="object-contain"
        />
      </div>
      {/* Description */}
      <p className="text-[12px] md:text-[14px] font-monRegular">
       {description}
      </p>
    </div>
  );
}
