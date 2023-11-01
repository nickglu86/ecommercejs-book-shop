import React, { FC } from "react";
import "@splidejs/react-splide/css";
import { useShopContext } from "../context/ShopContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { IProduct } from "../interfaces";
import { RecommendedSection, SectionTitle } from "../styles/RecommendedStyles";
import { Link } from "react-router-dom";
import { getURIBookTitle } from "../utils";

const Recommended = () => {
  const { commerce, products, cart, updateCart } = useShopContext();

  const GetProduct: FC<{ product: IProduct }> = ({ product }) => (
    <SplideSlide key={product.id} style={{ width: "600px!important" }}>
      <Link to={`/book/${getURIBookTitle(product.name)}`}   state={{ product }}>
        <img
          src={product.image.url}
          style={{
            padding: "0 0 0",
            margin: "4px 0 20px",
            transform: "skewY(3deg)",
            border: "1px solid black",
            borderRight: "10px solid gray",
            borderTop: "5px solid gray",
            width: "80%",
          }}
          width={250}
          height={340}
          alt={product.name}
        />
      </Link>
    </SplideSlide>
  );

  return (
    <RecommendedSection>
      <SectionTitle>The Masterpieces</SectionTitle>
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          perPage: 6,
          width: "1200",
          // autoplay: true,
          // interval: 1000
        }}
      >
        {products &&
          products.map((product, index) => (
            <GetProduct product={product as IProduct} key={index} />
          ))}
      </Splide>
    </RecommendedSection>
  );
};

export default Recommended;
