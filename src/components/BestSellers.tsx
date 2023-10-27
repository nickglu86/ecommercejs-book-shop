import React, { FC } from "react";
import styled from 'styled-components';
import { useShopContext } from '../context/ShopContext';

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
      categories: Categories;
      price: {
            raw: number;
            formatted: string;
            formatted_with_symbol: string;
            formatted_with_code: string;
          };
   
};

  
const BestSellers = () => {

      const BestSellersSection = styled.section`
            width: 100%;
            height: 600px;
            padding: 40px 0 20px 0;
      `;

      const SectionTitle = styled.h1`
            font-size: 28px;
            font-weight: 700px;
            text-align: center;
      `;

      const BestSellersGallery = styled.ul`
            list-style: none;
            display: flex;
            justify-content: space-around;
      `;

      const GalleryItem = styled.li`
            text-align: center;
      `;

      const { products} = useShopContext();

      const GetProduct: FC<{ product: Product}> = ({ product }) => (
            <GalleryItem key={product.id}>
                <img src={product.image.url} width={250} height={380} alt={product.name} />
                <h4>{product.name}</h4>
                <div>{product.price.formatted_with_symbol}</div>
                <button >Add to Cart</button>
            </GalleryItem>
        )

      const getBestSellers = () => {
           return products
            .filter((product: any) =>
                  product?.categories.some((category : Category) => category.name === "BestSellers")
                  )
                  .map((product, index) => (
                  <GetProduct product={product as Product} key={index} />
                  ))
      }

      return(
            <BestSellersSection>
                  <SectionTitle>
                         Bestselling Discount Books 
                  </SectionTitle>
                  <BestSellersGallery>
                        {products && getBestSellers()}
                  </BestSellersGallery>
            </BestSellersSection>
      )
}
export default BestSellers