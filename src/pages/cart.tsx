import React, { FC } from 'react';
import { useShopContext } from '../context/ShopContext';


const Cart: FC = () => {
     const { commerce, cart,   updateCart} = useShopContext();
     
   
 return(
      <section>
            <h2>Cart</h2>
            <div>
               {
                    cart?.line_items.map(
                         (item, index) => (
                         <div key={index}>
                              <div>ID : {item.id}</div>
                              <div>Name : {item.name}</div>
                              <div>Price :{item.price.raw} </div>
                              <div>
                                   <button onClick={() => commerce.cart.remove(item.id).then((response) =>   updateCart())}>Remove from cart</button>
                              </div>
                         </div>
                         )
                    )
               }
            </div>
            <div>Total Items: {cart?.total_items}</div>
            <div>Total Price: {cart?.subtotal.formatted_with_symbol}</div> 
            <button onClick={() => commerce.cart.empty().then((response) =>   updateCart())}>Clean Cart</button>
        </section>
 )
}

export default Cart;