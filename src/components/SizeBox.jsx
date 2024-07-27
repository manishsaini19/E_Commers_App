import React, { useState } from 'react'

function SizeBox() {
  const [SizeUp, setSizeUp] = useState(false);

  return (
    <>
        <div onClick={() => setSizeUp(!SizeUp)} className="w-full h-auto cursor-pointer bg-white  relative border-b-2 z-[15] top-[340px]"> 
          <div className="w-full h-auto py-4 relative  z-10 px-10 bg-white  hover:bg-gray-100">
            <h1 className="2xl:text-3xl text-2xl font-bold">Size</h1>
            <div className="absolute top-7 right-10 text-2xl">
              <ion-icon
                name={
                  SizeUp ? "chevron-down-outline" : "chevron-forward-outline"
                }
              ></ion-icon>
            </div>
          </div>
          <div className={`w-full h-auto py-5  absolute -z-1 duration-500 bg-white  px-10 ${ SizeUp ? "top-[52px]" : "top-[-600px]"}`}>
            <div className="w-full h-auto">
            <div className="w-full h-auto mt-4 mb-2 flex gap-5 flex-wrap xl:flex-nowrap ">
            <button className="w-32 text-xl py-3 rounded-3xl bg-gray-200 outline-none text-gray-500 hover:bg-black hover:text-white transition">
              XX-Small
            </button>
            <button className="w-32 text-xl py-3 rounded-3xl bg-gray-200 outline-none text-gray-500 hover:bg-black hover:text-white transition">
              X-Small
            </button>
          </div>
          <div className="w-full h-auto  mb-3 flex gap-5 flex-wrap xl:flex-nowrap  ">
            <button className="w-28 text-xl py-3 rounded-3xl bg-gray-200 outline-none text-gray-500 hover:bg-black hover:text-white transition">
              Small
            </button>
            <button className="w-32 text-xl py-3 rounded-3xl bg-gray-200 outline-none text-gray-500 hover:bg-black hover:text-white transition">
              Medium
            </button>
          </div>
          <div className="w-full h-auto  mb-3 flex gap-5 flex-wrap xl:flex-nowrap ">
            <button className="w-28 text-xl py-3 rounded-3xl bg-gray-200 outline-none text-gray-500 hover:bg-black hover:text-white transition">
              Large
            </button>
            <button className="w-32 text-xl py-3 rounded-3xl bg-gray-200 outline-none text-gray-500 hover:bg-black hover:text-white transition">
              X-Large
            </button>
          </div>
          <div className="w-full h-auto  mb-3 flex gap-5 flex-wrap xl:flex-nowrap ">
            <button className="w-32 text-xl py-3 rounded-3xl bg-gray-200 outline-none text-gray-500 hover:bg-black hover:text-white transition">
              XX-Large
            </button>
            <button className="w-32 text-xl py-3 rounded-3xl bg-gray-200 outline-none text-gray-500 hover:bg-black hover:text-white transition">
              3X-Large
            </button>
          </div>
          <div className="w-full h-auto  pb-4 flex-wrap xl:flex-nowrap ">
            <button className="w-32 text-xl py-3 rounded-3xl bg-gray-200 outline-none text-gray-500 hover:bg-black hover:text-white transition">
              4X-Large
            </button>
          </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default SizeBox