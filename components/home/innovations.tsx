import React from "react";
import useOnScreen from "@/hooks/scroll";
import { motion } from "framer-motion";

const innovations = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, x: 250 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="grid sm:grid-cols-2 gap-y-7 pt-24 px-14">
      <img
        src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716745026/innovations_z6kx1n.jpg"
        alt=""
        className=" w-11/12 sm:w-4/5 rounded-lg flex mx-auto"
      />
      <div className="flex flex-col justify-center">
        <motion.div
          // @ts-ignore
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <p className="text-3xl sm:text-4xl font-semibold">Innovations</p>
          <p className="leading-7 text-lg">
            Discover the cutting-edge innovations that set our headphones apart.
            Engineered with the latest technology, our headphones offer
            unparalleled features designed to enhance your listening experience.
          </p>
          <ul className="flex flex-col gap-3 mt-5 text-base sm:text-xl ">
            <li className="dot-list">Transparency Mode</li>
            <li className="dot-list">Active Noise Cancelling</li>
            <li className="dot-list">Ultra Light Carrying Case</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default innovations;
