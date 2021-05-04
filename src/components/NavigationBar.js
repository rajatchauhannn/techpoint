import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ContactsNav, Styles } from './NavigationBarStyles';

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" className="sticky-nav">
      <div className="logo-container">
        <img src='/img/techpointlogo.png' alt="logo" />
      </div>
      <Navbar.Brand href="/">TECHPOINT IT SOLUTIONS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="navlinks ml-auto">
          <Nav.Link active href="/">ABOUT US</Nav.Link>
          <NavDropdown className = "dropdown-button" title="SOLUTIONS" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/virtualization/">Virtualization</NavDropdown.Item>
            <NavDropdown.Item href="/networking/">Networking</NavDropdown.Item>
            <NavDropdown.Item href="/storage/">Storage</NavDropdown.Item>
            <NavDropdown.Item href="/security/">Security</NavDropdown.Item>
            <NavDropdown.Item href="/enterprise management/">Enterprise Management</NavDropdown.Item>
            <NavDropdown.Item href="/cloud solutions/">Cloud Solutions</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/" >SUPPORT</Nav.Link>
          <Nav.Link href="/" >SERVICES</Nav.Link>
          <Nav.Link href="/contacts" >CONTACT US</Nav.Link>
        </Nav>
        <ContactsNav>Email: kuldeep@techpointitsolutions.in <br /> Mobile: +91 9650101559</ContactsNav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)


