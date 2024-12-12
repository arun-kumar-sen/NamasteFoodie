import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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

  const isOnline = useOnlineStatus();

  const fetchData = async () => {
    // fetch(): super power JS engine has, it will fecth data from API

    //"https://api.allorigins.win/raw?url=" + (used for CORS issue)
    const data = await fetch(
      "https://api.allorigins.win/raw?url=" +
        encodeURIComponent(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredState(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button onClick={handleFilter} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredState?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
