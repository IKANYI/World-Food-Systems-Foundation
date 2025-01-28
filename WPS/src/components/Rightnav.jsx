import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
list-style:none;
display: flex;
flex-flow:no wrap;
 li {
 padding:18px 10px;
 }
@media screen and (max-width: 768px) {
  flex-flow: column nowrap;
  background-color: rgb(37, 39, 255);
  position: fixed;
  transform:${({open}) =>  open? 'translateX(0)' : 'translateX(100%)'};
  top: 0;
  right: 0;
  width: 300px;
  padding-top: 3.5rem;
  li{
  color:white;
  transition: transform 0.3s ease-in-out;
  }
}

`

const Rightnav = ({open}) => {
  return (
    <Ul open = {open}>
        <li>home</li>
        <li>contact us</li>
        <li>sign in </li>
        <li>sign up</li>
      
    </Ul>
  )
}

export default Rightnav