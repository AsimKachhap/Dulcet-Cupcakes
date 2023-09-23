import React from "react";

const ProductCard = () => {
  return (
    <div className="p-2 grid grid-rows-2 gap-4 bg-white opacity-80 backdrop-blur-sm  border-2 border-red-500 rounded-md">
      <div>
        <img className="" src="Cake1.jpg" alt="" />
      </div>
      <div>
        <div className="flex justify-between p-2">
          <div className="font-semibold text-2xl text-slate-600">
            2 lbs Cake
          </div>
          <div>
            <span>Starts from</span> <span>{`\u20B9`}</span> <span>675</span>
          </div>
        </div>
        <p>Feshly made cake at home with love. Customize it the way you like</p>
      </div>
    </div>
  );
};

export default ProductCard;
