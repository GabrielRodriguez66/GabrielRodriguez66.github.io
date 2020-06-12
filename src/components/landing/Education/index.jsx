import React from 'react';
import {Container} from 'components/common';
import {Details, EducationWrapper, Thumbnail, Wrapper} from './styles';
import uprmLogo from 'assets/illustrations/uprm.png';

export const Education = () => (
    <Wrapper id="education">
        <EducationWrapper as={Container}>
            <Details>
                <h1>Education</h1>
                <p>
                    University of Puerto Rico, Mayagüez, Puerto Rico<br/>
                    <em>Bachelor’s Degree in Computer Science and Engineering</em><br/>
                    <em>Curricular Sequence in Mathematical Probability and Statistics</em><br/><br/>

                    GPA: 3.89/4.00<br/>
                    Expected Graduation Date: May 2022
                </p>
            </Details>
            <Thumbnail>
                <img src={uprmLogo} alt="UPRM" />
            </Thumbnail>
        </EducationWrapper>
    </Wrapper>
);
