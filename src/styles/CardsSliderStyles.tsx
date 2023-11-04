import styled from "styled-components";

export const CardSliderSection = styled.section`
  width: 100%;
  height: 600px;
  padding: 40px 0 20px 0;

  /* Slider */
  .splide__arrow {
    height: 4em;
    width: 4em;
  }
  .splide  .splide__arrow--prev{
      left: 12vw;
  }
  .splide  .splide__arrow--next{
    right: 12vw;
  }
  .splide  .splide__arrow svg {
    fill: #000;
    height: 1.8em;
    width: 1.8em;
  }
`;
export const SectionTitle = styled.h1`
  font-size: 28px;
  font-weight: 700px;
  text-align: center;
  margin-bottom: 40px;
`;
