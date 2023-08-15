/* eslint-disable @next/next/no-img-element */
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="custom-header-dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img src="/logo.png" alt="Logo" width="150" height="auto" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/">About</Nav.Link>
          <NavDropdown title="Categories" id="nav-dropdown">
            <NavDropdown.Item href="/">Electronics</NavDropdown.Item>
            <NavDropdown.Item href="/">Clothing</NavDropdown.Item>
            <NavDropdown.Item href="/">Furniture</NavDropdown.Item>
            <NavDropdown.Item href="/">Books</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
