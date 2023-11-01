 import { IAtrributes } from "../interfaces";
 
 export const getURIBookTitle = (title:string | undefined ) => title?.replaceAll(" ", "-");

 export const getRawBookTitle = (title:string | undefined )  => title?.replaceAll("-", " ");

 export const findProductAttribute = (arr : IAtrributes, attrName: string, setAtttrribute: Function) => {
    arr.forEach( attribute => {
      if(attribute.name === attrName){
        setAtttrribute(attribute.value)
      }
    })
  }