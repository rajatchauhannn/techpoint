import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../techpointlogo.png';


const Styles = styled.div`
  .navbar { background-image: linear-gradient(black, #91A937, #7F7F7D, #7F7F7D); background-repeat: no-repeat;
    background-attachment: fixed; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #91A937;
    &:hover { color: white; }
    
  }
  .navbar-brand {
    
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
    <Navbar expand="lg" className= "sticky-nav">
    <div className="logo-container">
        <img src = { logo } alt = "" />
    </div>
      <Navbar.Brand href="/">Techpoint IT Solutions</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/contacts">Contacts</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
