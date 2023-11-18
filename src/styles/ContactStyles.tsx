import styled from "styled-components";

export const StyledForm = styled.form`

  padding: 10px 80px;
  width: 600px;
  margin: 0 auto 0;
  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 8px 0;
  }
  h2{
    border-bottom: none;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 400;
  width: 34%;
`;

export const StyledInput = styled.input`
  width: 50%;
  padding: 10px;
  margin: 0 10px 0 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
export const StyledTextArea = styled.textarea`
  width: 50%;
  padding: 10px;
  margin: 0 10px 0 0;
  border: 1px solid #ccc;
  border-radius: 5px;
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
  }
`;

export const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`;
