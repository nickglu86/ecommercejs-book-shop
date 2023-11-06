import React, { FC, useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import { useShopContext } from "../context/ShopContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { IProduct, IAtrribute, IAtrributes } from "../interfaces";
import styled from "styled-components";
import { findProductAttribute } from "../utils";
import { SplideSlideStyles, SlideCardStyles, SlideImgStyles, SlideInfo } from "../styles/SliderStyles";

const SliderCard: FC<{ product: IProduct }> = ({ product }) => {
  const { commerce, products, cart, updateCart } = useShopContext();
  const [productAuthor, setProductAuthor] = useState<string>("");
  const [productRecommendation, setProductRecommendation] =
    useState<string>("");
  const [productRecommendationAuthor, setProductRecommendationAuthor] =
    useState<string>("");

  useEffect(() => {
    commerce.products
      .retrieve(product.permalink, { type: "permalink" })
      .then((product) => {
        console.log(product.attributes);
        const attributes = product.attributes;
        findProductAttribute(
          attributes as IAtrributes,
          "Author",
          setProductAuthor
        );
        findProductAttribute(
          attributes as IAtrributes,
          "Recommendation",
          setProductRecommendation
        );
        findProductAttribute(
          attributes as IAtrributes,
          "RecommendationAuthor",
          setProductRecommendationAuthor
        );
      });
  }, []);



  return (
    <SplideSlide key={product.id} style={SplideSlideStyles as Object}>
      <SlideCardStyles>
        <SlideInfo>
          <h2>{product.name}</h2>
          <h4>{productAuthor}</h4>
          <p>{productRecommendation}</p>
          <div>{productRecommendationAuthor}</div>
        </SlideInfo>
        <SlideImgStyles>
          <img src={product.image.url} alt={product.name} />
        </SlideImgStyles>
      </SlideCardStyles>
    </SplideSlide>
  );
};

export default SliderCard;
