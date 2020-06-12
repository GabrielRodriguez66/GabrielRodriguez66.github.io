import React from 'react';
import {Container} from 'components/common';
import {Details, SkillsWrapper, Wrapper} from './styles';

export const Skills = () => (
  <Wrapper id="skills">
    <SkillsWrapper as={Container}>
      <Details>
        <h1>Skills</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s
          standard dummy.
        </p>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
