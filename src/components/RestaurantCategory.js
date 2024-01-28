import ItemList from "./itemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      <div className="w-8/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between">
          <span className="font-bold text-lg">{data.title}</span>

          <span>⬇️</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
