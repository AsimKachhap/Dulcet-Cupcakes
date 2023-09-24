import React from "react";

const ProductCard = () => {
  return (
    <div className="p-2 flex flex-col  gap-4 bg-white opacity-80 backdrop-blur-sm  border border-red-500 rounded-md">
      <div>
        <img className="" src="Cake1.jpg" alt="" />
      </div>

      <div className="flex justify-between">
        <div className="font-semibold text-2xl text-slate-600">2 lbs Cake</div>
        <div className="">
          <span>Starts from</span> <span>{`\u20B9`}</span> <span>675</span>
        </div>
      </div>
      <div>
        Feshly made cake at home with love. Customize it the way you like
      </div>
      <div>
        <button className="bg-[#A11055] text-2xl px-4 py-2 text-[#F8DAE8] drop-shadow mt-2">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
