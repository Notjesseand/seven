import React from "react";
import Link from "next/link";
import { HiBars2 } from "react-icons/hi2";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <div className="w-full flex justify-between px-16 py-8 bg-gradient-to-b from relative">
      {/* overlay */}
      <div className="absolute h-full w-full bg-gradient-to-t from-transparent to-black opacity-50  inset-0 "></div>
      <div className="w-full flex justify-between relative">
        <div className="h-7 w-16 bg-slate-600"></div>
        <div>
          <Link href={""}></Link>
        </div>
        {/* <HiBars2 className="text-5xl cursor-pointer" /> */}
        <Sidebar/>
      </div>
    </div>
  );
};

export default Header;
