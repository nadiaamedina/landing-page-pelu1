
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">NAMAFE hairdressing school</Navbar.Brand>
        <img src="https://st4.depositphotos.com/14846838/22182/v/450/depositphotos_221821616-stock-illustration-man-standing-holding-comb-scissor.jpg"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            alt="Logo Escuela Peluquería" />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#galeria">Cursos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
