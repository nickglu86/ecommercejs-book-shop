import React, { FC, useEffect, useState } from "react";
import ProductsGallery from "../components/ProductsGallery";

const Shop: FC = () => {
  return (
    <main>
      <section>
        <h2>Shop</h2>
        <ProductsGallery />
      </section>
    </main>
  );
};

export default Shop;
