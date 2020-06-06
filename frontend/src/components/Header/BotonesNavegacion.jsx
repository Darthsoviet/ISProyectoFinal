import React from 'react';
import "./BotonesNavegacion.scss";
import {withRouter} from "react-router"; 


const BotonesNavegacion = withRouter( (props) => {
const {history} = props;
const {pagina,nombre,icono} =  props.boton;


   const handleOnClick=()=>{
      history.push(pagina)
   }

   return (
      <button className="nav" onClick={handleOnClick}>

         {nombre}
         {icono}
      </button>
   );
})

export default BotonesNavegacion;
