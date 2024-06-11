import { CDN_URL } from "../utils/constant";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemCard = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (data) => {
    dispatch(addItems(data));
  };
  return (
    <div>
      {items.map((data) => {
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
          <div key={id} className="mt-4">
            <div className="flex justify-between max-w-7xl mx-auto">
              <div className="w-9/12">
                <h3>{name}</h3>
                {price && (
                  <h4 className="line-through"> &#8377; {price / 100}</h4>
                )}
                {finalPrice && <h4> &#8377; {finalPrice / 100}</h4>}
                {description && <h4>{description}</h4>}
              </div>
              <div className="w-3/12 flex items-center flex-col relative">
                <img
                  className="w-44 rounded-md"
                  src={CDN_URL + imageId}
                  alt={name}
                />
                <button
                  className="bg-black text-white w-24 px-2 py-1 rounded-md absolute bottom-0"
                  onClick={() => handleAddItem(data)}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="line max-w-7xl mx-auto"></div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
