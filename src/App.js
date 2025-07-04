import './App.css';
import Cabezalho from "./componentes/header.js";
import NavBar from './componentes/navBar.js';
import LojaProdutos from './componentes/LojaProdutos.js';


function App() {
  return (
    
    <>
     <div className="App">
     <Cabezalho/>
     <NavBar/>
     <LojaProdutos/>
     </div>
     </>

  );
}

export default App;
