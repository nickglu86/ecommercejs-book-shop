import React, { FC } from 'react';
import ProductsGallery from '../components/ProductsGallery';
import Cover from '../components/Cover';
import BestSellers from '../components/BestSellers';
import Recommended from '../components/Recommended';
import CardsSlider from '../components/CardsSlider';
import BooksImg from '../assets/images/books.png'
const Home: FC = () => {

 return(
      <main>
            <Cover />
            <BestSellers />
            <Recommended />
            <CardsSlider />
            <div>
                  <div style={{
                         
                              position: 'absolute',
                              width: '100%',
                              height: '400px',
                              background: 'linear-gradient(to bottom, #fff 0%,rgba(0,0,0,0) 100%)'
                           
                  }}></div>
                  <img src={BooksImg} style={{width: '100%', height: '500px'}}/>
            </div>
      </main>
 )
}

export default Home;