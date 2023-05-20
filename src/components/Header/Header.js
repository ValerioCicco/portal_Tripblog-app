import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.scss";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="http://localhost:3000">
          <div className="d-flex align-items-center">
            <img src="logo.png" style={{width: "35px", marginRight: "5px"}}/>
          TRIPBLOG</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="">Home</Nav.Link>
            {location.pathname === "/" ? <Nav.Link href="/#aboutus">About us</Nav.Link> : <></>}
            {location.pathname === "/" ? <Nav.Link href="/#ourmission">Our mission</Nav.Link> : <></>}
            <Nav.Link as={NavLink} to="/trips">Viaggi</Nav.Link>
            <Nav.Link as={NavLink} to="/users">Utenti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
