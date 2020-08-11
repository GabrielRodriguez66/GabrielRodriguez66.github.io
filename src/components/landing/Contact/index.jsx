import React from "react";
import { Container } from "components/common";
import contact from "assets/illustrations/contact.svg";
import { Details, Thumbnail, Wrapper } from "./styles";
import ContactForm from "./ContactForm";

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m Gabriel, a Computer Science and Engineering undergrad!" />
    </Thumbnail>
  </Wrapper>
);
