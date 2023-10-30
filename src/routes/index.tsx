import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Shop from "../pages/shop";
import Layout from "../layouts";
import ShopProvider from "../context/ShopContext";
import Cart from "../pages/cart";

const AppRoutes: FC = () => {
  return (
    <ShopProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
       
        </Route>
      </Routes>
    </ShopProvider>
  );
};

export default AppRoutes;
