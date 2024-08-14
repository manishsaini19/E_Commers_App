import Home from "./pages/Home";
import Category from "./pages/Category";
import Card from "./pages/Card";
import {
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Product from "./pages/Product";
import LoginForm from "./pages/LoginForm";
import ScrollToTop from "../utils/ScrollToTop";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="card" element={<Card />} />
    </Route>,
  ),
);

export default route;
