import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  background-color: #101716;
  ul li a{
    font-size: 16px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;
}
ul{
    list-style: none;
}
ul li a:hover{
    color: #ffffff;
    padding-top: 10px;
}

ul li::not(:last-child){
    margin-top: 10px;
}
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
    color: white
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Valentim Codes.
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar