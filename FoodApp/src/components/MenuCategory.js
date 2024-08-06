import { ItemsImageUrl } from "../utils/constants";
import {useState} from "react"
const MenuCategory = ({ data }) => {
  const [showItems,setShowItems]= useState(false)
  const handleClick=()=>{
    setShowItems(!showItems)
  }
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 bg-slate-200 rounded-lg shadow-lg my-3 p-4 mx-auto cursor-pointer" onClick={handleClick}>
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg">{data.card?.card?.title} ({data.card.card.itemCards.length})</span>
          <span className="text-xl">⬇️</span>
        </div>

        {/* Body */}

        {showItems && data.card.card.itemCards.map((Items) => (
          <div key={Items.card.info.name} className="flex justify-between text-left p-4 m-2 border-gray-400 border-b-2">
            <div className="flex-grow">
              <div className="py-2">
                <span className="font-medium">{Items.card.info.name}</span>
                <span className="text-sm ml-2">- ₹ {Items.card.info.price ? Items.card.info.price / 100 : Items.card.info.defaultPrice / 100}</span>
              </div>
              <p className="text-xs">{Items.card.info.description}</p>
            </div>
            <div className="relative flex-shrink-0 w-20 h-20">
              {Items.card.info.imageId &&
              <img src={ItemsImageUrl + Items.card.info.imageId} className="w-full h-full object-cover rounded-lg" alt={Items.card.info.name} />}
              <button className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-md text-green-700 bg-white font-semibold shadow-md hover:bg-slate-300 duration-300">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
