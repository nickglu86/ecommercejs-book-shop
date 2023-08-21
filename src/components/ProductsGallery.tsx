import React, { FC } from "react";
import { useProductsContext } from "../context/ProductsContext";

type Product = {
    name: string;
    image: { url: string };
    id: string
 
};

const GetProduct: FC<{ product: Product}> = ({ product }) => (
    <li key={product.id}>
        <h4>{product.name}</h4>
        <img src={product.image.url} width={250} alt={product.name} />
    </li>
);

const ProductsGallery: FC = () => {
    const { products } = useProductsContext();

    return (
        <div className="gallery">
            <ul>
                {products && products.map((product: any) => (
                    <GetProduct product={product}  />
                ))}
            </ul>
        </div>
    );
}

export default ProductsGallery;
