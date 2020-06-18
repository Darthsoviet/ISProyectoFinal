import React from 'react';
import "./Documentacion.scss"

export default function Documentacion() {
   return (
      <ul className="doc-ul">
         <li>Lista S. Operativos. https://isproyectofinal2020.herokuapp.com/api/v1/get/so GET</li>
         <li> Insertar Registro. https://isproyectofinal2020.herokuapp.com/api/v1/post/ POST</li>
         <li> Actualizar Registro  https://isproyectofinal2020.herokuapp.com/api/v1/update PATCH</li>
         <li>buscar por coincidencia https://isproyectofinal2020.herokuapp.com/api/v1/sistemasOperativos/nombre/:match GET</li>
         <li> borrar uno https://isproyectofinal2020.herokuapp.com/api/v1/sistemasOperativos/individual/:id DELETE</li>
         <li>Borrar varios https://isproyectofinal2020.herokuapp.com/api/v1/sistemasOperativos/multiple DELETE recibe una lista de object iD</li>

      </ul>
   )
}
