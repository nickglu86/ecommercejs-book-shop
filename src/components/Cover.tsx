import React from "react";
import { CoverSection, CoverImage, Quote, Author } from "../styles/CoverStyles";

const Cover = () => {
  return (
    <CoverSection>
      <CoverImage />
      <Quote>
      &quot;Today a reader, <br /> &nbsp;&nbsp;Tomorrow a leader.&quot;
      </Quote>
      <Author>Margaret Fuller</Author>
      {/* <CTAButton>
                        Explore Now
                  </CTAButton> */}
    </CoverSection>
  );
};

export default Cover;
