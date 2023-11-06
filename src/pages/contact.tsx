import React, { useState, ChangeEvent, FormEvent } from "react";
import { StyledForm, StyledLabel, StyledInput, StyledButton, StyledTextArea } from "../styles/ContactStyles";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  details: string;
}

const Contact = () => {

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
