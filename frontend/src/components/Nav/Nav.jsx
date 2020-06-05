import React from 'react';
import "./Nav.scss";
import BotonesNavegacion from "../BotonesNavegacion"


let listaBotones=[
   {nombre:"inicio",pagina:"/"},
   {nombre:"ver sistemas operativos",pagina:"/sistemasOperativos"}]

const Nav = () => {
   return (
     <nav>
        {(listaBotones.map((boton,i) =>{
           return <BotonesNavegacion boton={boton}/>
        }))}
     </nav>
   );
}

export default Nav;
