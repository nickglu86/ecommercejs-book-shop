import React, { ReactNode, useEffect } from "react";
import { useShopContext } from "../context/ShopContext";
import {
  CartModalOverlay,
  CartModalMask,
  CartModalBox,
  CartModalHeader,
  CartModalFooter,
  ArrowImg,
  CartModalHeaderTitle,
  CartProductsListContainer,
  CartProductsListItem,
  CartTotalContainer,
  CartProductsItemImage,
  CartProductsInfo,
  CartProductPrice,
  CartProductRemoveItem,
  CheckOutButton,
} from "../styles/CartModalStyles";
import ItemsCounter from "./ItemsCounter";
import ArrowSVG from "../assets/images/arrow.svg";
import { Link } from "react-router-dom";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function CartModal({ children, isOpen, toggle }: ModalType) {
  const { commerce, cart, updateCart } = useShopContext();

  useEffect(() => {}, [cart]);

  const CartProductsList = () => {
    return (
      <CartProductsListContainer>
        {cart?.line_items.length ? (
          cart?.line_items.map((item, index) => (
            <CartProductsListItem key={index}>
              <CartProductsItemImage>
                <img src={item.image.url} alt={item.name} />
              </CartProductsItemImage>
              <CartProductsInfo>
                <div>{item.name}</div>
                <CartProductPrice>
                  {item.price.formatted_with_symbol}
                </CartProductPrice>
                <ItemsCounter itemId={item.id} itemQuantity={item.quantity} />
              </CartProductsInfo>
              <CartProductRemoveItem
                onClick={() =>
                  commerce.cart.remove(item.id).then((response) => updateCart())
                }
              >
                x
              </CartProductRemoveItem>
            </CartProductsListItem>
          ))
        ) : (
          <p> The Cart is Empty</p>
        )}
      </CartProductsListContainer>
    );
  };

  const CartTotal = () => {
    return (
      <CartTotalContainer>
        <div>Total Items: {cart?.total_items}</div>
        <div>
          Total Amount:
          <CartProductPrice>
            {cart?.subtotal.formatted_with_symbol}
          </CartProductPrice>
        </div>
      </CartTotalContainer>
    );
  };

  return (
    <>
      {isOpen && (
        <CartModalOverlay>
          <CartModalMask onClick={toggle} />
          <CartModalBox>
            <CartModalHeader>
              <ArrowImg src={ArrowSVG} onClick={toggle} />
              <CartModalHeaderTitle>Cart Summary</CartModalHeaderTitle>
            </CartModalHeader>
            {/* {children} */}
            <CartProductsList />
            <CartTotal />
            <CartModalFooter>
              <Link to="/cart">
                <CheckOutButton onClick={toggle}>Checkout</CheckOutButton>
              </Link>
            </CartModalFooter>
          </CartModalBox>
        </CartModalOverlay>
      )}
    </>
  );
}
