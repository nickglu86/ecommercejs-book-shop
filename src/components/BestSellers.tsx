import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";
import { getURIBookTitle } from "../utils";
import { IProduct, ICategory } from "../interfaces";
import { BestSellersSection, BestSellersGallery, SectionTitle, GalleryItem, PriceContainer, BuyButton } from "../styles/BestSellersStyles";
import Product from "./Product";

const BestSellers = () => {
  
  const { products } = useShopContext();

  const getBestSellers = () => {
    return products
      .filter((product: any) =>
        product?.categories.some(
          (category: ICategory) => category.name === "BestSellers"
        )
      )
      .map((product, index) => (
        <Product product={product as IProduct} key={index} discount/>
      ));
  };

  return (
    <BestSellersSection>
      <SectionTitle>Bestselling Discount Books</SectionTitle>
      <BestSellersGallery>{products && getBestSellers()}</BestSellersGallery>
    </BestSellersSection>
  );
};
export default BestSellers;
