import React from "react";
import { Outlet } from "react-router-dom";

const Pages = () => {
  return (
    <div>
      <h1>This is the main page or parent page!</h1>
      <Outlet />
    </div>
  );
};

export default Pages;
