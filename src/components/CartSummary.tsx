import React, { FC } from "react";
import { useShopContext } from "../context/ShopContext";
import ItemsCounter from "./ItemsCounter";

const CartSummary: FC = () => {
  const { commerce, cart, updateCart } = useShopContext();

  const updateItemsAmount = ( itemId: string , quantity: number) => {
      commerce.cart.update(itemId, { quantity: quantity }).then(response => console.log(response));
  };

  const CartItems: FC = () => {
    return (
      <div>
        {cart?.line_items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              width: "80%",
              justifyContent: "space-between",
              margin: "0 auto",
            }}
          >
            <img src={item.image.url} width={80} alt={item.name} />
            <div>
              <div>ID : {item.id}</div>
              <div>Name : {item.name}</div>

              <div>Price :{item.price.formatted_with_symbol} </div>
            </div>
            <ItemsCounter itemId={item.id} itemQuantity={item.quantity}/>
            <div>
                  Total: {item.line_total.formatted_with_symbol}
            </div>
            <div>
              <button
                onClick={() =>
                  commerce.cart.remove(item.id).then((response) => updateCart())
                }
              >
                Remove from cart
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const Total: FC = () => {
    return (
      <div
        style={{
          display: "flex",
          width: "80%",
          justifyContent: "space-between",
          margin: "0 auto",
          paddingTop: "50px",
        }}
      >
        <div>
          <div>Total Items: {cart?.total_items}</div>
          <div>Total Price: {cart?.subtotal.formatted_with_symbol}</div>
        </div>
        <button
          onClick={() => commerce.cart.empty().then((response) => updateCart())}
        >
          Clean Cart
        </button>
      </div>
    );
  };
  return (
    <div>
      <h2>Cart Summary</h2>
      <CartItems />
      <Total />
    </div>
  );
};

export default CartSummary;
