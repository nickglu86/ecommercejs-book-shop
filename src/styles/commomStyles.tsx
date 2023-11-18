import styled from "styled-components";

export const Box = styled.div`
  padding: 40px 80px;
  border-radius: 25px;
  width: 800px;
  min-height: 500px;
  margin: 40px auto 0;
  border: 1px solid #e4e4e455;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.02), 0px 6px 12px rgba(0, 0, 0, 0.02);
`;

export const BoxTitle = styled.h2`
    text-align: center;
    margin: 10px 0;
    padding: 0 0 40px;
    border-bottom: 1px solid #e4e4e455;
  }`;

export const Button = styled.button`
  background-color: #fff;
  color: #0f111196;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  font-size: 15px;

  box-shadow: 0 2px 5px 0 rgba(213, 217, 217, 0.5);
  padding: 6px 16px;
  font-weight: 500;
  cursor: pointer;
  margin: 20px 10px 0;

  &:hover {
    transition: 0.5s;
    background-color: #f7fafa;
    border-color: #d5d9d9;
  }
`;
