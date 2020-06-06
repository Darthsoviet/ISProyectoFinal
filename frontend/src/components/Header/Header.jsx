import React from 'react';
import Nav from "./Nav";
import "./Header.scss"
import Buscador from "../Buscador";

/*Header recibe header como propiedad
que es un objeto
con logo string,titulo string y
lista botones donde cada boon contiene
icono svg, nombre string, ruta string
*/
const Header = (props) => {

const {titulo,logo,listaBotones} =props.header;


const send=(texto)=>{
   alert(texto)
}

   return (
      <header>
         <Nav botones={listaBotones}/>
         <Buscador send={send}></Buscador>
         <h1>{titulo}</h1>
         <img src={logo} alt={titulo}/>
      </header>
   );
}

export default Header;
