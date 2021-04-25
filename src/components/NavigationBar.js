import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../techpointlogo.png';



const ContactsNav = styled.div`
  text-align: right;
  padding-left: 50px;
  color: white;
`;

const Styles = styled.div`
  .navlinks { diplay: grid; grid-gap: 10px; padding-left: 50px; padding-right: 50px; font-size: 15px; border-color: #91A937; border-size: 1px; border-style: inset; border-radius: 10px; justify-content: center;}

  .navbar { background-image: linear-gradient(black, #91A937, #7F7F7D, #7F7F7D); background-repeat: no-repeat;
    background-attachment: fixed; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #91A937;
    &:hover { color: white; }
    
  }
  .navbar-brand {
    padding-right: 50px;
    font-size: 1.4em;
    color: #91A937;
    &:hover { color: white; }
    display: flex;
    align-items: center;
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .navbar-brand>img {
    padding: 7px 14px;
  }

`;
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
          <ContactsNav>Email: kuldeep@techpointitsolutions.in <br /> +91 9650101559</ContactsNav>
        </Navbar.Collapse>
    </Navbar>
  </Styles>
)


