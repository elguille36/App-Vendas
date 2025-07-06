import './App.css';
import Cabezalho from "./componentes/header.js";
// import NavBar from './componentes/navBar.js';
import LojaProdutos from './componentes/LojaProdutos.js';
import PaginaCopy from './componentes/footer.js';
import { motion } from 'framer-motion';



function App() {

  return (
    
    <>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'105vh'}}>
     <div className="App">
     <Cabezalho/>
     <LojaProdutos/>
     </div>
  <motion.h1
        animate={{ x: [0, 150, 0] }} // vai e volta no movimento linear
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
       Bem-vindo(a) Loja de Produtos 100% Qualidade de Categoria Internacional...!
      </motion.h1>
      <PaginaCopy />
    </div>
     </>

  );
}

export default App;
