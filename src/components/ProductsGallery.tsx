import React, { FC } from "react";
import { useShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { Product } from "../interfaces";


const ProductsGallery: FC = () => {

    const { commerce,  products , cart , updateCart} = useShopContext();

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/cart`; 
        navigate(path);
    }

    const handleAddToCart = (productId: string, quantity: number):void => {
        commerce.cart.add(productId, quantity).then((item) => {
            updateCart();

            routeChange();
        }).catch((error) => {
          console.error('There was an error adding the item to the cart', error);
        });
      }

    const GetProduct: FC<{ product: Product}> = ({ product }) => (
        <li key={product.id} >
            <h4>{product.name}</h4>
            <img src={product.image.url} width={250} alt={product.name} />
            <div>{product.price.formatted_with_symbol}</div>
            <button onClick={ ()=> handleAddToCart(product.id, 1)}>Add to Cart</button>
        </li>
    );
   

    
    
    return (
        <div className="gallery">
            <ul>
                {products && products.map((product, index) => (
                    <GetProduct product={product as Product} key={index}  />
                ))}
            </ul>
        </div>
    );
}

export default ProductsGallery;
