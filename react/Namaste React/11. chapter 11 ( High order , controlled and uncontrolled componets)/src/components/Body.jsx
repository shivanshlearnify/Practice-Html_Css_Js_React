import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resListData, setResListData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState([]);

  const RestaurandCardPromoted = WithPromotedLabel(RestaurantCard);

  const handleOnFilter = () => {
    setFiltered(
      filtered.filter((data) => {
        return Number(data.info.avgRating) >= 4.5;
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setResListData(restaurants);
    setFiltered(restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Look's Like Your Are Offline</h1>;
  }

  return resListData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button className="btn-Filter" onClick={handleOnFilter}>
          Top Rated
        </button>
        <div className="search">
          <input
            type="text"
            className="text-search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterSearch = resListData.filter((data) =>
                data.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFiltered(filterSearch);
              setSearch("");
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filtered.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.3 ? (
                <RestaurandCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
