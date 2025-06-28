import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav style={{display:"flex",
    justifyContent:"flex-end",
    marginTop:"1rem"}} >

    <div className="enlaceNav">
    <Link className="barra-nav" to="/About">Sobre Nós</Link>
    <Link className="barra-nav" to="/Contato">Contato</Link>
    </div>
    </nav>
  );
}

export default Navbar;