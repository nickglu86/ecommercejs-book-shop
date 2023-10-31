import React, { FC } from "react";
import { useShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../interfaces";
import Product from "./Product";

const ProductsGallery: FC = () => {

    const { products } = useShopContext();
   
    return (
        <div className="gallery">
            <ul>
                {products && products.map((product, index) => (
                    <Product key={index} product={product as IProduct} discount={false} />
                ))}
            </ul>
        </div>
    );
}

export default ProductsGallery;
