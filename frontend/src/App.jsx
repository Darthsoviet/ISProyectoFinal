import React, { useState } from 'react';
import Header from "./components/Header"
import Nav from "./components/Navegacion"
import logo from "./assets/imagenes/EscudoUNAM.png";
import { faHome, faLaptopCode,  faPen, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch, Route } from 'react-router';
import ListaCards from "./components/ListaCards";
import FormularioPost from "./components/FormularioPost"



function App() {
  //Botones para navegacion



  const [lista, setLista] = useState([])

  let listaBotones = [
    { nombre: "inicio", pagina: "/", icono: <FontAwesomeIcon icon={faHome} /> },
    { nombre: "lista S. operativos", pagina: "/sistemasOperativos", icono: <FontAwesomeIcon icon={faLaptopCode} /> },
    { nombre: "insertar registro", pagina: "/insertar", icono: <FontAwesomeIcon icon={faPen} /> },
    { nombre: "documentacion", pagina: "/documentacion",icono:<FontAwesomeIcon icon={faFileCode}/> }
  ]
  let headerData = {
    logo: logo,
    titulo: "S.O REST API",

  };

  return (

    <div className="App">
      <Switch >
        <>
          <Header setLista={setLista} header={headerData} />
          <main className="grid">
            <Nav botones={listaBotones} />
            <section>
              <Route exact path="/" render={() => { }} />
              <Route exact path="/sistemasOperativos" render={() => { return( <ListaCards setLista={setLista} lista={lista}/>)}} />
              <Route exact path="/insertar" render={() => {return(<FormularioPost/>) }} />
              <Route exact path="/documentacion" render={() => { }} />
            </section>
          </main>


        </>
      </Switch>

    </div>
  );
}

export default App;
