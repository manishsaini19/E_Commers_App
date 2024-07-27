import React, { useState } from 'react'

function PriceBox() {
  const [PriceUp, setPriceUp] = useState(false);

  return (
    <>
    <div onClick={() => setPriceUp(!PriceUp)} className="w-full h-auto cursor-pointer bg-white  relative z-[30] top-[343px] border-t-2  border-b-2">
          <div className="w-full h-auto py-4 relative  z-10 px-10 bg-white  hover:bg-gray-100">
            <h1 className="2xl:text-3xl text-2xl font-bold">Price</h1>
            <div className="absolute top-8 right-10 text-2xl">
              <ion-icon
                name={
                  PriceUp ? "chevron-down-outline" : "chevron-forward-outline"
                }
              ></ion-icon>
            </div>
          </div>
          <div className={`w-full h-auto py-5  absolute -z-10 duration-500  bg-white px-10 ${ PriceUp ? "top-[82px]" : "top-[-0px]"}`}>
            <input type="range" className="w-full h-auto cursor-pointer" />
          </div>
        </div>
    </>
  )
}

export default PriceBox