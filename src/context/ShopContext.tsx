import React, { createContext, useState, useEffect, ReactNode } from "react";
import Commerce from '@chec/commerce.js';

const ecommerceJsPublicKey = process.env.REACT_APP_COMMERCEJS_PUBLICKEY as string;
 
const commerce = new Commerce(ecommerceJsPublicKey);

interface Product {
  // Define your product type here
};

interface Cart  {
  created: number;
  currency: { code: string; symbol: string };
  discount: any[]; // Adjust the type as needed
  expires: number;
  hosted_checkout_url: string;
  id: string;
  line_items: LineItem[]; // Use a new type for line items
  meta: null;
  subtotal: { raw: number; formatted: string; formatted_with_symbol: string; formatted_with_code: string };
  total_items: number;
  total_unique_items: number;
  updated: number;
};

interface LineItem  {
  id: string;
  product_id: string;
  name: string;
  product_name: string;
  sku: string | null;
  permalink: string;
  quantity: number;
  price: {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
  line_total: {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
  is_valid: boolean;
  product_meta: any[]; // Adjust the type as needed
  selected_options: any[]; // Adjust the type as needed
  variant: any; // Adjust the type as needed
  image: {
    id: string;
    url: string;
    description: string | null;
    is_image: boolean;
    filename: string;
    file_size: number;
    file_extension: string;
    image_dimensions: {
      width: number;
      height: number;
    };
    meta: any[]; // Adjust the type as needed
    created_at: number;
    updated_at: number;
  };
  tax: any; // Adjust the type as needed
};

interface CartResponse  {

}
interface ShopContextType  {
  commerce: Commerce;
  products: Product[];
  cart: Cart | null;
  updateCart: () => void;
};

interface ShopContextProviderProps {
  children: ReactNode;
};

const ShopContext = createContext<ShopContextType | null>(null);

export const useShopContext = () => {
  const context = React.useContext(ShopContext);
  if (context === null) {
    throw new Error("useShopContext must be used within a ShopProvider");
  }
  return context;
};

export default function ShopProvider({ children }: ShopContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart | null>(null);

  const fetchProducts = async () => {
    try {
      const productResponse = await commerce.products.list();
      setProducts(productResponse.data || []);
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


