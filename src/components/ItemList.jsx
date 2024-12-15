import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // DIPATCH an ACTION
    dispatch(addItem(item));
  };

  return (
    <div>
      <div>
        {items?.map((item) => (
          <div
            key={item?.card?.info?.name}
            className="m-2 p-2 border-gray-50 border-b-2 text-left"
          >
            <div className="flex justify-between items-center">
              <div className="py-2">
                <span className="font-bold">{item?.card?.info?.name} </span>
                <div>
                  {"₹"}
                  {item?.card?.info?.price
                    ? item?.card?.info?.price / 100
                    : item?.card?.info?.defaultPrice / 100}
                </div>
              </div>
              <div>
                <div>
                  <img
                    className="w-[80px] rounded-lg my-2"
                    src={CDN_URL + item?.card?.info?.imageId}
                    alt="Dish Image"
                  />
                </div>
                <div className="w-2">
                  <button
                    onClick={() => handleAddItem(item)}
                    className=" p-2  absolute mt-[-100px] h-auto bg-white  shadow-lg rounded-md "
                  >
                    Add +
                  </button>
                </div>
              </div>
            </div>
            <p className="text-xs font-semibold">
              {item?.card?.info?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
