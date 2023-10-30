import React from "react";
import styled from "styled-components";
import coverImage from '../assets/images/library2.png';

const Cover = () => {

      const CoverSection = styled.section`
            position relative;
            width: 100%;
            min-height: 600px;
            height: calc(100vh - 139px);
            background-color: rgba(0,0,0,.2);
            color: #fff;
            text-shadow: 1px 1px 2px black;

      `;
      const CoverImage = styled.div`
            position: absolute;
            width: 100%;
            min-height: 600px;
            height: calc(100vh - 139px);
            z-index: -1;
            background-image: url(${coverImage}); 
            background-size: cover;
            opacity: 0.9;
      `;
      const Quote = styled.div`
            font-size: 62px;
            padding: 180px 0 20px 40px;
      `
      const Author = styled.div`
            padding: 0px 0 40px 370px;
            font-size: 36px;
            
      `;
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
                         "Today a reader, <br/> &nbsp;&nbsp;Tomorrow a leader."
                  </Quote>
                  <Author>Margaret Fuller</Author>  
                  {/* <CTAButton>
                        Explore Now
                  </CTAButton> */}
                  
            </CoverSection>
      )
}

export default Cover;