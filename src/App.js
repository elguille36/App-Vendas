import './App.css';
import Cabezalho from "./componentes/header.js"
import NavBar from './componentes/navBar.js';
import AccordionCategorias from './componentes/acordeonCategory.js';

function App() {
  return (
    <>
     <div className="App">

     <Cabezalho/>
     <NavBar/>
     <AccordionCategorias />

     </div>
   </>
  );
}

export default App;
