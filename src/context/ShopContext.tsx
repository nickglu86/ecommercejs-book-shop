import React, { createContext, useState, useEffect, ReactNode } from "react";
import Commerce from '@chec/commerce.js';
import { IShopContextType, IShopContextProviderProps, IProducts, ICart, ICartResponse } from "../interfaces";
import useCartModal from "../hooks/useCartModal";

const ecommerceJsPublicKey = process.env.REACT_APP_COMMERCEJS_PUBLICKEY as string;
const commerce = new Commerce(ecommerceJsPublicKey);
const ShopContext = createContext<IShopContextType | null>(null);

 
export const useShopContext = () => {
  const context = React.useContext(ShopContext);
  if (context === null) {
    throw new Error("useShopContext must be used within a ShopProvider");
  }
  return context;
};

export default function ShopProvider({ children }: IShopContextProviderProps) {
  const [products, setProducts] = useState<IProducts>([]);
  const [cart, setCart] = useState<ICart | null>(null);

  const fetchProducts = async () => {
    try {
      const productResponse = await commerce.products.list();
      setProducts(productResponse.data as IProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const fetchCart = async () => {
    try {
      const cartResponse : ICartResponse = await commerce.cart.retrieve();
      console.log( cartResponse)
      setCart(cartResponse as ICart);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [commerce]);

  const contextValue: IShopContextType = {
    commerce: commerce,
    products: products,
    cart: cart,
    updateCart: fetchCart,
    cartModal:  useCartModal()
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}


