import { useState } from "react";
import ItemCard from "./ItemCard";

const RestaurantCategory = ({ category, showItems ,setShowIdx}) => {
    
  return (
    <div>
      <div className="max-w-7xl mx-auto my-5 bg-slate-100 shadow-lg p-4 rounded-xl">
        <div
          className="flex justify-between cursor-pointer"
          onClick={setShowIdx}
        >
          <h2 className="text-xl font-semibold">
            {category?.title} ({category?.itemCards?.length})
          </h2>
          <button>Down</button>
        </div>
        <div className="">
          {showItems && <ItemCard items={category?.itemCards} />}
        </div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
