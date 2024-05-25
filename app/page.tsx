"use client";
import React from "react";

import Header from "@/components/Header";

export default function Page() {
  return (
    <div className=" my-0 py-0 font-custom">
      <div className="min-h-screen bg-[url(https://res.cloudinary.com/dv62ty87r/image/upload/v1716660235/Mask-group-2_syfyo0.jpg)] bg-cover flex flex-col relative text-white">
        <Header />
        <div className="h-full flex-grow flex items-center relative ">
          {/* overlay */}
          <div className="absolute h-full w-full bg-gradient-to-t from-black opacity-60 to-transparent "></div>
          <div className="gap-y-10 relative">
            <p className="text-8xl font- font-bold px-16">
              Wireless Technology of Tomorrow
            </p>
            <div className="flex mt-5">
              <div className="flex items-center px-16">
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
              <div className="flex items-center px-16">
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
    </div>
  );
}
