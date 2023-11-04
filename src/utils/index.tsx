 import { IAtrributes, ICartModal } from "../interfaces";
 import Commerce from "@chec/commerce.js";

 export const getURIBookTitle = (title:string | undefined ) => title?.replaceAll(" ", "-");

 export const getRawBookTitle = (title:string | undefined )  => title?.replaceAll("-", " ");

 export const findProductAttribute = (arr : IAtrributes, attrName: string, setAtttrribute: Function) => {
    arr.forEach( attribute => {
      if(attribute.name === attrName){
        setAtttrribute(attribute.value)
      }
    })
  }


  export const handleAddToCart = (productId: string, quantity: number, commerce: Commerce, cartModal: ICartModal, updateCart: () => void):void => {
    commerce.cart.add(productId, quantity).then((item) => {
        updateCart();
        setTimeout(() => {
          cartModal.toggle();
        }, 700);
        // routeChange();
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
  }