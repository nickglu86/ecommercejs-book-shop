 export const getURIBookTitle = (title:string | undefined ) => title?.replaceAll(" ", "-");

 export const getRawBookTitle = (title:string | undefined )  => title?.replaceAll("-", " ");