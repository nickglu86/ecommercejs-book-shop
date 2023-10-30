import React, { FC } from 'react';
import styled from "styled-components";

const About: FC = () => {

const AboutSection = styled.section`
    background-color: rgb(10, 46, 90);
    height: 100%;
`;    

const AboutBox = styled.section`
    width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
    font-size: 21px;
    color: #fff;
`; 

 return(
     <main>
      <AboutSection>
        <AboutBox>
        <p>Welcome to Master Mind Books, your ultimate destination for inspiring literature. We are more than just an online bookstore – we are a community of thinkers, dreamers, and seekers of knowledge. Our carefully curated collection of books spans the realms of psychology, philosophy, personal growth, and more.</p>
        
        <p>At Master Mind Books, we believe in the power of words to ignite change and transform lives. Our mission is to provide you with a diverse selection of titles that not only expand your mind but also nourish your soul. Whether you're delving into the depths of human psychology or exploring the mysteries of philosophy, our collection is designed to stimulate your intellect and foster personal development.</p>
        
        <p>Join us on a journey of exploration and self-discovery. Browse our catalog to find gems of wisdom that will inspire and enlighten you. We're not just a bookstore – we're your companions on the path to knowledge and enlightenment. Thank you for choosing Master Mind Books as your source for thought-provoking literature.</p>
  
        </AboutBox>
      </AboutSection>
     </main>
 )
}

export default About;