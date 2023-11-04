import React, { ReactNode } from "react";
import CartSummary from "./CartSummary";
import styled from "styled-components";
import { useShopContext } from "../context/ShopContext";
import { BuyButton } from "../styles/BestSellersStyles";
import ItemsCounter from "./ItemsCounter";
import ArrowSVG from "../assets/images/arrow.svg";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function CartModal({ children, isOpen, toggle }: ModalType) {
  const CartModalOverlay = styled.div`
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: right;
    align-items: center;
  `;

  const CartModalBox = styled.div`
    display: block;
    position: relative;
    background: white;
    width: 400px;
    height: 100%;
    border-radius: 1rem;
  `;

  const CartModalHeader = styled.div`
    width: 100%;
    height: 80px;
    background-color: rgba(10, 46, 90, 1);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const CartModalFooter = styled.div`
    position: absolute;
    width: 100%;
    height: 80px;
    text-align: center;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(10, 46, 90);
  `;

  const ArrowImg = styled.img`
    width: 20px;
    height: 20px;
    filter: invert(100);
    padding: 30px;
    cursor: pointer;
    transform: rotate(180deg);
  `;

  const CartModalHeaderTitle = styled.h4`
    width: 100%;
    text-align: center;
    padding-right: 50px;
  `;
  const { commerce, cart, updateCart } = useShopContext();

  const CartProductsList = () => {
    return (
      <div
        style={{
          padding: "35px 18px",
        }}
      >
        {cart?.line_items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              // width: "80%",
              padding: "10px 0",
              justifyContent: "left",
              margin: "0 auto",
            }}
          >
            <div style={{ width: "60px", margin: "0 auto" }}>
              <img src={item.image.url} width={60} alt={item.name} />
            </div>
            <div style={{ width: "260px" }}>
              <div>{item.name}</div>
              <div>{item.price.formatted_with_symbol} </div>
              <ItemsCounter itemId={item.id} itemQuantity={item.quantity} />
            </div>
            <div style={{ display: "none" }}>
              <button
                onClick={() =>
                  commerce.cart.remove(item.id).then((response) => updateCart())
                }
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const CartTotal = () => {
    return (
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          margin: "0 auto",
          padding: "30px 50px",
        }}
      >
        <div>
          <div>Total Items: {cart?.total_items}</div>
          <div>Total Price: {cart?.subtotal.formatted_with_symbol}</div>
        </div>
        {/* <button
          onClick={() =>
            commerce.cart.empty().then((response) => updateCart())
          }
        >
          Clean Cart
        </button> */}
      </div>
    );
  };

  return (
    <>
      {isOpen && (
        <CartModalOverlay onClick={toggle}>
          <CartModalBox>
            <CartModalHeader>
              <ArrowImg src={ArrowSVG} onClick={toggle} />
              <CartModalHeaderTitle>Cart Summary</CartModalHeaderTitle>
            </CartModalHeader>
            {/* {children} */}
            <CartProductsList />
            <CartTotal />

            <CartModalFooter>
              <BuyButton>Checkout</BuyButton>
            </CartModalFooter>
          </CartModalBox>
        </CartModalOverlay>
      )}
    </>
  );
}
