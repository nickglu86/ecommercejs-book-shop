import React, { FC } from "react";
import "@splidejs/react-splide/css";
import { useShopContext } from "../context/ShopContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { IProduct, ICategory } from "../interfaces";
import { CardSliderSection, SectionTitle } from "../styles/CardsSliderStyles";

const CardsSlider = () => {
  const { commerce, products, cart, updateCart } = useShopContext();

  const GetProduct: FC<{ product: IProduct }> = ({ product }) => (
    <SplideSlide
      key={product.id}
      style={{ textAlign: "center", display: "flex", justifyContent: "center" }}
    >
      <img
        src={product.image.url}
        width={250}
        height={340}
        alt={product.name}
      />
      <div style={{ width: "400px", height: "340px", overflow: "hidden" }}>
        <h4>{product.name}</h4>
        <p>{product.description}</p>
      </div>
    </SplideSlide>
  );

  return (
    <CardSliderSection>
      <SectionTitle>Card Slider</SectionTitle>
      <Splide
        aria-label="My Favorite Images"
        options={{
          type: "slide",
          perPage: 1,
          width: "600",
          // autoplay: true,
          // interval: 1000
        }}
      >
        {products &&
          products.map((product, index) => (
            <GetProduct product={product as IProduct} key={index} />
          ))}
      </Splide>
    </CardSliderSection>
  );
};

export default CardsSlider;
