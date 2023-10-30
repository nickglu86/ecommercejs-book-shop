import React, { FC, useState } from "react";
import { useShopContext } from "../context/ShopContext";

interface ItemsCounterProps {
  itemId: string; 
  itemQuantity: number;
}

const ItemsCounter: FC<ItemsCounterProps> = (props) => {
 
  const { commerce, updateCart } = useShopContext();
  const { itemId, itemQuantity } = props;

  const [quantity, setQuantity] = useState(itemQuantity);

  const updateItemsAmount = (num:number) => {
     
      const newQuantity : number = quantity + num;
       if( newQuantity > -1 && newQuantity < 6) {
        commerce.cart
        .update(itemId, { quantity: newQuantity })
        .then((response) => console.log(response));
        setQuantity(newQuantity);
        updateCart();
       }else  if(newQuantity > 5){
        // setQuantity(5);
          alert('You can\'t order more than 5 items of the same Book');
       } else if(newQuantity < 0){
         setQuantity(0);
       }
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
        onChange={()=>{}}
        style={{width: '20px', textAlign: 'center'}}
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
