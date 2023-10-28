import React, { FC } from 'react';
import styled from 'styled-components';
import '@splidejs/react-splide/css';
import { useShopContext } from "../context/ShopContext";
import { Splide, SplideSlide } from '@splidejs/react-splide';


type Category = {
      id: string;
      slug: string;
      name: string;
    }

type Categories = Array<Category>;


type Product = {
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

const CardsSlider = () => {

      const RecommendedSection = styled.section`
            width: 100%;
            height: 600px;
            padding: 40px 0 20px 0;
      `;
      const SectionTitle = styled.h1`
            font-size: 28px;
            font-weight: 700px;
            text-align: center;
            margin-bottom: 40px;
      `;

const { commerce,  products , cart , updateCart} = useShopContext();
 
 

    const GetProduct: FC<{ product: Product}> = ({ product }) => (
      <SplideSlide  key={product.id}  style={{textAlign: 'center', display: 'flex', justifyContent: 'center'}}>
           
            <img src={product.image.url} width={250} height={340} alt={product.name} />
            <div style={{ width: '400px', height: '340px', overflow: 'hidden'}}>
             <h4>{product.name}</h4>
             <p>{product.description}</p>
            </div>
            </SplideSlide>
    );
   

    
    
    return (
        <RecommendedSection>
            <SectionTitle>Card Slider</SectionTitle>
            <Splide aria-label="My Favorite Images" options={{
                  type   : 'slide',
                  perPage: 1,
                  width : '600',
                  // autoplay: true,
                  // interval: 1000
 
            }}>
                {products && products.map((product, index) => (
                    <GetProduct product={product as Product} key={index}  />
                ))}
            </Splide>
        </RecommendedSection>
    );
}

export default CardsSlider;