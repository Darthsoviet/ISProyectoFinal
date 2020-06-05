import React from 'react';
import Nav from "../Nav";
import "./Header.scss"

const Header = (props) => {

const {titulo,logo} =props.header;

   return (
      <header>
         <Nav/>
         <h1>{titulo}</h1>
         <img src={logo} alt={titulo}/>
      </header>
   );
}

export default Header;
