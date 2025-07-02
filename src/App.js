import './App.css';
import Cabezalho from "./componentes/header.js";
import NavBar from './componentes/navBar.js';
import LojaProdutos from './componentes/LojaProdutos.js';
import Carrinho from './componentes/Carrinho.js';


function App() {
  return (
    
    <>
     <div className="App">
     <Cabezalho/>
     <NavBar/>
     <LojaProdutos/>
     <Carrinho/>
     </div>
     </>

  );
}

export default App;
