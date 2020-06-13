import React, { useState, useEffect } from 'react';
import "./AlertDelete.scss";
import { URL } from "../../js/URL";
import { deleteSOMany, getSO } from "../../js/peticionesSO";


const AlertDelete = (props) => {
   let { setSeleccionados, mostrar, seleccionados, setLista, setMostrar } = props;
   const [estilo, setEstilo] = useState({ display: "none" })
   const handleQuit = () => {
      setEstilo({ display: "none" })
      setSeleccionados([])
      setMostrar(false)


   }
   const handleDelete = async () => {
      setMostrar(false)

      await deleteSOMany(URL,seleccionados)
      
      setSeleccionados([])
      let lista = await getSO(URL)
      setLista(lista)
   }
   useEffect(() => {
      if (mostrar) {
         setEstilo({ display: "block" })
      } else {
         setEstilo({ display: "none" })
      }
   }, [mostrar])
   return (
      <div style={estilo} onClick={handleQuit} className="delete">
         <div className="delete-container">
            
            {seleccionados.length<=1
            ?<h1>seguro que desea eliminar este elemento?</h1>
            :<h1>seguro que desea eliminar estos {seleccionados.length} elementos?</h1>}
            
            <button className={"btn-dlt"} onClick={handleDelete}>aceptar</button>
            <button className={"btn-acp"}onClick={handleQuit}> Cancelar</button>

         </div>
      </div>
   );
}

export default AlertDelete;
