import React, { createContext, useState, useEffect, ReactNode } from "react";
import Commerce from '@chec/commerce.js';
import { ShopContextType, ShopContextProviderProps, Products, Cart, CartResponse } from "../interfaces";

const ecommerceJsPublicKey = process.env.REACT_APP_COMMERCEJS_PUBLICKEY as string;
const commerce = new Commerce(ecommerceJsPublicKey);
const ShopContext = createContext<ShopContextType | null>(null);

export const useShopContext = () => {
  const context = React.useContext(ShopContext);
  if (context === null) {
    throw new Error("useShopContext must be used within a ShopProvider");
  }
  return context;
};

export default function ShopProvider({ children }: ShopContextProviderProps) {
  const [products, setProducts] = useState<Products>([]);
  const [cart, setCart] = useState<Cart | null>(null);

  const fetchProducts = async () => {
    try {
      const productResponse = await commerce.products.list();
      setProducts(productResponse.data as Products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCart = async () => {
    try {
      const cartResponse : CartResponse = await commerce.cart.retrieve();
      console.log( cartResponse)
      setCart(cartResponse as Cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const contextValue: ShopContextType = {
    commerce: commerce,
    products: products,
    cart: cart,
    updateCart: fetchCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}


