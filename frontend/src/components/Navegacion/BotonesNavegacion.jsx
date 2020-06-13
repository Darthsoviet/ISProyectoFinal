import React from 'react';
import "./BotonesNavegacion.scss";
import { withRouter } from "react-router";


const BotonesNavegacion = withRouter((props) => {
   const {  comprimido } = props;
   const { accion, nombre, icono,style } = props.boton;


   const handleOnClick = () => {
      accion()
   }
   const renderNombre = (comprimido) => {
      if (!comprimido) {
         return (<span>{nombre}</span>);
      }
   }
   return (
      <button style={style} className="nav" onClick={handleOnClick}>
         {renderNombre(comprimido)}

         {icono}
      </button>
   );
})

export default BotonesNavegacion;
