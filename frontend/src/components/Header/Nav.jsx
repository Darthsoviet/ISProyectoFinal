import React, { useState, useEffect } from 'react';
import "./Nav.scss";
import BotonesNavegacion from "./BotonesNavegacion.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";



const Nav = (props) => {

   const [visible, setvisible] = useState(false);

   const listaBotones = props.botones;
   const toggleNav =(visible)=>{

      if(!visible){
         document.getElementById("nav-movil").style.height="15vh"         
   
      }else{
         document.getElementById("nav-movil").style.height="0"
      }
      setvisible(!visible)
   }

   useEffect(()=>{
      
      toggleNav(true)
      
   },[]);
   
   return (
      <>
         <nav className="escritorio">
            { listaBotones.map((boton, i) => {
               return <BotonesNavegacion key={i} boton={boton} />
            })}
         </nav>
         <button onClick={()=>toggleNav(visible)} id="boton-nav" className="movil"><FontAwesomeIcon icon={faBars}/></button>
         <nav id="nav-movil" className="movil">
            {(listaBotones.map((boton, i) => {
               return <BotonesNavegacion key={i} boton={boton} />
            }))}
         </nav>
      </>
   );
}

export default Nav;
