import { Navbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const CustomNavbar = () => {
  return (
   <Navbar style={{ backgroundColor: '#006400' }} variant="dark" expand="lg" className="py-3">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img
            src="./image/bla.png"
            alt="Davao Central College Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span>Davao Central College</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/academics">Academics</Nav.Link>
            <Nav.Link as={NavLink} to="/admission">Admission</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar