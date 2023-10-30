import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";
import { getRawBookTitle } from "../utils";
type Product = {
    name: string;
    image: { url: string };
    id: string;
    price: {
      raw: number;
      formatted: string;
      formatted_with_symbol: string;
      formatted_with_code: string;
    };
    description: string
  };
const Book: FC = () => {
  const { products } = useShopContext();
  const params = useParams();
  const bookTitle = getRawBookTitle(params.bookTitle);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    products.forEach((bookItem: any ) => bookItem?.name === bookTitle ?  setProduct(bookItem) : null);

  }, []);


 
  return (
    <main>
      <section style={{width: '1000px', margin: '0 auto', textAlign: 'center'}}>
        <h2>{bookTitle}</h2>
        <img
            src={product?.image.url}
            width={250}
            height={380}
            alt={product?.name}
          />
         <p>{product?.description}</p>  
      </section>
    </main>
  );
};

export default Book;
