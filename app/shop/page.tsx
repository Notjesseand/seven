"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import useOnScreen from "@/hooks/scroll";
import { Items } from "@/components/shop/data";
import Carousel from "@/components/shop/carousel";
import Footer from "@/components/Footer";

const Page = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  const variant = {
    hidden: { opacity: 0, y: 250 },
    visible: { opacity: 1, y: 0 },
  };

  // const item = Items

  const [cart, setCart] = useState([]);

 const addToCart = (newItem: any) => {
   setCart((prevCart: any) => {
     const itemInCart = prevCart.find(
       (cartItem: any) => cartItem.id === newItem.id
     );

     if (itemInCart) {
       return prevCart.map((cartItem: any) =>
         cartItem.id === newItem.id
           ? { ...cartItem, quantity: cartItem.quantity + 1 }
           : cartItem
       );
     } else {
       return [...prevCart, { ...newItem, quantity: 1 }];
     }
   });
   console.log(cart);
 };


  const removeFromCart = () => {
    // @ts-ignore
    setCart((prevCart) => prevCart.filter((item) => item.id !== item.id));
  };


  return (
    <div className="">
      <div className="bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1715771549/samples/landscapes/architecture-signs.jpg)] bg-cover bg-center h-72 sm:min-h-[50vh] relative">
        {/* overlay */}
        <div className="absolute h-full w-full bg-black inset-0 opacity-60"></div>
        <Header />
        <div className="pt-44 px-7 sm:px-24 relative">
          <motion.div
            // @ts-ignore
            ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={variant}
            transition={{ duration: 1 }}
          >
            <p className="font-montserrat text-4xl sm:text-6xl text-white">
              Shop
            </p>
          </motion.div>
        </div>
      </div>

      {/* items */}
      <div className=" px-5  sm:px-12 md:px-20">
        {Items.map((item, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-3 mt-12 items-center gap-3"
            key={index}
          >
            <Carousel images={item.images} />

            <div className="flex flex-col gap-2 col-span-2">
              <p className="text-2xl ">{item.name}</p>
              <p className="text-lg">${item.price}</p>
              <p className="text-slate-600">{item.description}</p>

              {/* add to cart */}
              <div className="flex justify-center md:justify-start">
                <button className="border border-slate-500 rounded-[100%] h-8 w-8 text-2xl text-slate-500 flex flex-col justify-center items-center">
                  -
                </button>{" "}
                <span className="px-5 flex flex-col justify-center text-xl">
                  1
                </span>{" "}
                <button
                  onClick={()=>addToCart(item)}
                  className="border border-slate-500 rounded-[100%] h-8 w-8 text-2xl flex flex-col justify-center items-center text-slate-500"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}

        {cart.map((item, index)=>(
          <div>{item.name}{item.quantity}</div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
