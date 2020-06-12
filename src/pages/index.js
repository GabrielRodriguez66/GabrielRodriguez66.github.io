import React from "react"
import {Layout} from 'components/common';
import {Contact, Intro, Projects, Skills} from 'components/landing';
import {About} from "../components/landing/About";
import {Education} from "../components/landing/Education";

export default () => (
    <Layout>
        <Intro />
        <About />
        <Education/>
        <Skills />
        <Projects />
        <Contact />
    </Layout>
);

