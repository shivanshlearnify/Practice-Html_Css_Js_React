import Shimmer from "./Shimmer";
import MenuName from "./MenuName";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);

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
