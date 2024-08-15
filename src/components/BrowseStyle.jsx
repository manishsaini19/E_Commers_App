import React from "react";
import image__11 from "../assets/E__commimags/image11.png";
import image__13 from "../assets/E__commimags/image13.png";
import image__12 from "../assets/E__commimags/image12.png";
import image__14 from "../assets/E__commimags/image14.png";
import { Link } from "react-router-dom";

const list = [
  {
    name: "casual",
    src: image__11,
  },
  {
    name: "formal",
    src: image__12,
  },
  {
    name: "party",
    src: image__13,
  },
  {
    name: "gym",
    src: image__14,
  },
];

function BrowseStyle({ id }) {
  return (
    <>
      <div className="m-5 box-border p-5 mb-20 flex flex-col overflow-hidden justify-center items-center bg-gray-100 rounded-[30px]">
        <h1 className="text-center  font-bold uppercase mb-16 text-4xl">
          browse by dress style
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10  w-full ">
          {list.map((item, idx) => (
            <Link
              key={idx}
              to={`/category/${idx + 4}`}
              className="w-full h-96  rounded-3xl relative bg-white hover:bg-slate-200 transition-colors bg-no-repeat bg-contain bg-center"
              style={{
                backgroundImage: `url('${item.src}')`,
              }}
            >
              <h1 className="absolute top-7 left-10 text-2xl md:text-4xl font-bold uppercase">
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default BrowseStyle;
