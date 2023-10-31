import React, { FC } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { IProduct } from "../interfaces";
import { PriceContainer, BuyButton } from "../styles/BestSellersStyles";

const Book: FC = () => {
  const BookSection = styled.section`
    width: 800px;
    margin: 60px auto 0;
    textalign: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
  `;

  const BookInfo = styled.section`
    width: 500px;
    text-align: left;
    h2 {
      text-align: left;
    }
  `;
  const location = useLocation();
  const product: IProduct = location.state.product;

  return (
    <main>
      <BookSection>
        <BookInfo>
          <h2>{product.name}</h2>
          <PriceContainer>
          <span className="before-discount">
              ${(parseInt(product.price.formatted) * 1.15).toFixed(2)}{" "}
            </span>
            <span>{product.price.formatted_with_symbol} </span>
          </PriceContainer>
          <div>
            <button>+</button>

            <input
              type="number"
              min={0}
              max={5}
              value={1}
              onChange={() => {}}
              style={{ width: "20px", textAlign: "center" }}
            ></input>
            <button>-</button>
          </div>
          <div   style={{ padding: "30px 0 15px"}}>
          <BuyButton>Buy Now</BuyButton>
          </div>
          <div>
          <BuyButton>Add to Cart</BuyButton>
            </div>


        </BookInfo>

        <img
          src={product?.image.url}
          width={190}
          height={280}
          alt={product?.name}
         style={{ padding: "30px 0 35px"}}
        />
        <div>
          <p>{product?.description}</p>
        </div>
      </BookSection>
    </main>
  );
};

export default Book;
