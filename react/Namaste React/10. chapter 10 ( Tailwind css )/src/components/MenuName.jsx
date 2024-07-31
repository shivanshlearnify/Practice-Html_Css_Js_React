import { useState } from "react";
import { CDN_URL } from "../utils/constant";

const MenuName = ({ itemCards }) => {
  const [filterVeg, setFilterVeg] = useState(itemCards);
  const [activeVegFilter, setActiveVegFilter] = useState(false);

  const handleVegFilter = () => {
    if (activeVegFilter === false) {
      setFilterVeg(
        filterVeg.filter(
          (item) => item?.card?.info?.itemAttribute.vegClassifier === "VEG"
        )
      );
      setActiveVegFilter(true);
    } else {
      setFilterVeg(itemCards);
      setActiveVegFilter(false);
    }
  };

  return (
    <div className="foodItem">
      <h2 className="menuName">Recomended({filterVeg.length})</h2>
      <button onClick={handleVegFilter}>Veg</button>
      {filterVeg.map((data) => {
        const {
          name,
          price,
          finalPrice,
          imageId,
          id,
          description,
          itemAttribute,
        } = data?.card?.info;
        return (
          <div key={id}>
            <div className="menuitem" key={id}>
              <div>
                <h3>{name}</h3>
                {price && <h4 className="cross"> &#8377; {price / 100}</h4>}
                {finalPrice && <h4> &#8377; {finalPrice / 100}</h4>}
                {description && <h4>{description}</h4>}
              </div>
              <div className="menuImg">
                <img className="menu-Img" src={CDN_URL + imageId} alt={name} />
              </div>
            </div>
            <div className="line"></div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuName;
