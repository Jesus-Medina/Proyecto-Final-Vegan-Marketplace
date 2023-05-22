import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar expand="lg" id="navbar-vegano" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="logo"
                        src="https://img.icons8.com/color/48/gailan.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{""}
                    TheVeganMarket
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto navbar-link-container">
                        <NavLink className="nav_link " to='/productos'>Productos <span></span></NavLink>
                        <NavLink className="nav_link" to='/nosotros'>Nosotros</NavLink>
                        <NavLink className="nav_link" to='/contacto'>Contacto</NavLink>
                        <NavLink className="nav_link" to='/perfil'>Mi Perfil</NavLink>
                        <NavLink className="nav_link" to='/login'>Login</NavLink>
                        <NavLink className="nav_link" to='/registro'>Registrarse</NavLink>

                        {/* <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">No carne</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Vegan filete
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Verdurits</NavDropdown.Item>

                        </NavDropdown> */}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;