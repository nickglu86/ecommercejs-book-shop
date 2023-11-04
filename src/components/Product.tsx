import React, { FC } from "react";
import { Link } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";
import { getURIBookTitle } from "../utils";
import { IProduct, ICategory } from "../interfaces";
import { BestSellersSection, BestSellersGallery, SectionTitle, GalleryItem, PriceContainer, BuyButton } from "../styles/BestSellersStyles";
import { useNavigate } from "react-router-dom";
import { handleAddToCart } from "../utils";

  const Product: FC<{ product: IProduct, discount: Boolean }> = ({ product, discount}) => { 

    const { commerce,  products , cart , updateCart, cartModal} = useShopContext();

    let navigate = useNavigate(); 

    return(
        <GalleryItem key={product.id}>
        <Link to={`/book/${getURIBookTitle(product.name)}`}
        state={{ product }}
        >
          <div>
            <img
              src={product.image.url}
              width={250}
              height={380}
              alt={product.name}
            />
            <h4>{product.name}</h4>
          </div>
        </Link>
        <PriceContainer>
          {   discount && (
              <span className="before-discount">
              ${(parseInt(product.price.formatted) * 1.15).toFixed(2)}{" "}
            </span>
          )}
  
              <span>{product.price.formatted_with_symbol} </span>
            </PriceContainer>

        <BuyButton onClick={ ()=> handleAddToCart(product.id, 1, commerce, cartModal, updateCart )}>Buy</BuyButton>
      </GalleryItem>
    )
   
 };

export default Product;