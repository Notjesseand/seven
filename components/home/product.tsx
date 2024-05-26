import React from "react";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";

const Product = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const variants = {
    hidden: { opacity: 0, x: 250 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="min-h-screen flex flex-col justify-center w-full ">
      <div className="grid sm:grid-cols-2 pt-12 px-6 gap-y-5 sm:px-16">
        <img
          src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716690113/headphones_wkjogt.jpg"
          alt=""
          className="rounded-lg w-full sm:w-[30rem] aspect-auto sm:aspect-square flex mx-auto"
        />
        <div className="flex flex-col justify-center items-center px-4">
          <motion.div
            // className="overflow-hidden "
            // @ts-ignore
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            // animate="visible"
            variants={variants}
            transition={{ duration: 1 }}
          >
            <p className="text-3xl">Seven wireless headphones</p>
            <p className="text-xl font-montserrat mt-3">$350</p>
            <ul className="flex flex-col gap-3 mt-5 text-xl">
              <li className="dot-list">Carrying Case</li>
              <li className="dot-list">Seven Wireless Headphones</li>
              <li className="dot-list">Quick Start Guide</li>
              <li className="dot-list"> USB Charging Cable</li>
            </ul>
            <button className="px-8 py-2 border-black hover:bg-black hover:text-white border rounded-full mt-6">
              Buy online
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Product;
