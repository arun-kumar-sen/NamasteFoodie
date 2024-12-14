import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showItems, setShowItems] = useState(null);

  const handleShowItems = (i) => {
    if (i == showItems) {
      setShowItems(null);
    } else {
      setShowItems(i);
    }
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="m-4 p-4 border border-black bg-gray-100 shadow-lg text-center">
      <h1 className="font-bold my-2 py-4 text-lg">{name}</h1>
      <p className="text-ld font-bold">
        {cuisines.join(" , ")} - {costForTwoMessage}
      </p>

      {/* categories accordian */}
      {categories.map((category, index) => (
        // * Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showItems}
          setShowItems={() => handleShowItems(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
