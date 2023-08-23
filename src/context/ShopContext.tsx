import React, { createContext, useState, useEffect, ReactNode } from "react";
import Commerce from '@chec/commerce.js';

const ecommerceJsPublicKey = process.env.REACT_APP_COMMERCEJS_PUBLICKEY as string;
const commerce = new Commerce(ecommerceJsPublicKey);

type Product = {
  // Define your product type here
};

type Cart = {
  // Define your cart type here
};

type ShopContextType = {
  commerce: Commerce;
  products: Product[];
  cart: Cart | null;
  updateCart: () => void;
};

type ShopContextProviderProps = {
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
      const cartResponse = await commerce.cart.retrieve();
      setCart(cartResponse);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [cart]);

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




// import React, { createContext, useState, useEffect, ReactNode } from "react";
// import Commerce from '@chec/commerce.js';

// const ecommerceJsPublicKey = process.env.REACT_APP_COMMERCEJS_PUBLICKEY as string;
// const commerce = new Commerce(ecommerceJsPublicKey);

// type Product = {
//   // Define your product type here
// };

// type Cart = {
//   // Define your cart type here
// };

// type ShopContextType = {
//   products: Product[];
//   cart: Cart | null;
//   updateCart: () => void;
// };

// type ShopContextProviderProps = {
//   children: ReactNode;
// };

// const ShopContext = createContext<ShopContextType | null>(null);

// export const useShopContext = () => {
//   const context = React.useContext(ShopContext);
//   if (context === null) {
//     throw new Error("useShopContext must be used within a ShopProvider");
//   }
//   return context;
// };

// export default function ShopProvider({ children }: ShopContextProviderProps) {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Cart | null>(null);

//   const fetchProducts = async () => {
//     try {
//       const productResponse = await commerce.products.list();
//       setProducts(productResponse.data || []);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   const fetchCart  = async () => {
//     try {
//       const cartResponse = await commerce.cart.retrieve();
//       setCart(cartResponse);
//     } catch (error) {
//       console.error("Error fetching cart:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//     fetchCart ();
//   }, []);

//   const contextValue: ShopContextType = {
//     products: products,
//     cart: cart,
//     updateCart: fetchCart ,
//   };


//   console.log(contextValue)
//   return (
//     <ShopContext.Provider value={contextValue}>
//       {children}
//     </ShopContext.Provider>
//   );
// }
