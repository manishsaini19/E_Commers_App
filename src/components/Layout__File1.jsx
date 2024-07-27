import React from "react";

import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Layout__File1({ img, title, number, text ,offer , price, id  }) {

 
  return (
    <>
    <div className="w-full h-auto cursor-pointer   hover:scale-105 transition-transform">
        <Link to={`/category/${id}`} className="text-start w-full  object-cover  ">
          <img src={img} className="w-full h-96 rounded-3xl hover:shadow-lg " />
          <p className="font-bold text-md md:text-lg lg:text-xl pt-5 ">
            {title}
          </p>
          <div className="flex  gap-2 items-center -mt-2 text-yellow-500 pt-5">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt /> 
            <h1 className="text-black">{number}</h1>
          </div>
          <div className="flex gap-5 items-center py-3">
          <h1 className="font-bold text-2xl md:text-2xl ">{text}</h1>
          <h1 className=" font-bold text-2xl md:text-2xl text-gray-400 "><s>{offer}</s></h1>
          <h1 className=" font-bold text-sm text-red-500 rounded-full pt-1 ">{price}</h1>
          </div>
        </Link>
        </div>
    </>
  );
}

export default Layout__File1;
