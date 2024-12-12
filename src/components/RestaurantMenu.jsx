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
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(" ,")}</h2>
      <h4>{costForTwoMessage}</h4>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((itemCard) => (
          <li key={itemCard?.card.info?.id}>
            {itemCard?.card.info?.name} {itemCard?.card?.info?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
