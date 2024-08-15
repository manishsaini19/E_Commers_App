import React from "react";
import { PiGreaterThan } from "react-icons/pi";
import Left__Box from "../components/Left__Box";
import Mini__Home from "../components/Mini__Home";
import Right__Box from "../components/Right__Box";
function Card() {
  return (
    <>
      <div className="2xl:w-10/12  mt-20  w-11/12 h-auto mx-auto ">
        <Mini__Home name={"Casual"} />
        <div className="w-full h-auto flex mt-5">
          <Left__Box />
          <Right__Box />
        </div>
      </div>
    </>
  );
}

export default Card;
