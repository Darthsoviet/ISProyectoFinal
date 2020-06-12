import React from 'react';
import "./Header.scss"
import Buscador from "../Buscador";

/*Header recibe header como propiedad
que es un objeto
con logo string,titulo string y
lista botones donde cada boon contiene
icono svg, nombre string, ruta string
*/
const Header = (props) => {
let {setLista}=props;
const {titulo,logo} =props.header;




   return (
      <header>
         <Buscador setLista={setLista}></Buscador>
         <h1>{titulo}</h1>
         <img src={logo} alt={titulo}/>
      </header>
   );
}

export default Header;
