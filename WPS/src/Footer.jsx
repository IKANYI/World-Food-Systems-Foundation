import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #002b00; /* Dark Green Background */
  color: white;
  text-align: center;
  padding: 1.5rem 0;
  font-size: 1rem;
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLinks = styled.div`
  margin: 0.5rem 0;
  
  a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #4caf50; /* Highlight on hover */
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </FooterLinks>
      <Copyright>&copy; {new Date().getFullYear()} CFSF. All rights reserved.</Copyright>
    </FooterContainer>
  );
};

export default Footer;
