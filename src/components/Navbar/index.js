import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">HRitiK</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="home" exact='true' offset={-80} spy={true} smooth={true} duration={500}>
                Home
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about" exact='true' offset={-80} spy={true} smooth={true} duration={500}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="resume" exact='true' offset={-80} spy={true} smooth={true} duration={500}>
                Resume
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="interests" exact='true' offset={-80} spy={true} smooth={true} duration={500}>
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact" isDynamic='true' exact='true' offset={-80} spy={true} smooth={true} duration={500}>
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
