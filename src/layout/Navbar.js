import { Container, Navbar, Nav } from "react-bootstrap"
import logo from "../images/ah_logo.png"

export default function Navbar_NotAuthed() {
  return (
    <Container>
      <Navbar expand="lg">
        <img
          src={logo}
          className="m-3"
          width="45"
          //   height="45"
          alt="Aggie Heroes Logo"
        />
        <Navbar.Brand id="brand" className="me-auto" href="/">
          Aggie Heroes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href={"/about"}>About Us</Nav.Link>
            <Nav.Link href={"/login"}>Login</Nav.Link>
            <Nav.Link href={"/register"}>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
