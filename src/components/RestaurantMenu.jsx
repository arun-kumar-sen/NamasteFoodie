import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  console.log(resInfo);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="m-4 p-4 border border-black bg-gray-100 shadow-lg">
      <h1 className="font-bold py-4 text-lg">{name}</h1>
      <h2>{cuisines.join(" ,")}</h2>
      <h4>{costForTwoMessage}</h4>
      <h2 className="font-bold py-4 text-lg">Menu</h2>
      <ul>
        {itemCards?.map((itemCard) => (
          <li className="p-1 m-1" key={itemCard?.card.info?.id}>
            {itemCard?.card.info?.name} {"₹" + itemCard?.card?.info?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
