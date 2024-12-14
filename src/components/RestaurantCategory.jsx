import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowItems }) => {
  const { title, itemCards } = data;

  const handleClick = () => {
    setShowItems();
  };

  //Note -> If we use state for showItems and hanlde its click in this component then it will be uncontrolled here,
  // so if we lift up the sate and use this showItems in parent Comp i.e RestaurantMenu then it will be controoled

  return (
    <div className="w-6/12 shadow-lg p-4 bg-gray-200 mx-auto my-4 cursor-pointer">
      {/* Accordian Header */}
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold text-lg">
          {title} ({itemCards.length})
        </span>
        {showItems ? <span>⬆️</span> : <span>⬇️</span>}
      </div>
      {/* Accordian Body */}
      {showItems && <ItemList items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
