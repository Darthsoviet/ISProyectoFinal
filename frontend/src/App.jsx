import React from 'react';
import Header from "./components/Header"
import logo from "./assets/imagenes/test.png";
import { faHome, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch } from 'react-router';



function App() {
  //Botones para navegacion

  let headerData = {
    logo: logo,
    titulo: "S.O REST API",
    listaBotones:
      [
        { nombre: "inicio", pagina: "/", icono: <FontAwesomeIcon icon={faHome} /> },
        { nombre: "lista sistemas operativos", pagina: "/sistemasOperativos", icono: <FontAwesomeIcon icon={faLaptopCode} /> }
      ]
  };

  return (

    <div className="App">
      <Switch >
        <Header header={headerData} />
      </Switch>

    </div>
  );
}

export default App;
