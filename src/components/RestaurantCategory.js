import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      <div className="w-8/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between" onClick={handleClick}>
          <span className="font-bold text-lg">{data.title}</span>

          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
