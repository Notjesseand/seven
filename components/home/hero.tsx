import React from "react";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";

const Hero = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [ref2, isVisible2] = useOnScreen({ threshold: 0.1 });
  const [ref3, isVisible3] = useOnScreen({ threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, x: -350 },
    visible: { opacity: 1, x: 0 },
  };
  const variant2 = {
    hidden: { opacity: 0, x: 350 },
    visible: { opacity: 1, x: 0 },
  };
  return (
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
          <motion.div
            // @ts-ignore
            ref={ref2}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variant2}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center px-5 sm:px-10 lg:px-16">
              <img
                src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716662545/Screenshot_2024-05-25_134035-removebg-preview_wl6h8s.png"
                alt=""
                className="h-20"
              />
              <p className="font-montserrat text-xl sm:text-2xl font-semibold">
                Transparency Mode
              </p>
            </div>
          </motion.div>
          {/* noise cancellation */}
           <motion.div
            // @ts-ignore
            ref={ref2}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variant2}
            transition={{ duration: 1 }}
          >

          <div className="flex items-center px-5 sm:px-10 lg:px-16">
            <img
              src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716663000/Screenshot_2024-05-25_134901-removebg-preview_hyswbb.png"
              alt=""
              className="h-20"
              />
            <p className="font-montserrat text-xl sm:text-2xl font-semibold">
              Noise Cancellation
            </p>
          </div>
              </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
