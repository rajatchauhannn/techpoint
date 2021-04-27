import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../techpointlogo.png';
import { ContactsNav, Styles } from './NavigationBarStyles';

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" className="sticky-nav">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <Navbar.Brand href="/">Techpoint IT Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="navlinks ml-auto">
            <Nav.Item><Nav.Link href="/about">ABOUT US</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/">SOLUTIONS</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/">SUPPORT</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/">SERVICES</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/contacts">CONTACT US</Nav.Link></Nav.Item>
          </Nav>
          <ContactsNav>Email: kuldeep@techpointitsolutions.in <br /> Mobile: +91 9650101559</ContactsNav>
        </Navbar.Collapse>
    </Navbar>
  </Styles>
)


