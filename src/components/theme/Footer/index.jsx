import React from "react";
import { Container } from "components/common";
import { Details, Flex, Wrapper } from "./styles";

export const Footer = () => (
    <Wrapper>
      <Flex as={Container}>
        <Details>
          <h2>Gabriel E Rodriguez Ortiz</h2>
          <span>
          © All rights are reserved | Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> | {new Date().getFullYear()}
          </span>
        </Details>
      </Flex>
    </Wrapper>
);
