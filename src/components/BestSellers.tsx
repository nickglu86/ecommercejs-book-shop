import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";
import { getURIBookTitle } from "../utils";
import { Product, Category } from "../interfaces";
import { BestSellersSection, BestSellersGallery, SectionTitle, GalleryItem, PriceContainer, BuyButton } from "../styles/BestSellersStyles";
const BestSellers = () => {
  
  const { products } = useShopContext();

  const GetProduct: FC<{ product: Product }> = ({ product }) => (
    <GalleryItem key={product.id}>
      <Link to={`/book/${getURIBookTitle(product.name)}`}
      state={{ product }}
      >
        <div>
          <img
            src={product.image.url}
            width={250}
            height={380}
            alt={product.name}
          />
          <h4>{product.name}</h4>
        </div>
      </Link>
      <PriceContainer>
            <span className="before-discount">
              ${(parseInt(product.price.formatted) * 1.15).toFixed(2)}{" "}
            </span>
            <span>{product.price.formatted_with_symbol} </span>
          </PriceContainer>
      <BuyButton>Buy</BuyButton>
    </GalleryItem>
  );

  const getBestSellers = () => {
    return products
      .filter((product: any) =>
        product?.categories.some(
          (category: Category) => category.name === "BestSellers"
        )
      )
      .map((product, index) => (
        <GetProduct product={product as Product} key={index} />
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
