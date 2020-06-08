import React, { useState } from 'react';
import "./Buscador.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"
const Buscador = (props) => {
   const {send}=props;
   const [text, setText] = useState("")

const handleOnChange=(event)=>{
   setText(event.target.value);

}

const handleOnSubmit=(event)=>{
   
   send(text);
   
   event.preventDefault();
   event.target.reset() ;
   setText("")
   
}

   return (
      <form  onSubmit={handleOnSubmit} className="contenedor-buscador">
         <button  type="submit" ><FontAwesomeIcon icon={faSearch}/></button>
         <input  onChange={handleOnChange}
          placeholder={"Buscar Sistema Operativo"} type="search" />
      </form>
   );
}

export default Buscador;
