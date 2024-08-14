import Home from "./pages/Home";
import Category from "./pages/Category";
import Card from "./pages/Card";
import Product from "./pages/Product";

import LoginForm from "./pages/LoginForm";
import ScrollToTop from "../utils/ScrollToTop";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/card" element={<Card />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="/product" element={<Product />} />
    </Route>,
  ),
);

export default route;
