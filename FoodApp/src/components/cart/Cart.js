import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemsImageUrl } from "../../utils/constants";
import { clearCart } from "../../utils/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length == 0) return <h1 className="m-4 p-4 text-center font-bold text-2xl">No Items Added</h1>;

  return (
    <div className="m-auto w-6/12 text-center p-4">
      <Toaster />
      <button
        className="absolute left-5 top-18 hover:scale-105 duration-500 search mx-4  p-2 text-lg rounded-lg shadow-lg bg-lime-600 text-white"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <h1 className="text-4xl font-bold">Cart</h1>
      {cartItems.map((Items) => (
        <div
          key={Items.card.info.name}
          className="flex justify-between text-left p-4 m-2 border-gray-400 border-b-2"
        >
          <div className="flex-grow">
            <div className="py-2">
              <span className="font-medium">{Items.card.info.name}</span>
              <span className="text-sm ml-2">
                - ₹{" "}
                {Items.card.info.price
                  ? Items.card.info.price / 100
                  : Items.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{Items.card.info.description}</p>
          </div>
          <div className="relative flex-shrink-0 w-20 h-20">
            {Items.card.info.imageId && (
              <img
                src={ItemsImageUrl + Items.card.info.imageId}
                className="w-full h-full object-cover rounded-lg"
                alt={Items.card.info.name}
              />
            )}
            <button
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-md text-green-700 bg-white font-semibold shadow-md hover:bg-slate-300 duration-300"
              onClick={() => handleAddItems(Items)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
