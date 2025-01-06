import React from "react";
import Image from "@/node_modules/next/image";
interface CertificateProps {
  name: string;
}

export default function Certificate({ name }: CertificateProps) {
  return (
    <div className="bg-white w-full px-8 py-10 flex flex-col justify-center gap-6 items-center rounded-[50px] text-center">
      <div className="relative 2xl:w-[120px] 2xl:h-[120px] xl:w-[100px] xl:h-[100px] overflow-hidden rounded-full">
        <Image
          src={`/certificate/${name}`}
          alt={`${name} Certificate`}
          fill
          style={{ objectFit: "cover" }} 
        />
      </div>
      <p className="2xl:text-[20px] xl:text-[14px] text-small font-monRegular">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
