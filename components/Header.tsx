import React from "react";
import Link from "next/link";
import { HiBars2 } from "react-icons/hi2";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <div className="flex w-full fixed z-50">
      <div className="w-full flex justify-between px-3  sm:px-16 py-1 sm:py-3 bg-gradient-to-b from relative">
        {/* overlay */}
        <div className="absolute h-full w-full bg-gradient-to-t from-transparent to-black opacity-50  inset-0 "></div>
        <div className="w-full flex items-center justify-between relative z-50 pr-5">
          <Link href={"/"} className="flex">
            <img
              src="https://res.cloudinary.com/dv62ty87r/image/upload/v1716538239/Premium_Vector___Wolf_tech_modern_simple_logo_icon_ideas-removebg-preview_je6aex.png"
              alt=""
              className="w-24"
            />
          </Link>

          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Header;
