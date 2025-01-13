"use client";
import { useEffect, useRef } from "react";
import Certificate from "@/components/support/Certificate";
import React from "react";

export default function CertificateHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;

          if (entry.isIntersecting) {
            // Add the animation when the element enters the viewport
            element.classList.add("animate-fade-up");
          } 
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-back w-full xl:h-[50vh]  h-auto mb-20  opacity-0 transform translate-y-10 transition-all duration-1000 flex justify-center">
      <div className="flex  h-full flex-col xl:flex-row items-center  gap-8 justify-between 2xl:gap-20 xl:gap-16 xl:w-[1120px]">
        <Certificate name="mnas logo.jpg" />
        <Certificate name="icc logo.png" />
        <Certificate name="ilac-mra-seeklogo.png" />
        <Certificate name="4.png" />
      </div>
    </div>
  );
}
