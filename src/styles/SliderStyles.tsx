import styled from "styled-components";

export const SplideSlideStyles = {
  textAlign: "center",
  width: "500px!important",
  display: "flex",
  justifyContent: "center",
};

export const SlideCardStyles = styled.div`
  display: flex;
  justify-content: center;
  // border: 1px solid black;
  border-radius: 20px;
`;

export const SlideImgStyles = styled.div`
  img {
    margin-top: 20px;
    width: 260px;
    transform: skewY(7deg);
    height: 360px;
    border-right: 10px solid gray;
    box-shadow: 6px 6px 10px 7px #b6afaf;
  }
`;

export const SlideInfo = styled.div`
  width: 500px;
  height: 450px;
  overflow: hidden;
  text-align: left;
  padding-right: 40px;
  // margin-top: 24px;
  h2 {
    color: #0a2e5a;
    font-size: 32px;
    text-align: left;
  }
  h4 {
    color: #black;
    font-size: 27px;
    font-weight: 500;
    margin: -5px 0 10px;
  }
  p {
    font-size: 22px;
    line-height: 29px;
    padding-right: 40px;
    font-style: italic;
  }
`;
