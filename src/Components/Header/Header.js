import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../logo.ico"

const Header = () => {
  return (
    <div>

<Navbar bg="dark" variant="dark" expand="lg">
  <Container>
  <Navbar.Brand to="/home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' '}
      FreshStock
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link to="/home">Home</Nav.Link>
      <Nav.Link to="/manageitems">Manage Items</Nav.Link>
    <Nav.Link to="/additem">Add Item</Nav.Link>
      </Nav>
      <Nav className="ms-auto">
    <Nav.Link to="/manageitems">Manage Items</Nav.Link>
    <Nav.Link to="/additem">Add Item</Nav.Link>
    <Nav.Link to="/myitems">My items</Nav.Link>
    <Nav.Link to="/login">Login</Nav.Link>
    <Nav.Link to="/logout">Logout</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>      
    </div>
  );
};

export default Header;
