import React from "react";

import {
  NavContainer,
  NavLogo,
  Logo,
  NavTitle,
  NavContact,
  NavLink
} from "./NavbarElements";

import logo from "../../images/logoW.png"

const Navbar = () => {
  return (
    <>
      <NavContainer>

        <NavLogo>
          <Logo src = {logo}/>
        </NavLogo>
        <NavTitle>
          <h1>Devicist Design Works</h1>
        </NavTitle>
        <NavContact>
        <NavLink
        to="about"
        smooth={true}
        duration={500}
        spy={true}>
          <h1>Contact Us</h1>
        </NavLink>
        </NavContact>
        
      </NavContainer>
        
    </>
  );
};

export default Navbar;
