import React from 'react'
import { PiGreaterThan } from "react-icons/pi";
import { Link } from 'react-router-dom';
function Mini__Home({name}) {
  return (
    <>
      <div className=" w-full  mt-20  h-auto mx-auto ">
    <div className="border-t-2 py-5 flex gap-5 items-center">
      <Link to={"/"}>
      <h1 className="flex items-center gap-1 text-xl text-gray-500 hover:scale-125 transition-transform cursor-pointer">
            Home
            <PiGreaterThan className="text-md pt-1" />
          </h1>
      </Link>
          <Link to={"/Card"}>
          <h1 className="text-xl hover:scale-125 transition-transform cursor-pointer"> {name}</h1>
          </Link>
        </div>
        </div>
    </>
  )
}

export default Mini__Home