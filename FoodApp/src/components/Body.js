import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import Shimmer from "./common/Shimmer";
import {Offline} from "offline-tag";

const Body = () => {
  let [listofRes, setListofRes] = useState([]);
  let[arrayForRes,SetArrayForRes] = useState([]);
  let [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  
 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4518146&lng=81.78734229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const fetchedData = await fetch(API);
    const jsonFetchedData = await fetchedData.json();
    const restaurants = jsonFetchedData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    
    setListofRes(restaurants);
    SetArrayForRes(restaurants);
    setLoading(false);
    
  };

  const handleClick = () => {
    const filteredList = listofRes.filter(
      (restaurants) => restaurants.info.avgRating >=4.3
    );
    SetArrayForRes(filteredList);
  };

  const handleSearch = () => {
    const searchedRes = listofRes.filter((Res) =>
      Res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
    ||Res.info.cuisines.join(" ,").toLowerCase().includes(searchText.toLowerCase()) 
    
   
    );
    SetArrayForRes(searchedRes);
    setSearchText("");
  };

  if (loading) {
    return (
      <div className="res-container flex flex-wrap mt-24 p-5">
        {Array(10).fill().map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    );
  }



  return   (
    <div className="searchAndRes ">

      <Offline className="offline-text">No internet</Offline>

      
      <div className="search-container p-6 text-lg">
        <input
          placeholder="Search restaurants"
          className="bar text-lg p-3 rounded-md bg-[#F1F0F4]"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          
        />
        <button className="hover:scale-105 duration-500 search mx-4  p-2 text-lg rounded-lg shadow-lg bg-lime-600 text-white" onClick={handleSearch}>Search</button>
        <button className="hover:scale-105 duration-500 search mx-4 p-2 text-lg rounded-lg shadow-lg bg-lime-600 text-white" onClick={handleClick}>
          Top Restraunts
        </button>
      </div>

      <div className="res-container flex flex-wrap">
        {arrayForRes && arrayForRes.map((ResData) => (
          <Link className="res-link flex" key={ResData.info.id} to={"/restraunts/"+ResData.info.id}><ResCard  resData={ResData} /></Link>
          
        ))}
      </div>
    </div>
  );
};

export default Body;
