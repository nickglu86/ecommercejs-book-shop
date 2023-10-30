import React from "react";
import styled from "styled-components";
import coverImage from '../assets/images/library2.png';

const Cover = () => {

      const CoverSection = styled.section`
            position relative;
            width: 100%;
            height: 600px;
            background-color: rgba(0,0,0,.2);

      `;
      const CoverImage = styled.div`
            position: absolute;
            width: 100%;
            height: 600px;
            z-index: -1;
            background-image: url(${coverImage}); 
            background-size: cover;
            opacity: 0.9;
      `;
      const Quote = styled.div`
            color: #fff;
            font-size: 32px;
            margin-left: 40px;
            padding: 80px 0 40px 0;
      `
      const CTAButton = styled.button`
            color: #090a1b;
            background-color: #fff;
            font-size: 30px;
            line:height: 40px;
            margin-left: 40px;
            padding: 10px 40px;
            border-radius: 10px
      `

      return(
            <CoverSection>
                  <CoverImage />
                  <Quote>
                        <div>"Today a reader, tomorrow a leader."</div>
                        <div>Margaret Fuller</div>  
                  </Quote>
                  <CTAButton>
                        Explore Now
                  </CTAButton>
                  
            </CoverSection>
      )
}

export default Cover;