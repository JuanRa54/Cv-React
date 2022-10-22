import { Navbar, Nav, Container } from "react-bootstrap";

import { Outlet, Link } from "react-router-dom";

const NavBarExample = () => {
  return (
    <>
      <Navbar   style={{
        backgroundColor: "black "
      }} className="navbar navbar-expand" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar navbar-expand">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contacto
              </Nav.Link>
              <Nav.Link as={Link} to="/acercade">
                Acercade
              </Nav.Link>
              <Nav.Link as={Link} to="/Hobbies">
                Hobbies
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
};
export default NavBarExample;
