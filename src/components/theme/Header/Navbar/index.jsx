import React from "react";
import { Container } from "components/common";
import NavbarLinks from "../NavbarLinks";
import { Wrapper } from "./styles";
import { animateScroll as scroll } from "react-scroll";

const Navbar = () => (
  <Wrapper as={Container}>
    <button type="button" className="link-button" onClick={scroll.scrollToTop}>Gabriel Rodriguez Ortiz</button >
    <NavbarLinks desktop />
  </Wrapper>
);

export default Navbar;
