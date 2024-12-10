import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [itemCrds, setItemCards] = useState(null);

  const { resId } = useParams();
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(MENU_API + resId);
    const res = await data.json();
    console.log(res.data.cards[2].card.card.info, "res");
    setResInfo(res?.data?.cards[2]?.card?.card?.info);
    setItemCards(
      res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    console.log(
      res.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  };
  console.log(resInfo);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(" ,")}</h2>
      <h4>{costForTwoMessage}</h4>
      <h2>Menu</h2>
      <ul>
        {itemCrds?.map((itemCard, i) => (
          <li key={itemCard?.card.info?.id}>
            {itemCard?.card.info?.name} {itemCard?.card?.info?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
