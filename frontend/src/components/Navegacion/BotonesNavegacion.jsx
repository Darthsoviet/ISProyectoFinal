import React from 'react';
import "./BotonesNavegacion.scss";
import { withRouter } from "react-router";


const BotonesNavegacion = withRouter((props) => {
   const { history, comprimido } = props;
   const { pagina, nombre, icono } = props.boton;


   const handleOnClick = () => {
      history.push(pagina)
   }
   const renderNombre = (comprimido) => {
      if (!comprimido) {
         return (<span>{nombre}</span>);
      }
   }
   return (
      <button className="nav" onClick={handleOnClick}>
         {renderNombre(comprimido)}

         {icono}
      </button>
   );
})

export default BotonesNavegacion;
