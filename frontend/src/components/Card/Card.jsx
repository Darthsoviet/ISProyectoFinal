import React from 'react';
import "./Card.scss";

export default function Card(props) {
    let {nombre ,arquitectura, multiUsuario , kernel, multiTareas, licencia } = props;
    return (
       
        <li className="box">
           <span></span>
           <div className="content">
              <h3>{nombre}</h3>
                <p>{arquitectura}</p>
                <p>{multiUsuario}</p>
                <p>{kernel}</p>
                <p>{multiTareas}</p>
                <p>{licencia}</p>
           </div>
        </li>
     
    )
}
