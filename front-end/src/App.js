import React from 'react';
import Header from './componentes/Header'
import Sobre from './componentes/Sobre'
import Main from './dashboard/filmes/index'
import Footer from './componentes/Footer'
import Chat from './chat/chat'
import "./style.css"


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Sobre/>
      <Chat/>
      <Footer/>
    </div>
  );
}

export default App;
