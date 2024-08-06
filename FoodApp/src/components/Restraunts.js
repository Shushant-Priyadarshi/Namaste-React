import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestrauntLoading from "./common/RestrauntLoading";
import MenuCategory from "./MenuCategory"

const Restraunts = () => {
  const {resId} = useParams();
  const {resInfo,menuName,categories} =  useRestrauntMenu(resId);

  if (!resInfo || !menuName ) {
    return < RestrauntLoading/>;
  }
  
  const { name, avgRating, cloudinaryImageId, costForTwoMessage, cuisines ,id} = resInfo;
  
  const Itemscategories =
   categories?.filter((c)=>c.card?.card?.["@type"]===
   "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  
  )



  
  
  
  return (
    <div className="">
      <div className="text-center my-4">
        <h1 className="text-3xl font-semibold  my-4">{name}</h1>
        <h3 className="text-lg font-semibold my-4">
          {cuisines.join(", ")} - {avgRating} - {costForTwoMessage}
        </h3>
       
        
        {
          Itemscategories.map((category)=>(<MenuCategory key={category.card.card.title} data={category}/>))  
        }
       
      </div>
     
      
    </div>
  );
};

export default Restraunts;
