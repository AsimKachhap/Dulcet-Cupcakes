import React from "react";
import { Style_Script } from "next/font/google";
import { FiMenu } from "react-icons/fi";

const styleScript = Style_Script({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  return (
    <div className="pt-12 flex justify-between items-center">
      <div className="max-h-[48px] bg-red-400">
        <img className="object-contain" src="Logo.jpg" alt="" />
      </div>
      <div className={`${styleScript.className} + text-2xl text-[#A11055]`}>
        Dulcet Cupcakes
      </div>
      <div className="h-[48px] w-[48px]">
        <FiMenu className="text-[#A11055]  h-[48px]" />
      </div>
    </div>
  );
};

export default Navbar;
