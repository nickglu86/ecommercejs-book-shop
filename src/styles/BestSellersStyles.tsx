import styled from "styled-components";

export const BestSellersSection = styled.section`
  width: 100%;
  height: 600px;
  padding: 40px 0 100px 0;
`;

export const SectionTitle = styled.h1`
  font-size: 28px;
  font-weight: 700px;
  text-align: center;
  margin-bottom: 80px;
`;

export const BestSellersGallery = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

export const GalleryItem = styled.li`
  text-align: center;

  img {
    border: 1px solid gray;
  }
`;
export const PriceContainer = styled.div`
  margin: 0 0 14px;
  color: rgb(29, 103, 205);
  font-family: system-ui;

  .before-discount {
    text-decoration: line-through;
    margin-right: 5px;
  }
`;

export const BuyButton = styled.button`
  background-color: #fff;
  color: rgb(10, 46, 90);
  border: 1px solid rgb(10, 46, 90);
  border-radius: 18px;
  font-size: 16px;
  padding: 6px 16px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    transition: 0.5s;
    background-color: rgb(10, 46, 90);
    color: #fff;
  }
`;
