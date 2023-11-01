import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { IProduct, IAtrributes} from "../interfaces";
import { PriceContainer, BuyButton } from "../styles/BestSellersStyles";
import { useShopContext } from "../context/ShopContext";
import { findProductAttribute } from "../utils";

const Book: FC = () => {
  const BookSection = styled.section`
    width:800px;
    margin: 60px auto 0;
    textalign: center;

  `;

  const BookInfo = styled.section`
    text-align: left;
    display: grid;
    grid-template-columns: 1fr 1fr;
    h2 {
      text-align: left;
    }
  `;

  const BookImage = styled.div`
    margin: 0 auto 0;
  `;

  const { commerce, cart, updateCart } = useShopContext();
  const location = useLocation();
  const product: IProduct = location.state.product;
  const theObj = { __html: product?.description };

  const [productAuthor, setProductAuthor] = useState<string>("");

  useEffect(() => {
    commerce.products
      .retrieve(product.permalink, { type: "permalink" })
      .then((product) =>{
        findProductAttribute(product.attributes as IAtrributes, "Author", setProductAuthor);
      }
      
      );
  }, []);
  return (
    <main>
      <BookSection>
        <BookInfo>
          <div>
            <h2>{product.name}</h2>
            <p>{productAuthor}</p>
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
            <div style={{ padding: "30px 0 15px" }}>
              <BuyButton>Buy Now</BuyButton>
            </div>
            <div>
              <BuyButton>Add to Cart</BuyButton>
            </div>
          </div>
          <BookImage>
        <img
          src={product?.image.url}
          width={190}
          height={280}
          alt={product?.name}
         style={{ padding: "30px 0 35px"}}
        />
        </BookImage>
        </BookInfo>

        <div style={{paddingRight: '150px'}} dangerouslySetInnerHTML={theObj} />
      </BookSection>
    </main>
  );
};

export default Book;
