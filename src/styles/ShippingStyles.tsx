import styled from "styled-components";

export const ShippingForm = styled.form`
  padding: 20px 10px;
  margin: 10px auto 0;
  display: flex;
  flex-direction: row-reverse;
 
`;

export const ShippingContainer = styled.div`
  width: 50%;
  padding: 0 10px;
  position: relative;
  div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px 0;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: 400;
  width: 44%;
`;

export const StyledInput = styled.input`
  width: 50%;
  padding: 10px;
  margin: 0 10px 0 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const StyledSelect = styled.select`
width: 55%;
padding: 10px;
margin: 0 10px 0 0;
border: 1px solid #ccc;
border-radius: 5px;

`;

export const SubmitWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const StyledButton = styled.button`
  background-color: #fff;
  color: rgb(10, 46, 90);
  border: 2px solid rgb(10, 46, 90);
  border-radius: 18px;
  font-size: 18px;
  padding: 6px 16px;
  font-weight: 600;
  cursor: pointer;
  margin: 20px auto 0;

  &:hover {
    transition: 0.5s;
    background-color: rgb(10, 46, 90);
    color: #fff;
  }`;