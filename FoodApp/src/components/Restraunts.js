import { useEffect, useState } from "react";
import { Restraunts_API } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
import {useParams} from "react-router-dom"

const Restraunts = () => {
  let [resInfo, SetresInfo] = useState(null);
  let [menuName, setMenuName] = useState();

  const {resId} = useParams();


  useEffect(() => {
    fetchRestrauntData();
  }, []);

  const fetchRestrauntData = async () => {
    const fetchedData = await fetch(Restraunts_API+resId);
    const jsonData = await fetchedData.json();

    SetresInfo(jsonData.data.cards[2].card.card.info);
    
    
    setMenuName( jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);

     
  };

  if (!resInfo) {
    return <div className="load">Loading...</div>;
  }
  const {
    name,
    avgRating,
    cloudinaryImageId,
    costForTwoMessage,
    id,
    cuisines,
  } = resInfo;


  if(!menuName){
    return <div className="load">Loading...</div>;
  }
 

  

  return (
    <div className="menu">
      <div className="menu-info">
        <h1>{name}</h1>
        <h3>
          {cuisines.join(", ")} - {avgRating}
        </h3>
        <h3>{costForTwoMessage}</h3>
        <ul>
            {menuName.map((items)=>( <li key={items.card.info.id}>{items.card.info.name} - {"₹ "+items.card.info.price/100}</li>))}
        </ul>
      </div>

      <div className="menu-img">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="dish"
          className="menu-img-item"
        ></img>
      </div>
    </div>
  );
};

export default Restraunts;
