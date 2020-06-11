import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import "./Nav.scss";
import BotonesNavegacion from "./BotonesNavegacion.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";



const Nav = (props) => {

   const [comprimido, setComprimido] = useState(true);
   const [movil, setMovil] = useState(false)
   const nav = useRef(null);
   const listaBotones = props.botones;


   useLayoutEffect(() => {
      window.addEventListener("resize", () => {
         
         if (window.innerWidth < 800) {
            setMovil(true)
            setComprimido(true)
         } else {
            
               setMovil(false)
            
         }
      })
   })
   useEffect(() => {

      if (window.innerWidth < 800) {
         nav.current.style.width = "25vw"
         setComprimido(true)
         setMovil(true)
      } else {
         if (comprimido) {
            nav.current.style.width = "5vw"

         } else {
            nav.current.style.width = "15vw"

         }
      }

   }, [comprimido, movil])
   const toggleSize = () => {

      setComprimido(!comprimido)
   }

   return (
      <>
         <aside id="aside" ref={nav} >
            <nav className="escritorio">
               {!comprimido ? (<h2 onClick={toggleSize}>Dashboard</h2>) : (<h2 style={{ display: !movil ? "block" : "none" }} onClick={toggleSize}><FontAwesomeIcon icon={faBars} /></h2>)}

               {listaBotones.map((boton, i) => {
                  return <BotonesNavegacion key={i} boton={boton} comprimido={comprimido} />
               })}


            </nav>
         </aside>


      </>
   );
}

export default Nav;
