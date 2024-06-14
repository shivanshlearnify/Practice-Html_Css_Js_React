import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    cloudinaryImageId,
    totalRatingsString,
    avgRating,
  } = resData;
  console.log(resData);
  return (
    <div className="res-card">
      <img className="res-cardImg" src={CDN_URL + cloudinaryImageId} alt={name}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{totalRatingsString}</h4>
      <h4>{avgRating} Star</h4>
    </div>
  );
};

export const WithPromotedLabel = ()=>{
  return (props)=>{
    return (
      <div>
        <label className="bg-black text-white absolute rounded-lg p-2">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}


export default RestaurantCard;
