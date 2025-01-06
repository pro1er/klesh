import ContactHero from "@/components/pages/Contact/ContactHero";
import CertificateHero from "@/components/pages/Certificate/CertificateHero";
import HomeHero from "@/components/pages/Home/HomeHero";
import ProductHero from "@/components/pages/Product/ProductHero";
import ThreeDHero from "@/components/pages/ThreeD/ThreeDHero";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        <HomeHero />
        <CertificateHero/>
        <ThreeDHero/>
        <ProductHero/>
        <ContactHero/>
      </div>
      <div className="md:hidden flex justify-center items-center h-screen w-full flex-col">
          <h1 className=" font-bold">USE DESKTOP</h1>
          <p>Under Development</p>
      </div>
    </div>
  );
}
