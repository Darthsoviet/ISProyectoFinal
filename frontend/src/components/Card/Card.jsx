import React from 'react';
import "./Card.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog} from "@fortawesome/free-solid-svg-icons";
import {deleteSO} from "../../js/peticionesSO";
import {URL} from "../../js/URL";

export default function Card(props) {
    let {setLista} = props
    let {nombre ,arquitectura, multiUsuario , versionKernel, multiTareas, licencia ,_id} = props.so;
    const handleOnClickDelete=()=>{
        console.log(_id);
        
        deleteSO(URL,_id).then((data)=>{
            setLista(data)
        })

    }
    return (
       
        <li className="box">
           <span></span>
           <div className="content">
              <h3>{nombre}</h3>
                <p>arquitectura: {arquitectura}</p>
                <p>multiusuario:{multiUsuario?"si":"no"}</p>
                <p>version de kernel:{versionKernel}</p>
                <p>multitarea: {multiTareas?"si":"no"}</p>
                <h2>{licencia}</h2>
                
           </div>
           <button onClick={handleOnClickDelete} className="btn-eliminar">Eliminar</button>
           <button className="btn-update"><FontAwesomeIcon icon={faCog}/></button>
        </li>
     
    )
}
