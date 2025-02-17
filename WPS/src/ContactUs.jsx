import React from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactContainer = styled.div`
  position: relative;
  background: url("/path-to-background-image.jpg") no-repeat center center/cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  background: rgba(0, 140, 69, 0.85); /* Green overlay with transparency */
  padding: 2rem;
  border-radius: 8px;
  color: white;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const InfoSection = styled.div`
  flex: 1;
  padding-right: 1rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: #ffcc00;
  }
`;

const FormSection = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputRow = styled.div`
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  resize: none;
  height: 100px;
`;

const Button = styled.button`
  background: #a4a84e;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #8c923d;
  }
`;

const ContactUs = () => {
  return (
    <ContactContainer>
      <Overlay>
        {/* Left Section - Contact Info */}
        <InfoSection>
          <h2>Let's Get in Touch</h2>
          <p><FaEnvelope /> communityfoodsfdtn1.org</p>
          <p><FaPhoneAlt /> +254 720759619</p>
          <p><FaMapMarkerAlt /> CFSF, Nairobi</p>
        </InfoSection>

        {/* Right Section - Contact Form */}
        <FormSection>
          <InputRow>
            <Input type="text" placeholder="First Name" required />
            <Input type="text" placeholder="Last Name" required />
          </InputRow>
          <Input type="email" placeholder="Email Address" required />
          <TextArea placeholder="Message" required></TextArea>
          <Button type="submit">Send Message</Button>
        </FormSection>
      </Overlay>
    </ContactContainer>
  );
};

export default ContactUs;
