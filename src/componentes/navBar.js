import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav>
    {/* // <nav style={{display:"flex", */}
    {/* // justifyContent:"flex-end",
    // marginTop:"1rem"}} > */}

    
    <Link className="enlaceCadastro" to= "/cadastro">Cadastro</Link> 
     <Link className="enlaceLogin"  to="/login">Login</Link>
     
    </nav>
  );
}

export default Navbar;