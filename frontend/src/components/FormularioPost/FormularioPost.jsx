import React, { useState } from 'react';
import "./FormularioPost.scss";
import {postSO} from "../../js/peticionesSO";
import {URL} from "../../js/URL";

const FormularioPost = () => {

   
const [data, setData] = useState(
   {
      nombre:"",
      arquitectura:"",
      multiUsuario:false,
      multiPlataforma:false,
      versionKernel:"",
      licencia:""


   })


const handleOnChange=(event)=>{
   let name=event.target.name
   let value=event.target.value
   setData((data)=>{
     return {...data,[name]:value}
   })
   
}
const handleOnChecked = (event)=>{
   let check=event.target.checked
   let name=event.target.name
   setData((data)=>{
     return {...data,[name]:check}
   })
   
}
const handleOnSubmit=(event)=>{
   
   event.preventDefault()
   postSO(URL,data)
   event.target.reset()
   

}


   return (
      <form onSubmit={handleOnSubmit} className="form-post">
         <div className="form-post-container">
            <span className="form-b"></span>
            <label  htmlFor="nombre">Nombre</label>
            <input onChange={handleOnChange} name="nombre" id="nombre" required maxLength={45} type="text" />
            <label htmlFor="arquitectura">Arquitectura</label>
            <input onChange={handleOnChange} name="arquitectura" id="arquitectura" required maxLength={45} type="text" />
            <label htmlFor="multiPlataforma">es multiplataforma</label>
            <input onChange={handleOnChecked} name="multiPlataforma" id="multiPlataforma" required type="checkbox" />
            <label htmlFor="multiUsuario">es multiusuario</label>
            <input onChange={handleOnChecked} name="multiUsuario" id="multiUsuario" required type="checkbox" />
            <label htmlFor="licencia">Licencia</label>
            <input onChange={handleOnChange} name="licencia" id="licencia" required maxLength={45} type="text" />
            <label htmlFor="versionKernel">kernel</label>
            <input onChange={handleOnChange} name="versionKernel" id="versionKernel" required maxLength={45} type="text" />
            <button type="submit">Aceptar</button>
         </div>
      </form>
   );
}

export default FormularioPost;
