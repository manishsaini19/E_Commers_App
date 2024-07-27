import React, { useState } from 'react'
import DropDressBox_1 from './DropDressBox_1';
function DressBox() {
  const [DressUp, setDressUp] = useState(false);

  return (
    <>
      <div onClick={() => setDressUp(!DressUp)} className="w-full h-auto cursor-pointer bg-white  relative z-[10] top-[340px]  border-b-2 ">
          <div className="w-full h-auto py-4 relative  z-10 px-10 bg-white  hover:bg-gray-100">
            <h1 className="2xl:text-3xl text-2xl font-bold">Dress Style</h1>
            <div className="absolute top-7 right-10 text-2xl">
              <ion-icon
                name={
                    DressUp ? "chevron-down-outline" : "chevron-forward-outline"
                }
              ></ion-icon>
            </div>
          </div>
          <div className={`w-full h-auto py-5  absolute -z-10 duration-500   ${ DressUp ? "top-[50px]" : "top-[-500px]"}`}>
            <div className='w-full h-auto '>
              <DropDressBox_1/>
            </div>
          </div>
        </div>
    </>
  )
}

export default DressBox