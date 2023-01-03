import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import './Header.css';

function Header() {
    return (
      <nav lassName="NavbarItems" >
        <h1 className="navbar-logo">E Square</h1>
        <ul className='nav-menu'>
            <li><AnchorLink href='#' className="nav-items">Home</AnchorLink>
            </li>
            <li><AnchorLink href='#services' className="nav-items">Services</AnchorLink>
            </li>
            <li>
            <AnchorLink href='#gallery' className="nav-items">Gallery</AnchorLink>
            </li>
            <AnchorLink href='#' className="nav-items">Contact</AnchorLink>
        </ul>
      </nav>
    );
  }
  
  export default Header;

  