import React from 'react'
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function Samantha({usename , title , date }) {
  return (
    <>
          
            <div className="border-2 md:w-6/12 mb-5 md:mb-0 sm:p-7 p-5 w-full rounded-3xl hover:bg-gray-100">
                <div className='w-full '>
              <div className="flex justify-between items-center">
                <div className="flex  gap-2 items-center mb-4 mt-4 text-2xl text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </div>
                <HiOutlineDotsHorizontal className="text-3xl text-gray-400 cursor-pointer hover:scale-125 transition-transform" />
              </div>
              <h1 className="flex items-center gap-2 text-3xl font-bold">
             {usename}
                <FaCheck className="w-8 p-1 bg-green-500 text-white rounded-full" />
              </h1>
              <p className=" text-gray-500 text-xl my-5">{title}</p>
              <h1 className="text-xl text-gray-700">{date}</h1>
            </div>
            </div>
    </>
  )
}

export default Samantha