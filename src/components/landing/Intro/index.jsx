import React from 'react';
import {Header} from 'components/theme';
import {Button, Container} from 'components/common';
import profilePic from 'assets/illustrations/me.png';
import {Details, IntroWrapper, Thumbnail, Wrapper} from './styles';
import {Links} from "components/theme/Footer/styles";
import social from "./social";
import pdf from "../../../../static/resume.pdf";

export const Intro = () => (
    <Wrapper>
        <Header />
        <IntroWrapper as={Container}>
            <Details>
                <h1>Hi There!</h1>
                <h4>I’m Gabriel, a Computer Science & Engineering undergrad!</h4>
                <Links>
                    <Button>
                        <a href = {pdf} rel="noreferrer" target = "_blank" style={{ color: 'inherit' }}>
                            Resume
                        </a>
                    </Button>
                    {social.map(({ id, name, link, icon }) => (
                        <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
                            <img width="24" src={icon} alt={name} />
                        </a>
                    ))}
                </Links>
            </Details>
            <Thumbnail>
                <img src={profilePic} alt="I’m Gabriel and I’m a Computer Science and Engineering undergrad!" />
            </Thumbnail>
        </IntroWrapper>
    </Wrapper>
);
