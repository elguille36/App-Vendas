import React from "react";
import { FaSearch } from "react-icons/fa";
// import Carrinho from './Carrinho.js' fazendo teste do carrinho

function Cabezalho(){

    return(
    <header className="Cabezalho">
    <div className="box-img">
    <img className="img-logo" src="/img/logo.png" alt="logo"></img>
    </div>
    <div className="box-barra">
    <input className="pesquiça" type="text" placeholder="Pesquiçar Produtos..."></input>
    <FaSearch style={{right:"29rem",top:"2.5rem", outline:"none",position:"absolute"}}/>
    </div>
    {/* <div className="carrinho">
     <Carrinho/>
    </div> */}
    <div className="box-bottom">
        <bottom className="cadastro-login">Cadastro</bottom>

        <bottom className="cadastro-login">Login</bottom>
    </div>

    {/* <NavBar /> */}
    </header>
    )
    
    }
    
    export default Cabezalho;