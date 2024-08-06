import {CDN_URL} from "../utils/constants"
const ResCard = ({resData}) => {
  const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resData?.info;

     return (
       <div className="resCard  flex flex-col rounded-xl m-5 shadow-lg bg-gray-200 w-60  text-center hover:scale-110 duration-500">
         <div className="flex-shrink-0 h-40">
           <img
             className="res-logo w-full h-full object-cover rounded-t-xl"
             src={CDN_URL+cloudinaryImageId}
             
             alt="res-logo"
           />
         </div>
         <div className="res-info w-full h-full p-2 ">
         <b>{name}</b>
         <p  className="mt-2">{cuisines.join(', ')}</p>
         <p className="mt-2">{avgRating} stars</p>
         <p className="mt-2">{costForTwo}</p>
         </div>
       </div>
     );
   };

   export default ResCard;