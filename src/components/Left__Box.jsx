import React, { useState } from "react";
import Vecter_4 from "../assets/E__commimags/Vector4.png";
import PriceBox from '../components/PriceBox'
import ColorBox from "../components/ColorBox";
import SizeBox from "../components/SizeBox";
import DressBox from "./DressBox";
import ComboBox from "./ComboBox";
function Left__Box() {
  return (
    <>
      <div className="w-3/12 h-[1000px] border-2 hidden lg:block py-8 rounded-3xl relative z-[100]  overflow-auto bg-white  ">
        <div  className="w-full h-auto  px-10 absolute top-0 pt-10 border-b-2 z-[90] bg-white">
          <div className="w-full h-auto flex justify-between items-center  pb-5">
            <h1 className="text-3xl font-bold">Filters</h1>
            <img src={Vecter_4} className="w-10 " alt=""  />
          </div>
        </div>
       <ComboBox/>
        <PriceBox/>
        <ColorBox/>
        <SizeBox/>
        <DressBox/>
      </div>
    </>
  );
}

export default Left__Box;
