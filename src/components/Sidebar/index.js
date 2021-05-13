import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggle}
          >
            Home
          </SidebarLink>
          <SidebarLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="resume"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggle}
          >
            Resume
          </SidebarLink>
          <SidebarLink
            to="interests"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggle}
          >
            Interests
          </SidebarLink>
          <SidebarLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggle}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
