import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Navbar className="main_nav" expand="lg">
      <div className="container">
        <Navbar.Brand href="#home">
          <h2 className="nav_brand">kamrul hasan</h2>
        </Navbar.Brand>
        <Navbar.Toggle
          className="bg-primary ml-auto "
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav_items mr-2" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="nav_items mr-2" href="#about">
              about me
            </Nav.Link>
            <Nav.Link className="nav_items mr-2" href="#projects">
              projects
            </Nav.Link>
            <Nav.Link className="nav_items mr-2" href="#link">
              blogs
            </Nav.Link>
            <Nav.Link className="nav_items mr-2" href="#contacts">
              contacts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;
