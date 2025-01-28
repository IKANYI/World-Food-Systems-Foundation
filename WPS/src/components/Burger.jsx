import React,{useState} from 'react';
import styled from 'styled-components';
import Rightnav from './Rightnav';

const Burgerstyled = styled.div`
width: 7rem;
height: 2rem;
position: fixed;
right:20px;
top:10rem;
z -index:100;
display: none;

@media screen and (max-width:768px){
display:flex;
flex-flow: column nowrap;
justify-content: space around;
}

div{
width:3rem;
height:.25rem;
background-color:${({open})=>(open)? '#ccc':'#333'};
border-radius:10px;
margin-bottom:.5rem;
transform-origin:13px;
transition:all linear 0.3s;
&:nth-child(1) {
  transform: ${({ open }) => (open) ? "rotate(45deg)" : "rotate(0)"};
}
  &:nth-child(2) {
  transform: ${({ open }) => (open) ? "translateX(100%)" : "translate(0)"};
  opacity: ${({ open }) => (open) ? 0 : 1};
}
  &:nth-child(3) {
  transform: ${({ open }) => (open)? "rotate(-45deg)" : "rotate(0)"};
}

}
`

const Burger = () => {
  const[ open, setOpen ] = useState(false);
  return (
    <>
    <Burgerstyled open={open} onClick ={ () => setOpen(!open)

    }>
      <div/>
      <div/>
      <div/>
      
    </Burgerstyled>
    <Rightnav/>
    </>
  )
}

export default Burger