import React, { FC, useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import { useShopContext } from "../context/ShopContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { IProduct, IAtrribute, IAtrributes} from "../interfaces";
import styled from "styled-components";
import { findProductAttribute } from "../utils";


const SliderCard: FC<{ product: IProduct }> = ({ product}) => { 
 
  const { commerce, products, cart, updateCart } = useShopContext();
  const [productAuthor, setProductAuthor] = useState<string>("");
  const [productRecommendation, setProductRecommendation] = useState<string>("");
  const [productRecommendationAuthor, setProductRecommendationAuthor] = useState<string>("");


  useEffect(() => {
    commerce.products
      .retrieve(product.permalink, { type: "permalink" })
      .then((product) =>{
            console.log(product.attributes);
            const attributes = product.attributes;
            findProductAttribute(attributes as IAtrributes, "Author", setProductAuthor);
            findProductAttribute(attributes as IAtrributes, "Recommendation", setProductRecommendation);
            findProductAttribute(attributes as IAtrributes, "RecommendationAuthor", setProductRecommendationAuthor);
     }

      );
  }, []);
  
  const SplideSlideStyles = {
    textAlign: "center",
    width: '500px!important',
    display: 'flex',
    justifyContent: 'center'
  };

  const SlideCardStyles = styled.div`
    display: flex;
    justify-content: center;
    // border: 1px solid black;
    border-radius: 20px;
  `;
  const SlideImgStyles = styled.div`
    img {
        margin-top: 20px;
        width: 260px;
        transform: skewY(7deg);
        height: 360px;
        border-right: 10px solid gray;
        box-shadow: 6px 6px 10px 7px #b6afaf;
    }
  `;

  const SlideInfo = styled.div`
    width: 500px;
     height: 450px;
    overflow: hidden;    
    text-align: left;
    padding-right: 40px;
    // margin-top: 24px;
    h2{
      color: #0A2E5A;
      font-size: 32px;
      text-align: left; 
 
    }
    h4{
      color: #black;
      font-size: 27px;
      font-weight:500;
      margin: -5px 0 10px;
    }
    p{
      font-size:22px;
      line-height: 29px;
      padding-right: 40px;
      font-style: italic;
    }
  `;

    

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
