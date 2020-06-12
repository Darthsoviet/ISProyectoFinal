import React, { useEffect } from 'react';
import "./ListaCards.scss";
import Card from "../Card";
import {getSO} from "../../js/peticionesSO"
import {URL} from "../../js/URL"


const ListaCards = (props) => {
let {setLista,lista}= props;

   useEffect(()=>{
      let abortController = new AbortController()
      let signal = abortController.signal
      let data;
      if(lista.length===0){
         getSO(URL,signal).then(d=>{
            data= d
            setLista(data)
            console.log(data);
            
         })
      }
      
      return ()=>{
         abortController.abort()
      }
   },[setLista,lista.length]);

   return (
      
      <ul>
   {lista.map((so,i)=>{
      return(
         <Card key={i} so={{...so}} setLista={setLista}/>
      );
   })}

      </ul>
   );
}

export default ListaCards;
