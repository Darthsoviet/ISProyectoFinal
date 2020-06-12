import React, { useState } from 'react';
import "./Buscador.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {findByName,getSO} from "../../js/peticionesSO";
import {URL} from "../../js/URL"
import { withRouter } from 'react-router';

const Buscador =withRouter( (props) => {
   const [text, setText] = useState("")

   let {setLista,history}=props;
const handleOnChange=(event)=>{
   setText(event.target.value);


}

const handleOnSubmit=(event)=>{
   if(text===""){
      getSO(URL).then(data=>{
         setLista(data)
         history.push("/sistemasOperativos")
      })
   }else{
      findByName(URL,text).then((data)=>{
         setLista(data)
         history.push("/sistemasOperativos")
      })  
   }
    
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
});

export default Buscador;
