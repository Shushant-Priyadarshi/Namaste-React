import ResCard from "./ResCard";
import { useState, useEffect } from "react";

const Body = () => {
  let [listofRes, setListofRes] = useState([]);
  let[arrayForRes,SetArrayForRes] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4518146&lng=81.78734229999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const fetchedData = await fetch(API);
    const jsonFetchedData = await fetchedData.json();
    const restaurants = jsonFetchedData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    console.log(restaurants);
    setListofRes(restaurants);
    SetArrayForRes(restaurants);
    
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
    );
    SetArrayForRes(searchedRes);
    setSearchText("");
  };

  return (
    <div className="searchAndRes">
      <div className="search-container">
        <input
          placeholder="Search restaurants"
          className="bar"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search" onClick={handleSearch}>Search</button>
        <button className="search" onClick={handleClick}>
          Top Restraunts
        </button>
      </div>

      <div className="res-container">
        {arrayForRes && arrayForRes.map((ResData) => (
          <ResCard key={ResData.info.id} resData={ResData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
