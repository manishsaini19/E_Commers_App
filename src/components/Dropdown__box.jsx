import React, { useState } from "react";
import { PiGreaterThanBold } from "react-icons/pi";

function Dropdown__box({ selected, setSelected }) {
  const [Dropdown, setDropdown] = useState(false);
  const options = ["sdcvdv4365463", "hiudgfbsd", "hjbs", "544856", "4cvsdv"];
  return (
    <>
      <div className="w-full h-auto relative text-gray-500 cursor-pointer hover:bg-gray-100 ">
        <div
          onClick={(e) => setDropdown(!Dropdown)}
          className="flex justify-between py-3   px-10  items-center"
        >
          <h1 className="text-2xl">{selected}</h1>
          <PiGreaterThanBold />
        </div>
        {Dropdown && (
          <div className="w-full  absolute z-auto  top-14 left-0 bg-white">
            {options.map(option => {
              <h1
                onClick={(e) => {
                  setSelected(option);
                  setDropdown(false);
                }}
                className="text-2xl px-10 py-3 text-gray-500 cursor-pointer hover:bg-gray-100 "
              >
                {option}
              </h1>;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Dropdown__box;
