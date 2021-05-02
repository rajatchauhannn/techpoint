import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
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
            <Nav.Item><Nav.Link href="/">ABOUT US</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/">SOLUTIONS</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/">SUPPORT</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/">SERVICES</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/">CONTACT US</Nav.Link></Nav.Item>
          </Nav>
          <ContactsNav>Email: kuldeep@techpointitsolutions.in <br /> Mobile: +91 9650101559</ContactsNav>
        </Navbar.Collapse>
    </Navbar>
  </Styles>
)


