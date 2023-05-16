import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <Navbar bg="dark" expand="lg" id="navbar-vegano">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="logo"
                        src="/bro.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{""}
                    TheVeganMarket</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto ml-4">
                        <NavLink className="nav_link" to='/login'>Login</NavLink>

                        <NavLink className="nav_link" to='/registro'>Registrarse</NavLink>

                        <NavLink className="nav_link" to='/perfil'>Mi Perfil</NavLink>

                        <NavLink className="nav_link" to='/contacto'>Contacto</NavLink>


                        <NavLink className="nav_link" to='/nosotros'>Nosotros</NavLink>

                        <NavLink className="nav_link" to='/nosotros'>Productos</NavLink>
                       
                       
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