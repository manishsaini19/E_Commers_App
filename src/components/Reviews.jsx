import React, { useState } from "react";
import Vecter_4 from "../assets/E__commimags/Vector4.png";
import Samantha from "./Samantha";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
function Reviews({product}) {
  const [CounterState, setCounterSate] = useState(false);
  return (
    <>
      <div className="lg:w-10/12 w-11/12  m-auto h-auto">
      <ScrollTrigger onEnter={() => setCounterSate(true)} onExit={() => setCounterSate(false)}>
        <div className="sm:flex sm:justify-between text-center items-center ">
          <div className="">
            <h1 className="md:text-3xl font-bold items-center text-2xl">
              All Reviews
              <span className="md:text-lg text-sm text-gray-400 font-normal pl-2">
              ({ CounterState && <CountUp start={0} end={451} duration={2.75}></CountUp>})
              </span>
            </h1>
          </div>
          <div className="flex gap-5 justify-center mt-5 md:mt-0">
            <Link to={"/Card"}>
              <img
                src={Vecter_4}
                className="md:w-12 w-10 bg-gray-200 object-cover p-1 rounded-full cursor-pointer"
                alt=""
              />
            </Link>
            <select className="outline-none bg-gray-200 hidden md:block px-5 py-2 rounded-3xl">
              <option value="">Latest</option>
              <option value="">Samantha D.</option>
              <option value="">Alex M.</option>
              <option value="">Ethan R.</option>
              <option value="">Olivia P.</option>
              <option value="">Liam K.</option>
              <option value="">Ava H.</option>
            </select>
            <button className="  py-2 bg-gray-200 md:px-5 px-3 text-gray-700 rounded-3xl hover:bg-black hover:text-white transition outline-none">
              Write a Review
            </button>
          </div>
        </div>
          </ScrollTrigger>
        <div className="w-full md:flex justify-between gap-5 my-5">
          <Samantha
            usename="Samantha D."
            title="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
            date="Posted on August 14, 2023"
          />
          <Samantha
            usename="Alex M."
            title="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
            date="Posted on August 15, 2023"
          />
        </div>
        <div className="w-full  md:flex justify-between gap-5 my-5">
          <Samantha
            usename="Ethan R."
            title="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
            date="Posted on August 16, 2023"
          />
          <Samantha
            usename="Olivia P."
            title="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
            date="Posted on August 17, 2023"
          />
        </div>
        <div className="w-full  md:flex justify-between gap-5 my-5">
          <Samantha
            usename="Liam K."
            title="This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
            date="Posted on August 18, 2023"
          />
          <Samantha
            usename="Ava H."
            title="I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
            date="Posted on August 19, 2023"
          />
        </div>
        <div className="text-center">
          <button className="sm:w-72 w-full py-4 font-bold text-gray-800 sm:py-4 rounded-full border-2 text-center mt-10 hover:bg-black hover:text-white transition ">
            Load More Reviews
          </button>
        </div>
      </div>
    </>
  );
}

export default Reviews;
