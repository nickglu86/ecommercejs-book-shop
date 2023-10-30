import React, { FC, useEffect, useState } from "react";
import ProductsGallery from "../components/ProductsGallery";

const Shop: FC = () => {
  return (
    <main>
      <div>
        <h2>Shop Page</h2>
        <ProductsGallery />
      </div>
    </main>
  );
};

export default Shop;
