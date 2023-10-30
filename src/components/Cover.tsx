import React from "react";
import { CoverSection, CoverImage, Quote, Author } from "../styles/CoverStyles";

const Cover = () => {

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