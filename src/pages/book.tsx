import React, { FC } from "react";
import { useLocation } from 'react-router-dom';
import { IProduct } from "../interfaces";

const Book: FC = () => {
 
  const location = useLocation();
  const product: IProduct = location.state.product;

 
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
