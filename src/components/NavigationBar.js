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
            <NavDropdown.Item  href="Virtualization/">Virtualization</NavDropdown.Item>
            <NavDropdown.Item href="Networking/">Networking</NavDropdown.Item>
            <NavDropdown.Item href="Storage/">Storage</NavDropdown.Item>
            <NavDropdown.Item href="Security/">Security</NavDropdown.Item>
            <NavDropdown.Item href="Enterprise Management/">Enterprise Management</NavDropdown.Item>
            <NavDropdown.Item href="Cloud Solutions/">Cloud Solutions</NavDropdown.Item>
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


