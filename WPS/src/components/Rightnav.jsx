import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0;
  padding: 0;

  li {
    padding: 18px 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(37, 39, 255);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: white;
      display: block; /* Ensures items are visible when menu opens */
      padding: 18px;
      text-align: center;
    }

    li:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

const Rightnav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  );
};

export default Rightnav;
