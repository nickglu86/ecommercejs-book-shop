import React, { FC, useState } from "react";
import { useShopContext } from "../context/ShopContext";

interface ItemsCounterProps {
  itemId: string; // Update the type according to your use case
  itemQuantity: number;
}

const ItemsCounter: FC<ItemsCounterProps> = (props) => {
 
  const { commerce, updateCart } = useShopContext();
  const { itemId, itemQuantity } = props;

  const [quantity, setQuantity] = useState(itemQuantity);

  const updateItemsAmount = (num:number) => {
      const newQuantity = quantity + num;
      commerce.cart
      .update(itemId, { quantity: newQuantity })
      .then((response) => console.log(response));
      setQuantity(newQuantity);
      updateCart();

  };

  return (
    <div>
      <button
        onClick={() => updateItemsAmount(+1)}
      >
        +
      </button>
      <input
        type="number"
        min={0}
        max={5}
        value={quantity}
        style={{width: '60px'}}
      ></input>
      <button
        onClick={() => updateItemsAmount(-1)}
      >
        -
      </button>
    </div>
  );
};

export default ItemsCounter;
