import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <div className="w-full py-8  absolute px-[260px] flex justify-between">
      <img src="/logo/l2.png" className="h-14" />
      <div className="text-white gap-4 flex justify-center items-center">
        <Link href="#Home" className=" hover:text-gray-300 duration-300">Home</Link>
        <Link href="#about" className="hover:text-gray-300 duration-300">About</Link> {/* Updated */}
        <Link href="#features" className=" hover:text-gray-300 duration-300">Features</Link>
        <Link href="#products" className=" hover:text-gray-300 duration-300">Products</Link>
        <Link href="#contact" className=" hover:text-gray-300 duration-300">Contact</Link>
      </div>
    </div>
  );
}
