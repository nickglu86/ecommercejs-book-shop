import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  details: string;
}

const Contact: FC = () => {


const StyledForm = styled.form`
  background-color: #f4f4f4;
  padding: 40px 80px;
  border-radius: 25px;
  width: 500px;
  margin: 40px auto 0;
  
  div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
  }
`

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size:20px;
  font-weight: 400;
  width: 34%;
`

const StyledInput = styled.input`
  width: 50%;
  padding: 10px;
  margin: 0 10px 0 0 ;
  border: 1px solid #ccc;
  border-radius: 5px;
`
const StyledTextArea = styled.textarea`
  width: 50%;
  padding: 10px;
  margin: 0 10px 0 0 ;
  border: 1px solid #ccc;
  border-radius: 5px;
`
const StyledButton = styled.button`
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
  
`

const StyledAlert = styled.div`
  padding: 10px;
  background-color: #f44336;
  color: white;
  margin-top: 10px;
  border-radius: 5px;
`
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    details: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Process the form data here (e.g., send it to a server)
    console.log(formData);
  };

  return (
    <main>
      <section>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Contact Us </h2>
          <div>
            <StyledLabel htmlFor="name">Name:</StyledLabel>
            <StyledInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <StyledLabel htmlFor="phone">Phone:</StyledLabel>
            <StyledInput
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <StyledLabel htmlFor="email">Email:</StyledLabel>
            <StyledInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <StyledLabel htmlFor="subject">Subject:</StyledLabel>
            <StyledInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <StyledLabel htmlFor="details">More Details:</StyledLabel>
            <StyledTextArea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows={4}
              required
            />
          </div>
          <div>
            <StyledButton type="submit">Submit</StyledButton>
          </div>
        </StyledForm>
      </section>
    </main>
  );
};

export default Contact;
