import ResCard from "./ResCard";
import ResObj from "../utils/Data.json";
import { useState } from "react";

const Body = () => {
  let [listofRes, setListofRes] = useState(ResObj);

  const handleClick = () => {
    const filteredList = ResObj.filter(
      (restraunts) => restraunts.info.avgRating >= 4.5
    );
    setListofRes(filteredList);
  };

  return (
    <div className="searchAndRes">
      <button className="search" onClick={handleClick}>
        Search 4.5+
      </button>

      <div className="res-container">
        {listofRes.map((ResData) => (
          <ResCard key={ResData.info.id} resData={ResData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
