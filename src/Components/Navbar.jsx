import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function BasicExample() {
  
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  
  return (

    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Personajes de Pokemón</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link>
            <NavLink
              className={ setActiveClass } end to="/">Home
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              className={ setActiveClass } to="/pokemones">Pokemones
            </NavLink>
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}