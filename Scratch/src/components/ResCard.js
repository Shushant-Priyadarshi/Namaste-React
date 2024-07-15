import {CDN_URL} from "../utils/constants"
const ResCard = ({resData}) => {
  const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info;

     return (
       <div className="resCard">
         <div>
           <img
             className="res-logo"
             src={CDN_URL+cloudinaryImageId}
             
             alt="res-logo"
           />
         </div>
         <div className="res-info">
         <b>{name}</b>
         <p>{cuisines.join(', ')}</p>
         <p>{avgRating} stars</p>
         <p>{costForTwo}</p>
         </div>
       </div>
     );
   };

   export default ResCard;