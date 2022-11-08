import { Routes, Route } from "react-router-dom";
import Catalog from "../pages/Catalog";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import Search from "../pages/Search";


const RoutesContainer = ({}) => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalog" element={<Catalog />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/search" element={<Search />} />
  </Routes>
)

export default RoutesContainer;