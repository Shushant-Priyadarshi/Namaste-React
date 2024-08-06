import React from 'react';

const Shimmer = () => {
  return (
    <div className="resCard flex flex-col rounded-xl m-5 shadow-lg bg-gray-200 w-60 text-center hover:scale-110 duration-500">
      <div className="flex-shrink-0 h-40 bg-gray-300 animate-pulse rounded-t-xl"></div>
      <div className="res-info w-full h-full p-2">
        <div className="bg-gray-300 animate-pulse h-6 w-3/4 mx-auto my-2 rounded"></div>
        <div className="bg-gray-300 animate-pulse h-4 w-5/6 mx-auto my-2 rounded"></div>
        <div className="bg-gray-300 animate-pulse h-4 w-1/2 mx-auto my-2 rounded"></div>
        <div className="bg-gray-300 animate-pulse h-4 w-2/3 mx-auto my-2 rounded"></div>
      </div>
    </div>
  );
};

export default Shimmer;
