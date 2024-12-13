import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div className="m-1 p-2 w-[280px] hover:bg-gray-100 rounded-lg">
      <div className="shadow-lg  bg-gray-50">
        <img
          className="res-logo rounded-md "
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="Mannis Dun Biryani"
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
