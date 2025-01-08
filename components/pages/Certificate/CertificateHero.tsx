"use client";
import { useEffect, useRef } from 'react';
import Certificate from '@/components/support/Certificate';
import React from 'react';

export default function CertificateHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target;

        if (entry.isIntersecting) {
          // Add the animation when the element enters the viewport
          element.classList.add('animate-fade-up');
        } else {
          // Remove the animation class when it goes out of view
          element.classList.remove('animate-fade-up');
        }
      });
    }, { threshold: 0.1 });

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
      className="bg-back w-full xl:h-[50vh] h-auto mb-20 flex flex-col xl:flex-row items-center xl:px-44 px-8 gap-8 justify-between 2xl:gap-20 xl:gap-16 opacity-0 transform translate-y-10 transition-all duration-500"
    >
      <Certificate name="mnas logo.jpg" />
      <Certificate name="icc logo.png" />
      <Certificate name="ilac-mra-seeklogo.png" />
      <Certificate name="4.png" />
    </div>
  );
}
