import React from "react";
import { Wrapper } from "./styles";
import { Link } from "react-scroll";

const scrollDuration = 1000;
const activeClass="active";
const NavbarLinks = ({ desktop }) => (
    <Wrapper desktop={desktop}>
      <Link to="about" spy={true} smooth={true} duration={scrollDuration} activeClass={activeClass}>About</Link>
      <Link to="education" spy={true} smooth={true} duration={scrollDuration} activeClass={activeClass}>Education</Link>
      <Link to="skills" spy={true} smooth={true} duration={scrollDuration} activeClass={activeClass}>Skills</Link>
      <Link to="projects" spy={true} smooth={true} duration={scrollDuration} activeClass={activeClass}>Projects</Link>
      <Link to="contact" spy={true} smooth={true} duration={scrollDuration} activeClass={activeClass}>Contact</Link>
    </Wrapper>
);

export default NavbarLinks;
