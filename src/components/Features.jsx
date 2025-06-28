import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Section = styled.section`
  background: ${theme.colors.sectionBackground};
  padding: 60px 20px;
`;

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-around;
`;

const Card = styled.div`
  flex: 1 1 250px;
  background: ${theme.colors.white};
  padding: 30px;
  border-radius: 16px;
  border: 1px solid rgba(31, 65, 187, 0.15);
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 36px rgba(31, 65, 187, 0.3);
    border-color: rgba(31, 65, 187, 0.3);
  }
`;

const Icon = styled.img`
  width: 60px;
  margin-bottom: 20px;
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
  <Section id="features">
    <Wrapper>
      <Card>
        <Icon src="/assets/internship-icon.svg" alt="Internship Icon" />
        <Title>Internships</Title>
        <Description>Find the best internship opportunities tailored for students to jumpstart your career.</Description>
      </Card>
      <Card>
        <Icon src="/assets/jobs-icon.svg" alt="Jobs Icon" />
        <Title>Jobs & Volunteering</Title>
        <Description>Explore jobs and volunteer roles to gain valuable experience and grow your network.</Description>
      </Card>
      <Card>
        <Icon src="/assets/grants-icon.svg" alt="Grants Icon" />
        <Title>Grants & Competitions</Title>
        <Description>Apply for grants and participate in pitch competitions to fund and showcase your ideas.</Description>
      </Card>
    </Wrapper>
  </Section>
);

export default Features;
