import React, { useState } from 'react';

import Styled from 'styled-components';






const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  
 






  function handleClick() {
  
    window.scrollTo(document.getElementById('port_sec').getBoundingClientRect())

  }
  function handleClick1() {
  
    window.scrollTo(document.getElementById('abt_sec').getBoundingClientRect())

  }
 
    return (

      <Nav>
          |<Hamburger onClick={() => setIsOpen(!isOpen)} >
               <span />
               <span />
               <span />

            </Hamburger>

            <Menu isOpen={isOpen} >
                <MenuLink href="">Home</MenuLink>
                <MenuLink href="#" onClick={handleClick1}>About</MenuLink>
                <MenuLink href="#"  onClick={handleClick}>Portfolio</MenuLink>
                <MenuLink href="#">Blog</MenuLink>
            </Menu>
            

            </Nav>

     

       
    )
}

const Nav = Styled.nav`

display:flex;
flex-direction:row-reverse;


`;


const Menu = Styled.div`

display: flex;
  
width: 100%;

height: 3rem;
align-items: center;
font-size: large;
justify-content: center;
border-bottom: 1px solid #b3ffff;
border-bottom-style: groove;

@media (max-width: 768px) {
   
    overflow:hidden;
    flex-direction: column;
    width:100%;
    height:100%;
    max-height: ${({isOpen}) => (isOpen ? "300px" : "0")};
    transition: max-height 0.4s ease-in;
    
   
    a{
        padding:20px;
    }
}



`;
const MenuLink = Styled.a`
text-decoration: none;
color:#fff;
padding-right: 4rem;

&:hover {
    color: #C3073F;
  }

`;
const Hamburger = Styled.div`


display: flex;
flex-direction: column;
cursor: pointer;
margin-top:20px;
margin-right:20px;

span{
    width: 25px;
    height: 2px;
    background-color: #eee;
    margin-bottom: 4px;
}

@media (min-width:768px) {
  display:none;
}





`;


export default Navbar
