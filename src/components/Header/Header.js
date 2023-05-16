import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
            <Nav.Link href="http://localhost:3000/#aboutus">About us</Nav.Link>
            <Nav.Link href="http://localhost:3000/#ourmission">Our mission</Nav.Link>
            <Nav.Link as={NavLink} to="/trips">Viaggi</Nav.Link>
            <Nav.Link as={NavLink} to="/users">Utenti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
