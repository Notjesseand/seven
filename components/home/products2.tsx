import React from "react";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";

const products2 = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const variants = {
    hidden: { opacity: 0, x: -350 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="grid sm:grid-cols-2 p-6 min-h-screen ">
      <div className="bg-purple-500 w-full aspect-square"></div>
      <div className="w-full aspect-square">
        <motion.div
          // @ts-ignore
          ref={ref}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <p className="text-xl sm:text-7xl lg:text-8xl font-bold sm:px-10 md:px-16">
            Wireless Technology of Tomorrow
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default products2;
