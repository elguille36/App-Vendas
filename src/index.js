import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styledcomponentes/cadastrologin.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styledcomponentes/header.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import About from './pages/About.js';
// import Contato from './pages/Contato.js';
// import Carrinho from './componentes/Carrinho.js' //tava fazendo teste do carrinho
import Login from './componentes/login.js';
import Cadastro from './componentes/cadastro.js';
import TelaPrincipal from './componentes/telaprincipal.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
  <Route path='/' index element={<App/>}/>
   <Route path='/cadastro' element={<Cadastro/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/principal' element={<TelaPrincipal/>}/>

  {/* <Route path='/About' element={<About/>}/>
  <Route path='/Contato' element={<Contato/>}/> */}
</Routes>
    {/* <App /> */}
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
