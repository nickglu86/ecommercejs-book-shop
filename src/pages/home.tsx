import React, { FC } from 'react';
import ProductsGallery from '../components/ProductsGallery';
import Cover from '../components/Cover';
import BestSellers from '../components/BestSellers';

const Home: FC = () => {

 return(
      <section>
            <Cover />
            <BestSellers />
          
      </section>
 )
}

export default Home;