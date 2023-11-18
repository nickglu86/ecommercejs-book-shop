import styled from "styled-components";

 
export const PaymentForm = styled.form`
  width: 50%;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
  }
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: 400;
  width: 50%;
`;

export const FormInput = styled.input`
  width: 50%;
  padding: 10px;
  margin: 0 10px 0 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const FormSelect = styled.select`
width: 55%;
padding: 10px;
margin: 0 10px 0 0;
border: 1px solid #ccc;
border-radius: 5px;

`;

export const FormButton = styled.button`
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

  export const SubmitWrapper = styled.div`
      justify-content: end!important;
  `;