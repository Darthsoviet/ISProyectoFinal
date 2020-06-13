import React, { useState,useLayoutEffect,useEffect } from 'react';
import "./Card.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";


export default function Card(props) {
    let { setSeleccionados,seleccionados,setSistema ,setStyleForm} = props
    const [prepared, setPrepared] = useState(false)
    const [style, setStyle] = useState({background:"blue"})

    let { nombre, arquitectura, multiusuario, versionKernel, multitareas, licencia, _id } = props.so;
    const handleOnClickDelete = () => {
        if (!prepared) {
            setStyle({background:"red"})
            setSeleccionados((list) => {
                return [...list,_id];
            }
            
            )
        }else if(prepared){
            setStyle({background:"blue"})
            setSeleccionados((list)=>{

                let i=list.indexOf(_id);
                if(list.length===1){
                    return [list.pop()]
                }
                list.splice(i,1)
                return list
            })
        }
        setPrepared(!prepared)

    }
    const handleOnClickPatch=()=>{
        setSistema({...props.so})
        setStyleForm((sty)=>{
            return {...sty,"display":"block","zIndex":5,"width":"100%"}
        })
    }

    useEffect(()=>{
        setPrepared(false)
    },[setPrepared])
    useLayoutEffect(()=>{
        if(seleccionados.includes(_id)){
            setStyle({background:"red"})
            
        }else{
            setStyle({background:"blue"})
            setPrepared(false)
        }
        
    },[_id,seleccionados])


    return (

        <li className="box">
            <span style={style}></span>
            <div className="content">
                <h3>{nombre}</h3>
                <p>arquitectura: {arquitectura}</p>
                <p>multiusuario:{multiusuario ? "si" : "no"}</p>
                <p>version de kernel: {versionKernel}</p>
                <p>multitarea: {multitareas ? "si" : "no"}</p>
                <h2>{licencia}</h2>

            </div>
            <button onClick={handleOnClickDelete} className="btn-eliminar"><FontAwesomeIcon icon={faTrash} /></button>
            <button onClick={handleOnClickPatch} className="btn-update"><FontAwesomeIcon icon={faEdit} /></button>
        </li>

    )
}
