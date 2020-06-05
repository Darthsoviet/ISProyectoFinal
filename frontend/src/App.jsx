import React from 'react';
import './App.scss';
import Header from "./components/Header"
import logo from "./assets/imagenes/test.png";

function App() {
  return (

    
    <div className="App">
      <Header header={{logo: logo,titulo:"titulo"}}/>
      
    </div>
  );
}

export default App;
