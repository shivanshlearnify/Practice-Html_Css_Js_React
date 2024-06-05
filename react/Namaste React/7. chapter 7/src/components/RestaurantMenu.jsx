import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuName from "./MenuName";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      const data = await response.json();
      setMenuData(data?.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
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
    menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards || [];

  return (
    <div className="menuPage">
      <div>
        <h1>
          {name}, {city}
        </h1>
        <h2>{cuisines.join(", ")}</h2>
        <h2>
          {avgRating} ({totalRatingsString})
        </h2>
        <h2>{sla?.minDeliveryTime} min Minimum Delivery Time</h2>
        <h2>{costForTwoMessage}</h2>
      </div>
      <MenuName itemCards={itemCards} />
    </div>
  );
};

export default RestaurantMenu;
