"use client";
import React from "react";

import Header from "@/components/Header";
import Product from "@/components/home/product";
import Innovations from "@/components/home/innovations";
import Hero from "@/components/home/hero";
import Experts from "@/components/home/experts";
import Footer from "@/components/Footer";


export default function Page() {
  return (
    <div className=" my-0 py-0 font-custom overflow-hidden">
      <div className="min-h-screen bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716664752/Mask-group-24_jnr5eg.jpg)] sm:bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716660235/Mask-group-2_syfyo0.jpg)] bg-cover flex flex-col relative text-white bg-fixed bg-center">
        <Header />
        <Hero />
      </div>
      <Product />
      <Innovations />
      <Experts />
      <Footer/>
    </div>
  );
}
