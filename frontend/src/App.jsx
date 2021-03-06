import React, { useState, useEffect } from 'react';
import Header from "./components/Header"
import Nav from "./components/Navegacion"
import logo from "./assets/imagenes/EscudoUNAM.png";
import { faHome, faLaptopCode,  faPen, faFileCode,faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch, Route,withRouter } from 'react-router';
import ListaCards from "./components/ListaCards";
import FormularioPost from "./components/Formulario";
import AlertDelete from "./components/AlertDelete"
import { postSO } from './js/peticionesSO';
import Inicio from "./components/Inicio"
import Documentacion from './components/Documentacion';



 const App=withRouter((props)=> {
  //Botones para navegacion
let {history}=props;


  const [lista, setLista] = useState([])
  const [seleccionados, setSeleccionados] = useState([])
  const [botonEliminar, setbotonEliminar] = useState({display:"none"})
  const [MostrarAlertEliminar, setMostrarAlertEliminar] = useState(false);

  //Botones de navegacion
  let listaBotones = [
    { nombre: "inicio", accion: function(){history.push("/") },icono: <FontAwesomeIcon icon={faHome} /> },
    { nombre: "lista S. operativos", accion: function(){history.push("/sistemasOperativos")}, icono: <FontAwesomeIcon icon={faLaptopCode} /> },
    { nombre: "insertar registro", accion: function(){history.push("/insertar")}, icono: <FontAwesomeIcon icon={faPen} /> },
    { nombre: "documentacion", accion: function(){history.push("/documentacion")},icono:<FontAwesomeIcon icon={faFileCode}/> },
    { nombre: "Eliminar Seleccion", accion: function(){setMostrarAlertEliminar(true)},icono:<FontAwesomeIcon icon={faTrash}/>,style:botonEliminar }
  ]

//datos del header
  let headerData = {
    logo: logo,
    titulo: "S.O REST API",

  };

  useEffect(()=>{
    if(seleccionados.length>=1){
      setbotonEliminar({display:"flex",
    color:"#e0245e"})
    }else{
      setbotonEliminar({display:"none"})
    }

    
  },[seleccionados.length])
  return (

    <div className="App">
      <Switch >
        <>
          <AlertDelete setMostrar={setMostrarAlertEliminar} mostrar={MostrarAlertEliminar} setSeleccionados={setSeleccionados} seleccionados={seleccionados} setLista={setLista}/>
          <Header setLista={setLista} header={headerData} />
          <main className="grid">
            <Nav botones={listaBotones} />
            <section>
              <Route exact path="/" render={() => {return(<Inicio/>) }} />
              <Route exact path="/sistemasOperativos" render={() => { return( <ListaCards setLista={setLista} lista={lista}  setSeleccionados={setSeleccionados} seleccionados={seleccionados}/>)}} />
              <Route exact path="/insertar" render={() => {return(<FormularioPost accion={postSO}  setLista={setLista}/>) }} />
              <Route exact path="/documentacion" render={() => { return(<Documentacion/>)}} />
            </section>
          </main>


        </>
      </Switch>

    </div>
  );
})

export default App;
