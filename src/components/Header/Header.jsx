import { Button } from 'bootstrap';
import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
  
  function Header() {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Container  className='header-ee'>
          <Navbar.Brand href="#home"> E Square </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
            </Nav>
            <Nav>
            {/* <Nav.Link href="#link" type='button'> Sign Up</Nav.Link> */}
            <Nav.Link href="#link"> <i className="fa fa-brands fa-facebook"></i></Nav.Link>
            <Nav.Link href="#link"> <i className="fa fa-brands fa-twitter"></i></Nav.Link>
            <Nav.Link href="#link"> <i className="fa fa-brands fa-instagram"></i></Nav.Link>
            {/* <RouteNavItem className="headerLinks" eventKey={1} href="/">Home</RouteNavItem> */}
            </Nav>
            <div>

            {/* <Button variant="outline-success">Search</Button> */}
            </div>
          </Navbar.Collapse>
        </Container> 
      </Navbar>
    );
  }
  
  export default Header;

  