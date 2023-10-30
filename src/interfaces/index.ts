import { ReactNode } from "react";
import Commerce from '@chec/commerce.js';

export interface ShopContextType  {
    commerce: Commerce;
    products: Product[];
    cart: Cart | null;
    updateCart: () => void;
  };
  
export interface ShopContextProviderProps  {
    children: ReactNode;
  };


export interface Cart {
  created: number;
  currency: { code: string; symbol: string };
  discount: any[]; // Adjust the type as needed
  expires: number;
  hosted_checkout_url: string;
  id: string;
  line_items: LineItem[]; // Use a new type for line items
  meta: null;
  subtotal: {
    raw: number;
    formatted: string;
    formatted_with_symbol: string;
    formatted_with_code: string;
  };
  total_items: number;
  total_unique_items: number;
  updated: number;
}

export interface CartResponse  {

}

export interface LineItem {
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
}

export interface Category {
    id: string;
    slug: string;
    name: string;
  }

export interface Categories extends Array<Category> {}


export interface Product {
    name: string;
    image: { url: string };
    id: string
    description: string;
    categories: Categories;
    price: {
          raw: number;
          formatted: string;
          formatted_with_symbol: string;
          formatted_with_code: string;
        };
 
};

export interface Products extends Array<Product> {}