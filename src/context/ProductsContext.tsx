import React, { createContext, useState, useEffect, ReactNode } from "react";
import Commerce from '@chec/commerce.js';

const commerce = new Commerce(process.env.REACT_APP_ECOMMERCEJS_PUBLIC_KEY as string);

type Product = {
  // Define your product type here
};

type ProductsContextType = {
  products: Product[];
};

type ProductsContextProviderProps = {
  children: ReactNode;
};

const ProductsContext = createContext<ProductsContextType | null>(null);

export const useProductsContext = () => {
  const context = React.useContext(ProductsContext);
  if (context === null) {
    throw new Error("useProductsContext must be used within a ProductsProvider");
  }
  return context;
};

export default function ProductsProvider({ children }: ProductsContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productResponse = await commerce.products.list();
        setProducts(productResponse.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const contextValue: ProductsContextType = {
    products: products,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}
