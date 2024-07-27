import React, { useState } from 'react'

function FiveBox() {
  const [FiveUp, setFiveUp] = useState(false);
  const Five = [
    { name: "Sm-Size-Jeans", link: "/" },
    { name: "Md-Size-Jeans", link: "/" },
    { name: "Lg-Size-Jeans", link: "/" },
    { name: "Xl-Size-Jeans", link: "/" },
    { name: "2xl-Size-Jeans", link: "/" },
  ];
  return (
    <>
      <div
            onClick={() => setFiveUp(!FiveUp)}
            className="w-full h-auto relative z-[40] bg-white"
          >
            <div className="w-full h-auto text-gray-500 bg-white cursor-pointer hover:bg-gray-100  py-3 px-10  relative z-10">
              <h1 className="text-2xl  ">Jeans</h1>
              <div className="absolute top-3 right-10 text-2xl">
                <ion-icon
                  name={
                    FiveUp ? "chevron-down-outline" : "chevron-forward-outline"
                  }
                ></ion-icon>
              </div>
            </div>
            <div
              className={`w-full h-auto  cursor-pointer absolute -z-1 bg-white duration-500 ${
                FiveUp ? "top-[52px]" : "top-[-300px]"
              } `}
            >
              {Five.map((Link) => (
                <li
                  key={Link.name}
                  className="list-none  text-xl text-gray-500 hover:bg-gray-100  py-3 px-10 "
                >
                  <a href={Five.Link}>{Link.name}</a>
                </li>
              ))}
            </div>
          </div>
          </>
  )
}

export default FiveBox