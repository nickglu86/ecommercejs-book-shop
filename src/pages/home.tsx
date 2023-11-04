import React, { FC } from 'react';
import ProductsGallery from '../components/ProductsGallery';
import Cover from '../components/Cover';
import BestSellers from '../components/BestSellers';
import Recommended from '../components/Recommended';
import Slider from '../components/Slider';



const Home: FC = () => {

 return(
      <main>
            <Cover />
            <BestSellers />
            <Recommended />
            <Slider />
      </main>
 )
}

export default Home;