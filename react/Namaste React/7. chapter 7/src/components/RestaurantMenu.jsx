import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import MenuName from "./MenuName";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=326931&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setMenuData(json?.data);
  };



  if (menuData === null) return <Shimmer />;
  const {
    name,
    city,
    avgRating,
    costForTwoMessage,
    cuisines,
    totalRatingsString,
    sla,
  } = menuData.cards?.[2].card.card.info;

  const { itemCards } =
    menuData.cards?.[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <div className="menuPage">
      <div>
        <h1>
          {name}, {city}
        </h1>
        <h2>{cuisines.join(", ")}</h2>
        <h2>
          {avgRating}({totalRatingsString})
        </h2>
        <h2>{sla?.minDeliveryTime} min Minimum Delivery Time</h2>
        <h2>{costForTwoMessage}</h2>
      </div>
      <MenuName itemCards={itemCards}/>
    </div>
  );
};
export default RestaurantMenu;
