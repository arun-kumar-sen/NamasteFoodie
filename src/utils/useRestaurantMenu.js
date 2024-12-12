import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  //fetch data
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(MENU_API + resId);
    const json = await res.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurantMenu;
