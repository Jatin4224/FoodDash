import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardIsOpen = withOpenLabel(RestaurantCard);
  console.log(listOfRestaurants);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.org/?" +
          encodeURIComponent(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5124389&lng=77.1370115&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          )
      );

      const json = await data.json();
      console.log(json);
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <>
        <div>
          <OfflinePage />
        </div>
      </>
    );
  return (
    <div className="body">
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="bg-gray-600 py-6 flex flex-grow">
            <div className="m-4 p-4">
              <input
                type="text"
                data-testid="searchInput"
                className="w-half px-2 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-500 rounded-l-full shadow-lg"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="bg-yellow-500 text-white px-2 py-2 rounded-md shadow-md hover:bg-yellow-600 transition duration-300 rounded-r-full"
                onClick={() => {
                  const filteredRestaurant = listOfRestaurants.filter((res) =>
                    res.info.name
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  );
                  setFilteredRestaurant(filteredRestaurant);
                }}
              >
                Search
              </button>
            </div>
            <div className=" m-4 p-4">
              <button
                className="bg-yellow-500 text-white px-2 py-2 rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
                onClick={() => {
                  const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                  );
                  setFilteredRestaurant(filteredList);
                }}
              >
                Top Rated restaurants
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
            {filteredRestaurant.map((restaurant) => (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                {restaurant.info.id.isOpen ? (
                  <RestaurantCardIsOpen resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;
