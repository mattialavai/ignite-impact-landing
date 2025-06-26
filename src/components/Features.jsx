import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Section = styled.section`
  background-color: ${theme.colors.sectionBackground};
  padding: 60px 20px;
`;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
`;

const Card = styled.div`
  flex: 1 1 250px;
  background-color: ${theme.colors.white};
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;

  &:hover {
    box-shadow: 0 6px 18px rgba(31, 65, 187, 0.4);
    transform: translateY(-6px);
    transition: all 0.3s ease;
  }
`;

const Title = styled.h3`
  color: ${theme.colors.primary};
  margin-bottom: 15px;
  font-size: 22px;
`;

const Description = styled.p`
  color: ${theme.colors.secondaryText};
  font-size: 16px;
  line-height: 1.4;
`;

const Features = () => (
  <Section>
    <Wrapper>
      <Card>
        <Title>Internships</Title>
        <Description>Find the best internship opportunities tailored for students to jumpstart your career.</Description>
      </Card>
      <Card>
        <Title>Jobs & Volunteering</Title>
        <Description>Explore jobs and volunteer roles to gain valuable experience and grow your network.</Description>
      </Card>
      <Card>
        <Title>Grants & Competitions</Title>
        <Description>Apply for grants and participate in pitch competitions to fund and showcase your ideas.</Description>
      </Card>
    </Wrapper>
  </Section>
);

export default Features;
