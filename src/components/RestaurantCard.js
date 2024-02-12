import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    sla,
    locality,
  } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cuisines">{cuisines.join(", ")}</h4>
      <h4 className="res-rating">avgRating:⭐{avgRating}</h4>
      <h4 className="res-cost">Cost for Two: {costForTwo}</h4>
      <h4 className="res-delivery-time">Delivery Time: {deliveryTime}</h4>
      <h4 className="res-sla">SLA: {sla.slaString}</h4>
      <h4 className="res-locality">Locality: {locality}</h4>
    </div>
  );
};

//Higher order component
//input - RestaurantCard -> RestaurantCardIsOpen
export const withOpenLabel = (RestaurantCard) => {
  //where we receive props ?
  return (props) => {
    return (
      <div>
        <label>IsOpen</label>

        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
