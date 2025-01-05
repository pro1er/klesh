import React from "react";
import Image from "@/node_modules/next/image";
interface CertificateProps {
  name: string;
}

export default function Certificate({ name }: CertificateProps) {
  return (
    <div className="bg-white w-60 px-8 py-10 flex flex-col justify-center gap-6 items-center rounded-[50px] text-center">
      <div className="relative w-[100px] h-[100px] overflow-hidden rounded-full">
        <Image
          src={`/certificate/${name}`}
          alt={`${name} Certificate`}
          layout="fill"
          objectFit="cover" 
        />
      </div>
      <p className="text-sm text-small font-monRegular">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
}
