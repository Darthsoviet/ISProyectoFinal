import React, { useEffect, useState } from 'react';
import "./ListaCards.scss";
import Card from "../Card";
import { getSO,patchSO } from "../../js/peticionesSO"
import Formulario from "../Formulario"
import { URL } from "../../js/URL"


const ListaCards = (props) => {

   let { setLista, lista, setSeleccionados, seleccionados } = props;

   const [style, setStyle] = useState({
      display: "none",
      position: "absolute",
      width:"80%",
      zIndex:"5"

   })
   const [sistema, setSistema] = useState({
      _id:"",
      nombre:  "",
      arquitectura:  "",
      multiusuario: false,
      multitareas:  false,
      versionKernel: "",
      licencia:  ""})

   useEffect(() => {
      let abortController = new AbortController()
      let signal = abortController.signal
      let data;
      if (lista.length === 0) {
         getSO(URL, signal).then(d => {
            data = d
            setLista(data)
         })
      }

      return () => {
         abortController.abort()
      }
   }, [setLista, lista.length]);

   const hideForm = () => {
      setStyle({ ...style, display: "none" })
   }


   return (
      <>
         <div style={style}>
            <button className="cancel-btn-form" onClick={hideForm}>X</button>
            <Formulario id={sistema._id} so={sistema} accion={(url,data,id)=>{
               hideForm()
               return patchSO(url,data,id)}} setLista={setLista} />
         </div>

         <ul>
            {lista.map((so, i) => {
               return (
                  <Card setSistema={setSistema} setStyleForm={setStyle} key={i} so={so} setLista={setLista} seleccionados={seleccionados} setSeleccionados={setSeleccionados} />
               );
            })}

         </ul>
      </>
   );
}

export default ListaCards;
