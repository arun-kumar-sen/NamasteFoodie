import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withOpenedRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  // the above usestate is  same as below
  // const arr = useState(resList)
  // array destructuring
  // const [listOfRestaurants, setListOfRestaurants] = arr;
  // const listOfRestaurants = arr[0]
  // const setListOfRestaurants = arr[1]
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredState, setFilteredState] = useState([]);

  const [searchText, setSearchText] = useState("");

  const HOCRestaurantCard = withOpenedRestaurantCard(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  const isOnline = useOnlineStatus();

  const fetchData = async () => {
    // fetch(): super power JS engine has, it will fecth data from API

    //"https://api.allorigins.win/raw?url=" + (used for CORS issue)
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9452387&lng=77.7115841&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredState(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Loads => Render(Skeleton) => API => Re-render
  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = () => {
    const topRatedRest = listOfRestaurants?.filter(
      (res, i) => res?.info?.avgRating > 4.2
    );
    console.log(topRatedRest);
    setFilteredState(topRatedRest); // this setter function will trigger the diff algo & find diff between virtual DOMs
  };

  if (!isOnline) {
    return <h1>Looks like you are offline!!! check your internet</h1>;
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 border border-spacing-2 bg-green-100 m-2 rounded-md"
            onClick={() => {
              const filteredRest = listOfRestaurants?.filter((card, i) =>
                card?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              console.log(filteredRest);
              console.log(searchText);
              setFilteredState(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            onClick={handleFilter}
            className="px-4  border border-spacing-2 bg-green-100 rounded-md "
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label htmlFor="">User Name:</label>
          <input
            className="border border-black p-2"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredState?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant?.info?.isOpen ? (
              <HOCRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
