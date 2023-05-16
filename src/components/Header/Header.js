import "./Header.scss"
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="http://localhost:3000">TRIPBLOG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="">Home</Nav.Link>
            <Nav.Link href="#aboutus">About us</Nav.Link>
            <Nav.Link href="#ourmission">Our mission</Nav.Link>
            <Nav.Link as={NavLink} to="/trips">Viaggi</Nav.Link>
            <Nav.Link as={NavLink} to="/users">Utenti</Nav.Link>
            <NavDropdown className="dropdown" title="Dicci la tua" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
