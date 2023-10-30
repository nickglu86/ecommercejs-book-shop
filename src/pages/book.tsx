import React, { FC } from "react";
import { useLocation } from 'react-router-dom';
 

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
 
  const location = useLocation();
  const product: Product = location.state.product;

 
  return (
    <main>
      <section style={{width: '1000px', margin: '0 auto', textAlign: 'center'}}>
        <h2>{product.name}</h2>
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
