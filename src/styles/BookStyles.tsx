import styled from "styled-components";

export const BookSection = styled.section`
  width: 800px;
  margin: 60px auto 0;
  textalign: center;
`;

export const BookInfo = styled.section`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  h2 {
    text-align: left;
  }
`;

export const BookImage = styled.div`
  margin: 0 auto 0;
`;

export const ItemsCounterContainer = styled.div`
  border: 1px solid #05185e;
  width: min-content;
  display: flex;
  button {
    all: unset;
    width: 20px;
    text-align: center;
  }
`;

export const ItemsCounterInput = styled.input`
  width: 20px;
  text-align: center;
  border: none;
`;
