import React from 'react';
import {Container} from 'components/common';
import {Details, AboutWrapper, Wrapper} from './styles';

export const About = () => (
  <Wrapper id="about">
    <AboutWrapper as={Container}>
      <Details>
        <h1>About Me</h1>
        <p>
            Current student pursuing a degree on Computer Science and Engineering at the University of Puerto Rico - Mayagüez.
            Mathematics have always been my passion, that's why I am also doing a curricular sequence in Probability and
            Statistics. I am consistently looking forward to learn new concepts and open for any opportunity.
        </p>
      </Details>
    </AboutWrapper>
  </Wrapper>
);
