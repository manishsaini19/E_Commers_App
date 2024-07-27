import React from 'react'
import FirstBox from "./FirstBox";
import SecoundBox from "./SecoundBox";
import ThirdBox from "./ThirdBox";
import ForthBox from "./ForthBox";
import FiveBox from "./FiveBox";
function ComboBox() {
  return (
    <>
      <div className="w-full h-auto  absolute top-[95px] ">
          <FirstBox/>
          <SecoundBox/>
          <ThirdBox/>
         <ForthBox/>
        <FiveBox/>
        </div>
    </>
  )
}

export default ComboBox