import React from 'react';
import "./Card.scss";

export default function Card(props) {
    let {nombre ,arquitectura, multiUsuario , kernel, multiTareas, licencia ,id} = props.so;
    return (
       
        <li className="box">
           <span></span>
           <div className="content">
              <h3>{nombre}</h3>
                <p>arquitectura: {arquitectura}</p>
                <p>multiusuario:{multiUsuario}</p>
                <p>version de kernel:{kernel}</p>
                <p>multi tares: {multiTareas}</p>
                <h2>{licencia}</h2>
           </div>
        </li>
     
    )
}
