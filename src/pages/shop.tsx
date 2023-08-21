import React, { FC, useEffect, useState } from 'react';
import Commerce from '@chec/commerce.js';

const commerce = new Commerce('pk_test_5377297313e019802673bf5f14fb0b39e1e7da7ba85b4');

const Shop: FC = () => {
//       const [products, setProducts] = useState< {} | null>();
//  useEffect(()=>{
//       commerce.products.list().then((product) => {
//             console.log(product.data)
//           setProducts(product.data);
          
//         });
//  }, [])
 return(
      <div>
            <h2>Shop Page</h2>
      </div>
 )
}

export default Shop;