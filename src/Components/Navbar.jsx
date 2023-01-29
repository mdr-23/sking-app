import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

function NavBar(){

  const [showShip, setShowShip] = useState(false);
  const [showBalloon, setShowBalloon] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [showCujo, setShowCujo] = useState(false);
  const [showVampire, setShowVampire] = useState(false);
  const context = useContext(AuthContext)

    return(

        <Navbar className="navbar" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand onMouseEnter={() => setShowTypewriter(true)} onMouseLeave={() => setShowTypewriter(false)} className='brand' as={Link} to="/">STEPHEN KING's</Navbar.Brand>
          {showTypewriter && (
                <div>
                  <img src={require('../img/literatura.png')} height="25" className="navbar-typewriter" style={{color: "#fff !important"}} alt="Ícono de una máquina de escribir" />
                </div>
            )}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features"></Nav.Link>
              <Nav.Link href="#pricing"></Nav.Link>
            </Nav>
            <Nav>
            {showBalloon && (
                <div>
                  <img src={require('../img/globo.png')} height="20" className="navbar-balloon" style={{color: "#fff !important"}} alt="Ícono de un globo" />
                </div>
              )}
            {showShip && (
            <div >
              <img src={require('../img/origami.png')} height="30" className="navbar-ship" style={{color: "#fff !important"}} alt="Ícono de un barco de papel" />
            </div>
            )}
            {showCujo && (
                <div>
                  <img src={require('../img/san-bernardo.png')} height="20" className="navbar-cujo" style={{color: "#fff !important"}} alt="Ícono de una perro San Bernardo" />
                </div>
            )}
            {showVampire && (
                <div>
                  <img src={require('../img/vampiro.png')} height="20" className="navbar-vampire" style={{color: "#fff !important"}} alt="Ícono de un vampiro" />
                </div>
            )}
              <Nav.Link as={Link} className="navbar-link" to='/' onMouseEnter={() => setShowBalloon(true)} onMouseLeave={() => setShowBalloon(false)}>INICIO</Nav.Link>
              {
                !context.login &&
                <>
                  <Nav.Link as={Link} className="navbar-link" to='/login' onMouseEnter={() => setShowShip(true)} onMouseLeave={() => setShowShip(false)}>INICIAR SESIÓN</Nav.Link>
                  <Nav.Link as={Link} className="navbar-link" to='/registro' onMouseEnter={() => setShowCujo(true)} onMouseLeave={() => setShowCujo(false)}>REGISTRARSE</Nav.Link>
                </>
              }
              {
                context.login &&
                <>
                  <Nav.Link as={Link} className="navbar-link" onClick={context.handleLogout} onMouseEnter={() => setShowShip(true)} onMouseLeave={() => setShowShip(false)}>CERRAR SESIÓN</Nav.Link>
                  <Nav.Link as={Link} className="navbar-link" to='/productos/alta' onMouseEnter={() => setShowVampire(true)} onMouseLeave={() => setShowVampire(false)}>ALTA PRODUCTOS</Nav.Link>
                </>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar