import React, { useState,useEffect } from 'react';
import "./AlertDelete.scss";
import {URL} from "../../js/URL";
import {deleteSO,getSO} from "../../js/peticionesSO";


const AlertDelete = (props) => {
   let {setSeleccionados,mostrar,seleccionados,setLista,setMostrar} = props;
   const [estilo, setEstilo] = useState({display:"none"})
   const handleQuit =()=>{
      setEstilo({display:"none"})
      setSeleccionados([])
      setMostrar(false)


   }
   const handleDelete=async ()=>{
      setMostrar(false)
      for(let i of seleccionados){
        await deleteSO(URL,i)
      }
      setSeleccionados([])
      let lista = await getSO(URL)
      setLista(lista)
   }
   useEffect(()=>{
      if(mostrar){
         setEstilo({display:"block"})
      }else{
         setEstilo({display:"none"})
      }
   },[mostrar])
   return (
      <div style={estilo} onClick={handleQuit} className="delete">
         <div className="delete-container">
            <h1>seguro que desea eliminar?</h1>
            <button onClick={handleDelete}>aceptar</button>

         </div>
      </div>
   );
}

export default AlertDelete;
