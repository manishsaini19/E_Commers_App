import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
const HAPPYCARD = [
  {
    name: "Sarah M.",
    title:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    title:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    title:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: "Mooen",
    title:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Mooen",
    title:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
];
function HAPPY() {
  return (
    <>
      <div className="w-full h-auto">
        <div className="w-full h-auto">
          <div className=" w-full h-auto 2xl:px-32 xl:px-20 lg:px-16 md:px-10 sm:px-8 px-5  p-5 mb-5 flex justify-between items-center ">
            <h1 className="text-5xl font-bold">OUR HAPPY CUSTOMERS</h1>
            <div className="flex gap-3">
              <FaArrowLeft className="cursor-pointer text-xl" />
              <FaArrowRight className="cursor-pointer text-xl" />
            </div>
          </div>
          <div className=" flex gap-7 justify-between ">
            {HAPPYCARD.map((item) => (
              <div
                className="w-[400px] h-[240px]  py-8 px-4 border-2 rounded-3xl hover:bg-gray-100 cursor-pointer"
                key={item.title}
              >
                <div className="flex  gap-2 items-center mb-3 text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h1 className="flex items-center mb-2">
                  {item.name}
                  <FaCheck className="ml-2 bg-green-600 w-6 h-6 p-1 text-white rounded-full" />
                </h1>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HAPPY;
