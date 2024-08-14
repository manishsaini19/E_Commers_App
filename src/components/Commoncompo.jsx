import React, { useState } from "react";
import Recten from "../assets/E__commimags/Recten.png";
import Vector from "../assets/E__commimags/Vector.png";
import Vector1 from "../assets/E__commimags/Vector1.png";
import Vector2 from "../assets/E__commimags/Vector2.png";
import Vector3 from "../assets/E__commimags/Vector3.png";
import Vector5 from "../assets/E__commimags/Vector5.png";
import gucci from "../assets/E__commimags/gucci.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const HERO = [
  {
    img: "Vector",
  },
  {
    img: "gucci",
  },
  {
    img: "Vector1",
  },
  {
    img: "Vector2",
  },
  {
    img: "Vector3",
  },
];

const Commoncompo = () => {
  const [CounterState, setCounterSate] = useState(false);
  return (
    <>
      <div className="w-full h-auto bg-gray-100 mt-20  flex justify-center ">
        <div className="w-full h-auto">
          <ScrollTrigger
            onEnter={() => setCounterSate(true)}
            onExit={() => setCounterSate(false)}
          >
            <div className="w-full h-auto md:flex  md:justify-between pt-28 px-5 sm:px-10  md:px-5 lg:px-20 xl:px-32 2xl:px-40  ">
              <div className="w-full ">
                <h1 className="2xl:text-7xl uppercase xl:text-6xl lg:text-5xl md:text-4xl sm:text-6xl text-4xl font-bold ">
                  find clothes <br /> that matches <br /> your style
                </h1>
                <p className="pt-4 text-gray-500 pb-10 text-sm sm:text-sm md:text-sm md:pt-2 lg:pt-5 lg:text-md xl:text-md 2xl:text-lg">
                  Browse through our diverse range of meticulously crafted
                  garments, designed <br /> to bring out your individuality and
                  cater to your sense of style.
                </p>
                <Link
                  to={"/Category"}
                  className="py-4 md:py-3 lg:py-4 px-10 md:px-20 hover:bg-black hover:text-white border-2 border-gray-400 hover:border-black transition mt-5 md:mt-3  lg:mt-7 rounded-3xl"
                >
                  Shop Now
                </Link>
                <div className=" mt-6 sm:mt-6 md:mt-4 lg:mt-8 flex w-full gap-8">
                  <div className=" border-r-2  2xl:pr-10 xl:pr-5 lg:pr-5 md:pr-2 sm:pr-3 border-gray-400">
                    <h1 className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl font-bold">
                      {CounterState && (
                        <CountUp start={0} end={200} duration={2.75}></CountUp>
                      )}
                      +
                    </h1>
                    <p className="text-gray-500 mt-1 text-sm sm:text-sm md:text-sm lg:text-md lg:text-md xl:text-lg 2xl:text-lg">
                      International Brands
                    </p>
                  </div>
                  <div className="  border-r-2   2xl:pr-10 xl:pr-8 lg:pr-7 md:pr-2  sm:pr-3 border-gray-400">
                    <h1 className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl font-bold">
                      {CounterState && (
                        <CountUp start={0} end={2000} duration={2.75}></CountUp>
                      )}
                      +
                    </h1>
                    <p className="text-gray-500 mt-1  text-sm sm:text-sm md:text-sm lg:text-md lg:text-md xl:text-lg 2xl:text-lg">
                      High-Quality Products
                    </p>
                  </div>
                  <div className=" 2xl:pr-10 xl:pr-8 lg:pr-7 md:pr-2 sm:pr-3">
                    <h1 className="2xl:text-5xl xl:text-4xl lg:text-4xl md:text-2xl sm:text-2xl font-bold">
                      {CounterState && (
                        <CountUp
                          start={0}
                          end={30000}
                          duration={2.75}
                        ></CountUp>
                      )}
                      +
                    </h1>
                    <p className="text-gray-500 mt-1  text-sm sm:text-sm md:text-md lg:text-md lg:text-md xl:text-lg 2xl:text-lg">
                      Happy Customers
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full  md:w-9/12">
                <img src={Recten} className="w-full object-cover" alt="" />
              </div>
            </div>
            <div className="bg-black w-full h-auto py-7 sm:py-8 md:py-9 lg:py-10 xl:py-10 ">
              <div className="flex flex-wrap gap-10 h-full justify-center md:justify-between md:gap-5  items-center px-4 sm:px-10 md:px-10 lg:px-24 xl:px-32 2xl:px-40">
                {/* {HERO.map((item) =>(
            <img className="2xl:w-44 xl:w-40 lg:w-36 md:w-32 sm:w-24 w-24" key={item.img} item={item}/>
            ))} */}
                <Link to={"https://www.justwatches.com/"}>
                  <img
                    className="2xl:w-44 xl:w-40 lg:w-36 md:w-32 sm:w-24 w-24 hover:scale-105 transition-transform cursor-pointer"
                    src={Vector}
                    alt=""
                  />
                </Link>
                <Link to={"https://www.zara.com/"}>
                  <img
                    className="2xl:w-24 xl:w-20 lg:w-20 md:w-16 sm:w-12 w-12 hover:scale-105 transition-transform cursor-pointer"
                    src={Vector1}
                    alt=""
                  />
                </Link>
                <Link to={"https://www.vogue.com/"}>
                  <img
                    className="2xl:w-44 xl:w-40 lg:w-36 md:w-32 sm:w-24 w-24 hover:scale-105 transition-transform cursor-pointer"
                    src={gucci}
                    alt=""
                  />
                </Link>
                <Link to={"https://www.prada.com/"}>
                  <img
                    className="2xl:w-44 xl:w-40 lg:w-36 md:w-32 sm:w-24 w-24 hover:scale-105 transition-transform cursor-pointer"
                    src={Vector2}
                    alt=""
                  />
                </Link>
                <Link to={"https://www.myntra.com/"}>
                  <img
                    className="2xl:w-44 xl:w-40 lg:w-36 md:w-32 sm:w-24 w-24 hover:scale-105 transition-transform cursor-pointer"
                    src={Vector3}
                    alt=""
                  />
                </Link>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </>
  );
};
export default Commoncompo;
