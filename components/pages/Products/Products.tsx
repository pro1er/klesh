"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Slider from "@/components/support/Slider";

export default function ProductGrid() {
  // Refs for each product
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);

  // Check if each product is in view
  const isInView1 = useInView(ref1, { once: false, amount: 0.1 });
  const isInView2 = useInView(ref2, { once: false, amount: 0.1 });
  const isInView3 = useInView(ref3, { once: false, amount: 0.1 });
  const isInView4 = useInView(ref4, { once: false, amount: 0.1 });
  const isInView5 = useInView(ref5, { once: false, amount: 0.1 });
  const isInView6 = useInView(ref6, { once: false, amount: 0.1 });

  return (
    <div className="px-4 py-8 flex flex-col gap-4" id="products">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4">
          <div className="">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md overflow-hidden"
            >
              <Image src="/product/4.jpg" alt="4" width={800} height={800} />
            </motion.div>
          </div>
          <div className="flex gap-4">
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md overflow-hidden"
            >
              <Image src="/product/5.jpg" alt="4" width={400} height={400} />
            </motion.div>
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md overflow-hidden"
            >
              <Image src="/product/6.jpg" alt="4" width={400} height={400} />
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <motion.div
              ref={ref4}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md overflow-hidden"
            >
              <Image src="/product/9.jpg" alt="4" width={400} height={400} />
            </motion.div>
            <motion.div
              ref={ref5}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image src="/product/10.jpg" alt="4" width={400} height={400} />
            </motion.div>
          </div>
          <div className="flex gap-4 flex-col">
            <motion.div
              ref={ref6}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-md overflow-hidden"
            >
              <Image src="/product/4.jpg" alt="4" width={800} height={800} />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        ref={ref7}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView6 ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md overflow-hidden"
      >
        <Slider />
      </motion.div>
    </div>
  );
}
