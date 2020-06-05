import React from 'react';
import "./BotonesNavegacion.scss";
import {withRouter} from "react-router"; 

const BotonesNavegacion =withRouter( (props) => {
const {history} = props
const {pagina,nombre} =  props.boton;

   const handleOnClick=()=>{
      history.push(pagina)
   }

   return (
      <button onClick={handleOnClick}>
         {nombre}
      </button>
   );
})

export default BotonesNavegacion;
