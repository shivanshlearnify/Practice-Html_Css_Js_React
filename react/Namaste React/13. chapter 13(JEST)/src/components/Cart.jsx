import { useDispatch, useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import { clearItem, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem());
  };
  const handleDeleteItem = () => {
    dispatch(clearItem());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-10">
      <h1 className="text-xl font-bold">Cart</h1>
      <ItemCard items={cartItems} />
      <button
        className="bg-black text-white text-xl m-4 p-4 rounded-lg"
        onClick={handleRemoveItem}
      >
        Remove Item
      </button>
      <button
        className="bg-black text-white text-xl m-4 p-4 rounded-lg"
        onClick={handleDeleteItem}
      >
        Clear cart
      </button>
    </div>
  );
};

export default Cart;
