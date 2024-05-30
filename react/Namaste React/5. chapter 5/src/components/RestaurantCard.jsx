import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    minDeliveryTime,
    totalRatingsString,
    avgRating,
  } = resData?.data;
  return (
    <div className="res-card">
      <img className="res-cardImg" src={CDN_URL + cloudinaryImageId} alt={name}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{totalRatingsString}</h4>
      <h4>{minDeliveryTime} Min Delivery Time</h4>
      <h4>{avgRating} Star</h4>
    </div>
  );
};

export default RestaurantCard;
