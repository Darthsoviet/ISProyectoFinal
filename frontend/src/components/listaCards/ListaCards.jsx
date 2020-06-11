import React from 'react';
import "./ListaCards.scss";
import Card from "../Card";

const ListaCards = () => {
   return (
      
      <ul>
         <Card so={{nombre:"Ubuntu" ,arquitectura:"test", multiUsuario:true , kernel:"Linux", multiTareas:true, licencia:"GPL" }}/>
      

      </ul>
   );
}

export default ListaCards;
