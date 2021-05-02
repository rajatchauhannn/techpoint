import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ContactsNav, Styles } from './NavigationBarStyles';

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" className="sticky-nav">
      <div className="logo-container">
        <img src='img/techpointlogo.png' alt="logo" />
      </div>
      <Navbar.Brand href="/">TECHPOINT IT SOLUTIONS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="navlinks ml-auto">
          <Nav.Link active href="/">ABOUT US</Nav.Link>
          <NavDropdown title="SOLUTIONS" id="collasible-nav-dropdown">
            <NavDropdown.Item  href="#action/3.1">Virtualization</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Networking</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Storage</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">Security</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.5">Enterprise Management</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Cloud Solutions</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/" >SUPPORT</Nav.Link>
          <Nav.Link href="/" >SERVICES</Nav.Link>
          <Nav.Link href="/" >CONTACT US</Nav.Link>
        </Nav>
        <ContactsNav>Email: kuldeep@techpointitsolutions.in <br /> Mobile: +91 9650101559</ContactsNav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)


