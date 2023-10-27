import React from "react";
import styled from "styled-components";
import coverImage from '../assets/images/cover.png'

const Cover = () => {

      const CoverSection = styled.section`
            width: 100%;
            height: 600px;
            background-image: url(${coverImage}); 
            background-size: cover;
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