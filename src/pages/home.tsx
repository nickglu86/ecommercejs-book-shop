import React, { FC } from 'react';
import ProductsGallery from '../components/ProductsGallery';
import Cover from '../components/Cover';
import BestSellers from '../components/BestSellers';
import Recommended from '../components/Recommended';
import CardsSlider from '../components/CardsSlider';

const Home: FC = () => {

 return(
      <main>
            <Cover />
            <BestSellers />
            <Recommended />
            <CardsSlider />
      </main>
 )
}

export default Home;