import React from 'react'
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
width: 100%;
height: 100px;
border-bottom: 2px #f1f1f1 solid;
padding:2px;
display: flex;
justify-content: space-between;

.logo{
padding:15px 0;
}


`

const Navbar = () => {



  return (
    <Nav>
      <div className="logo">
        Navbar
      </div>
      <Burger/>
     
    </Nav>
  )
}

export default Navbar