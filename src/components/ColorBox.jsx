import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";

function ColorBox() {
    const [ColorUp, setColorUp] = useState(false);
  return (
    <>
    <div onClick={() => setColorUp(!ColorUp)} className="w-full h-auto  bg-white relative z-[20] top-[340px] ">
          <div className="w-full h-auto border-b-2 ">
          <div className="w-full h-auto py-4 relative z-10 px-10 bg-white hover:bg-gray-100 cursor-pointer">
            <h1 className="2xl:text-3xl text-2xl font-bold">Colors</h1>
          </div>
         <div className="absolute z-[10] top-6 cursor-pointer  right-10 text-2xl">
         <ion-icon name={ColorUp ? 'chevron-down-outline' : 'chevron-forward-outline'}></ion-icon>
         </div>
         </div>
         <div className={`w-full h-auto absolute z-1 duration-500 bg-white  ${ColorUp ? 'top-[62px]' : 'top-[-350px]' }`}>
         <div className="w-full h-auto px-10 bg-white ">
         <div className="w-full h-auto  mt-4 cursor-pointer flex gap-2 justify-between flex-wrap">
         <span className="py-3 px-3 border-2 border-green-600 bg-green-500 rounded-full cursor-pointer">
              <FaCheck className="text-xl text-white" />
            </span>          
            <span className="py-3 px-3 border-2 border-red-600 bg-red-500 rounded-full cursor-pointer">
              <FaCheck className="text-xl text-white" />
            </span>
            <span className="py-3 px-3 border-2 border-yellow-600 bg-yellow-500 rounded-full cursor-pointer">
              <FaCheck className="text-xl text-white" />
            </span>
            <span className="py-3 px-3 border-2 border-orange-600 bg-orange-500 rounded-full cursor-pointer">
              <FaCheck className="text-xl text-white" />
            </span>
            <span className="py-3 px-3 border-2 border-blue-500 bg-blue-400 rounded-full cursor-pointer">
              <FaCheck className="text-xl text-white" />
            </span>
          </div>
         </div>
         <div className="w-full h-auto px-10">
         <div className="w-full cursor-pointer h-auto  mt-4 flex gap-2 pb-5 justify-between flex-wrap">
            <span className="py-3 px-3 border-2 border-blue-800 bg-blue-700 rounded-full cursor-pointer">
              <FaCheck className="text-xl text-white" />
            </span>
            <span className="py-3 px-3 border-2 border-purple-600 bg-purple-500 rounded-full cursor-pointer">
              <FaCheck className="text-xl text-white" />
            </span>
            <span className="py-3 px-3 border-2 border-pink-600 bg-pink-500 rounded-full cursor-pointer">
              <FaCheck className="text-xl text-white" />
            </span>
            <span className="py-3 px-3 border-2 border-gray-600 bg-gray-500 rounded-full cursor-pointer">
              <FaCheck className="text-xl text-white" />
            </span>
            <span className="py-3 px-3 border-2 border-gray-500 bg-black rounded-full cursor-pointer">
              <FaCheck className="text-xl text-white" />
            </span>
          </div>
         </div>
         </div>
        </div>
    </>
  )
}

export default ColorBox