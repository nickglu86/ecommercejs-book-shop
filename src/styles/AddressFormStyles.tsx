import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 20px 80px;
  border-radius: 25px;
  width: 600px;
  margin: 40px auto 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
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