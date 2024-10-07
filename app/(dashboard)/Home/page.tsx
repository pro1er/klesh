import AboutUs from "@/components/pages/AboutUs/AboutUs";
import Certificate from "@/components/pages/Certificate/Certificate";
import Contact from "@/components/pages/Contact/Contact";
import Features from "@/components/pages/Features/Features";
import HomeHero from "@/components/pages/Home/HomeHero";
import ProductGrid from "@/components/pages/Products/Products";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="hidden md:block">
        <HomeHero />
        <AboutUs />
        <Certificate />
        <Features />
        <ProductGrid />
        <Contact />
      </div>
      <div className="md:hidden flex justify-center items-center h-screen w-full flex-col">
          <h1 className=" font-bold">USE DESKTOP</h1>
          <p>Under Development</p>
      </div>
    </div>
  );
}
