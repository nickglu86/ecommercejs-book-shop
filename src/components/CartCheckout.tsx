import React, { FC } from "react";
import { useShopContext } from "../context/ShopContext";
import ItemsCounter from "./ItemsCounter";
import {
  CartModalHeader,
  CartModalFooter,
  ArrowImg,
  CartModalHeaderTitle,
  CartCheckoutListContainer,
  CartCheckoutListItem,
  CartTotalContainer,
  CartCheckoutItemImage,
  CartProductsInfo,
  CartProductPrice,
  CartProductRemoveItem,
  CheckOutButton,
} from "../styles/CartCheckoutStyles";
import { Link } from "react-router-dom";

const CartCheckout = () => {
  const { commerce, cart, updateCart } = useShopContext();

  // console.log( commerce.cart.cartId)

  const updateItemsAmount = (itemId: string, quantity: number) => {
    commerce.cart
      .update(itemId, { quantity: quantity })
      .then((response) => console.log(response));
  };

  const CartItems = () => {
    return (
      <CartCheckoutListContainer>
        {cart?.line_items.map((item, index) => (
          <CartCheckoutListItem key={index}>
            <CartCheckoutItemImage>
              <img src={item.image.url} alt={item.name} />
            </CartCheckoutItemImage>
            <CartProductsInfo style={{ flexDirection: "row" }}>
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
          </CartCheckoutListItem>
        ))}
      </CartCheckoutListContainer>
    );
  };

  const Total: FC = () => {
    return (
      <div
        style={{
          display: "flex",
          width: "800px",
          justifyContent: "space-between",
          margin: "0 auto",
          paddingTop: "50px",
        }}
      >
        <div>
          <div>Total Items: {cart?.total_items}</div>
          <div>Total Price: {cart?.subtotal.formatted_with_symbol}</div>
        </div>
        <div>
          <CheckOutButton
            onClick={() =>
              commerce.cart.empty().then((response) => updateCart())
            }
          >
            Clean Cart
          </CheckOutButton>
          <Link to="/checkout">
            <CheckOutButton>CheckOut</CheckOutButton>
          </Link>
        </div>
      </div>
    );
  };
  return (
    <section>
      <h2>My Cart:</h2>
      <CartItems />
      <Total />
    </section>
  );
};

export default CartCheckout;
