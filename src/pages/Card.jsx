import React from "react";
import Navbar from "../components/Navbar";
import { PiGreaterThan } from "react-icons/pi";

import Footer from "../components/Footer";

import Left__Box from "../components/Left__Box";
import Mini__Home from "../components/Mini__Home";
import Right__Box from "../components/Right__Box";
function Card() {
  return (
    <>
      <Navbar />
      <div className="2xl:w-10/12  mt-20  w-11/12 h-auto mx-auto ">
        <Mini__Home name={"Casual"} />
        <div className="w-full h-auto flex mt-5">
          <Left__Box />
          <Right__Box />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Card;
