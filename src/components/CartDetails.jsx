import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const CartDetails = () => {
  //   This below approach is efficient, always select the portion of the store
  const cartItems = useSelector((store) => store.cart.items);

  //   This below approach is NOT efficiently, never ever do this, never select the whole store
  //   const store = useSelector((store) => store);
  //   const cartItems = store.cart.items;

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  console.log(cartItems);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-xl">Cart</h1>
      <div className="w-[500px] m-auto">
        <button
          onClick={handleClearCart}
          className="p-2 m-2 bg-blue-100 rounded-lg "
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && <h1>Add Items to the cart!</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default CartDetails;
