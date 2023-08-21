import React, { FC } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

// const Home = React.lazy(() => import("../pages/home"));
// const About = React.lazy(() => import("../pages/about"));
// const Contact = React.lazy(() => import("../pages/contact"));
// const Shop = React.lazy(() => import("../pages/shop"));

import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Shop from "../pages/shop";
import Layout from "../layouts";

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
