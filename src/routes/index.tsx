import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Shop from "../pages/shop";
import Layout from "../layouts";
import ProductsProvider from "../context/ProductsContext";

const AppRoutes: FC = () => {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </ProductsProvider>
  );
};

export default AppRoutes;
