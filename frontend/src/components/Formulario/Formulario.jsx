import React, { useState, useLayoutEffect } from 'react';
import "./Formulario.scss";
import { URL } from "../../js/URL";

const FormularioPost = (props) => {
   let { setLista, so, accion,id } = props;

   const [data, setData] = useState(
      {
         nombre: "",
         arquitectura: "",
         multiusuario: false,
         multitareas: false,
         versionKernel: "",
         licencia: ""


      })
   useLayoutEffect(() => {
      if(so===undefined){
         so=data
      }
      setData({
         nombre: so.nombre ,
         arquitectura: so.arquitectura  ,
         multiusuario: so.multiusuario ,
         multitareas: so.multitareas,
         versionKernel: so.versionKernel,
         licencia: so.licencia }
      )
      console.log(so);
   },[so])

   const handleOnChange = (event) => {
      let name = event.target.name
      let value = event.target.value
      setData((data) => {
         return { ...data, [name]: value }
      })
      

   }
   const handleOnChecked = (event) => {
      let check = event.target.checked
      let name = event.target.name
      setData((data) => {
         return { ...data, [name]: check }
      })

   }
   const handleOnSubmit = async (event) => {

      event.preventDefault()
      event.target.reset()

      
      
      let dat = await accion(URL, data,id)
      
      setLista(dat)
      setData(
         {
            nombre:  "" ,
            arquitectura: "",
            multiusuario: false,
            multitareas: false,
            versionKernel:  "",
            licencia:  ""
         })


   }


   return (
      <form onSubmit={handleOnSubmit} className="form-post">
         <div className="form-post-container">
            <span className="form-b"></span>
            <label htmlFor="nombre">Nombre</label>
            <input onChange={handleOnChange} name="nombre" id="nombre" required maxLength={45} type="text"  value={data.nombre} />

            <label htmlFor="arquitectura">Arquitectura</label>
            <input onChange={handleOnChange} name="arquitectura" id="arquitectura" required maxLength={45} type="text" value={data.arquitectura} />

            <label htmlFor="multitareas">es multiTarea</label>
            <input onChange={handleOnChecked} name="multitareas" id="multitareas" type="checkbox" checked={data.multitareas?true:false}  />

            <label htmlFor="multiusuario">es multiusuario</label>
            <input onChange={handleOnChecked} name="multiusuario" id="multiusuario" type="checkbox" value={data.multiusuario} checked={data.multiusuario?true:false} />

            <label htmlFor="licencia">Licencia</label>
            <input onChange={handleOnChange} name="licencia" id="licencia" maxLength={45} type="text" value={data.licencia} />
            <label htmlFor="versionKernel">kernel</label>

            <input onChange={handleOnChange} name="versionKernel" id="versionKernel" required maxLength={45} type="text" value={data.versionKernel}  />
            <button type="submit">Aceptar</button>
         </div>
      </form>
   );
}

export default FormularioPost;
