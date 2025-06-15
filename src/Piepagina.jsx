import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

const Piepagina = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-2">
              © {new Date().getFullYear()} Universidad Mayor de San Andres
            </p>
            <p className="mb-2">
               Carrera de Informatica
            </p>
            <Nav className="justify-content-center">
              <NavItem>
                <NavLink href="/about" className="text-white">
                  Acerca de
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact" className="text-white">
                  Contacto
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/privacy" className="text-white">
                  Política de Privacidad
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Piepagina;