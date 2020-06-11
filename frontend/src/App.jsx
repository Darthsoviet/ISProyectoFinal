import React from 'react';
import Header from "./components/Header"
import Nav from "./components/Navegacion"
import logo from "./assets/imagenes/test.png";
import { faHome, faLaptopCode,  faPen, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch, Route } from 'react-router';



function App() {
  //Botones para navegacion


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
          <Header header={headerData} />
          <main className="grid">
            <Nav botones={listaBotones} />
            <section>
              <Route exact path="/" render={() => { }} />
              <Route exact path="/sistemasOperativos" render={() => { }} />
              <Route exact path="/insertar" render={() => { }} />
              <Route exact path="/documentacion" render={() => { }} />
            </section>
          </main>


        </>
      </Switch>

    </div>
  );
}

export default App;
