"use client";
import React from "react";

import Header from "@/components/Header";
import Product from "@/components/home/product";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";

export default function Page() {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, x: -350 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className=" my-0 py-0 font-custom overflow-hidden">
      <div className="min-h-screen bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716664752/Mask-group-24_jnr5eg.jpg)] sm:bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716660235/Mask-group-2_syfyo0.jpg)] bg-cover flex flex-col relative text-white bg-fixed bg-center">
        <Header />
        <div className="h-full flex-grow flex items-center relative ">
          {/* overlay */}
          <div className="absolute h-full w-full bg-gradient-to-t from-black opacity-60 to-transparent "></div>
          <div className="gap-y-10 relative">
            <motion.div
              // @ts-ignore
              ref={ref}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={variants}
              transition={{ duration: 1 }}
            >
              <p className="text-5xl sm:text-7xl lg:text-8xl font- font-bold px-6 sm:px-10 md:px-16">
                Wireless Technology of Tomorrow
              </p>
            </motion.div>

            <div className="sm:flex mt-5">
              <div className="flex items-center px-5 sm:px-10 lg:px-16">
                <img
                  src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716662545/Screenshot_2024-05-25_134035-removebg-preview_wl6h8s.png"
                  alt=""
                  className="h-20"
                />
                <p className="font-montserrat text-2xl font-semibold">
                  Transparency Mode
                </p>
              </div>
              {/* noise cancellation */}
              <div className="flex items-center px-5 sm:px-10 lg:px-16">
                <img
                  src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716663000/Screenshot_2024-05-25_134901-removebg-preview_hyswbb.png"
                  alt=""
                  className="h-20"
                />
                <p className="font-montserrat text-2xl font-semibold">
                  Noise Cancellation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product />
      <div className="h-screen"></div>
    </div>
  );
}
