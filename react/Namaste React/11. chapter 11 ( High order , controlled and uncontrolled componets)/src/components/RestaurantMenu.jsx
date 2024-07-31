import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIdx, setShowIdx] = useState(0);
  const menuData = useRestaurantMenu(resId);

  const handleSetShowIdx = (idx) => {
    setShowIdx(showIdx === idx ? null : idx); // this line check if its already open then it will close but not open then open it and closes all
  };

  if (!menuData) return <Shimmer />;

  const {
    name,
    city,
    avgRating,
    costForTwoMessage,
    cuisines = [],
    totalRatingsString,
    sla,
  } = menuData?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

  const categories =
    menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menuPage">
      <div className="text-center">
        <h1 className="text-2xl font-bold">
          {name}, {city}
        </h1>
        <h2 className="text-lg font-semibold">{cuisines.join(", ")}</h2>
        <h2 className="text-lg font-semibold">
          {avgRating} ({totalRatingsString})
        </h2>
        <h2 className="text-lg font-semibold">
          {sla?.minDeliveryTime} min Minimum Delivery Time
        </h2>
        <h2 className="text-lg font-semibold">{costForTwoMessage}</h2>
      </div>
      <div className="mt-24">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            category={category?.card?.card}
            showItems={index === showIdx && true}
            setShowIdx={() => handleSetShowIdx(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
