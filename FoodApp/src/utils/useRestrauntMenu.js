import { useEffect, useState } from "react";

import { Restraunts_API } from "./constants";
const useRestrauntMenu = (resId) => {
  let [resInfo, SetresInfo] = useState(null);
  let [menuName, setMenuName] = useState();
  let [categories,setCategories] =useState();
  useEffect(() => {
    fetchRestrauntData(resId);
  }, []);

  const fetchRestrauntData = async (resId) => {
    const fetchedData = await fetch(Restraunts_API + resId);
    const jsonData = await fetchedData.json();
    
  
    setCategories(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
    SetresInfo(jsonData.data.cards[2].card.card.info);

    setMenuName(
      jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  };

 
  return { resInfo, menuName ,categories};
};

export default useRestrauntMenu;
