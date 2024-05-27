import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiBars2 } from "react-icons/hi2";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          {" "}
          <div className="flex">

          <IoCartOutline className="text-4xl cursor-pointer z-50 flex text-orange-600" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="text-center w-full space-y-3 pt-14 text-xl font-nunito">
              <Link href="/" className="flex text-center justify-center">
                Home
              </Link>
              <Link href="/about" className="flex text-center justify-center">
                About Us
              </Link>
              <Link href="/shop" className="flex text-center justify-center">
                Shop
              </Link>
              <Link href="" className="flex text-center justify-center">
                News
              </Link>
              <Link href="" className="flex text-center justify-center">
                Contact
              </Link>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
