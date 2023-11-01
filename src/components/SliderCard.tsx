import React, { FC, useEffect, useState } from "react";
import "@splidejs/react-splide/css";
import { useShopContext } from "../context/ShopContext";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { IProduct, IAtrribute, IAtrributes} from "../interfaces";
import styled from "styled-components";



const SliderCard: FC<{ product: IProduct }> = ({ product}) => { 
 
  const { commerce, products, cart, updateCart } = useShopContext();
  const [productAuthor, setProductAuthor] = useState<string>("");
  const [productRecommendation, setProductRecommendation] = useState<string>("");

  const find = (arr: IAtrributes) => {
     return  arr.find((attr  ) => attr.name === "Recommendation");
  }
  useEffect(() => {
    commerce.products
      .retrieve(product.permalink, { type: "permalink" })
      .then((product) =>{
            console.log(product.attributes);
            setProductAuthor(product.attributes[0].value as string);
            // setProductRecommendation(find(product.attributes as IAtrributes));
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
    justifyContent: center;
    // border: 1px solid black;
    border-radius: 20px;
  `;
  const SlideImgStyles = styled.div`
    img {
        margin-top: 20px;
        width: 280px;
        transform: skewY(7deg);
        height: 400px;
        border-right: 10px solid gray;
        box-shadow: 6px 6px 10px 7px #b6afaf;
    }
  `;

  const SlideInfo = styled.div`
    width: 500px;
    height: 480px;
    overflow: hidden;    
text-align: left;

    h2{
      color: #0A2E5A;
      font-size: 28px;
      text-align: left;
      padding-right: 60px;
    }
    h4{
      color: #black;
      font-size: 24px;
      font-weight:500;
    }
  `;

    

  return (
      <SplideSlide key={product.id} style={SplideSlideStyles as Object}>
      <SlideCardStyles>
        <SlideInfo>
          <h2>{product.name}</h2>
          <h4>{productAuthor}</h4>
          <div>{productRecommendation}</div>
        </SlideInfo>
        <SlideImgStyles>
          <img src={product.image.url} alt={product.name} />
        </SlideImgStyles>
      </SlideCardStyles>
    </SplideSlide>
  );
};

export default SliderCard;
