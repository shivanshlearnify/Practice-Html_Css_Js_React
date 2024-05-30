import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resListData, setResListData] = useState(resList);

  const handleOnFilter = () => {
    setResListData(
      resList.filter((data) => {
        return Number(data.data.avgRating) >= 4.3;
      })
    );
  };
  return (
    <div className="body">
      <button className="btn-Filter" onClick={handleOnFilter}>
        Top Rated
      </button>
      <div className="res-container">
        {resListData.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
