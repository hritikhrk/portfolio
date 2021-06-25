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
            exact="true"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggle}
          >
            Home
          </SidebarLink>
          <SidebarLink
            to="about"
            exact="true"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="resume"
            exact="true"
            offset={-55}
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggle}
          >
            Resume
          </SidebarLink>
          <SidebarLink
            to="interests"
            exact="true"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggle}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            to="contact"
            exact="true"
            offset={-50}
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
