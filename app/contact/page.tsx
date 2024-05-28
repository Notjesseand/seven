"use client";
import React from "react";
import Header from "@/components/Header";
import { RiCustomerService2Line } from "react-icons/ri";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#091627] to-[#091627f1] font-montserrat">
      {/* @ts-ignore */}
      <Header />
      <div className="pt-36 px-28">
        <p className="text-white text-5xl mt-20 font-semibold">contact</p>
        <div className="grid grid-cols-3 gap-3 pt-10 md:mt-12">
          <div className="justify-center ">
            <RiCustomerService2Line className="text-slate-400 text-5xl " />
            <p className="text-slate-400 text-lg">Customer support</p>
            <p className="text-lg text-white">1-001-234-5678</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
