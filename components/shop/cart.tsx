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
import Carousel from "./carousel";

const Cart = ({ count, cart }: { count: any; cart: any[] }) => {
  const cartData = cart;

  return (
    <div className="overflow-visible ">
      <Sheet>
        <SheetTrigger>
          {" "}
          <div className="flex relative">
            <IoCartOutline className="text-4xl cursor-pointer z-50 flex text-orange-600 relative z-10" />
            <p className="text-black absolute -bottom-1 -left-2 z-40 h-5 w-5 flex items-center justify-center bg-white rounded-full text-sm">
              {count}
            </p>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="w-full space-y-3 pt-6 ">
              <p className="text-center text-lg gradient-text font-semibold">
                In your cart
              </p>
              {cartData.map((item, index) => (
                <div key={index} className="text-center flex flex-col">
                  <div className="w-1/3 mx-auto">
                    <Carousel images={item.images} />
                    <p className="mt-1">×{item.quantity}</p>
                  </div>
                  <div>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                  </div>
                </div>
              ))}

              <button className="py-2 px-7 mt-5 border border-blue-700 hover:border-white bg-blue-700 text-white text-lg rounded-full mx-auto flex">
                Checkout
              </button>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
