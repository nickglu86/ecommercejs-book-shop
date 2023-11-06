import React, { FC } from "react";
import "@splidejs/react-splide/css";
import { useShopContext } from "../context/ShopContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { IProduct, ICategory } from "../interfaces";
import { CardSliderSection, SectionTitle } from "../styles/CardsSliderStyles";
import styled from "styled-components";
import SliderCard from "./SliderCard";

const Slider = () => {
  const { products } = useShopContext();

  return (
    <CardSliderSection>
      {/* <SectionTitle>Card Slider</SectionTitle> */}
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
            // <GetProduct product={product as IProduct} key={index} />
            <SliderCard product={product as IProduct} key={index} />
          ))}
      </Splide>
    </CardSliderSection>
  );
};

export default Slider;
