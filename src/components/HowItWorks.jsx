import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Section = styled.section`
  padding: 60px 20px;
`;

const Title = styled.h2`
  font-size: 36px;
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: 50px;
`;

const StepsWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 30px;
`;

const StepCard = styled.div`
  flex: 1 1 280px;
  background-color: ${theme.colors.white};
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(31, 65, 187, 0.1);
  border: 1px solid rgba(31, 65, 187, 0.1);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 32px rgba(31, 65, 187, 0.25);
    border-color: rgba(31, 65, 187, 0.3);
  }
`;

const StepNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 15px;
`;

const StepTitle = styled.h4`
  font-size: 22px;
  margin-bottom: 10px;
`;

const StepDescription = styled.p`
  font-size: 16px;
  color: ${theme.colors.secondaryText};
  line-height: 1.4;
`;

const HowItWorks = () => (
  <Section id="how-it-works">
    <Title>How It Works</Title>
    <StepsWrapper>
      <StepCard>
        <StepNumber>1</StepNumber>
        <StepTitle>Sign Up</StepTitle>
        <StepDescription>Create your profile to start exploring opportunities tailored to you.</StepDescription>
      </StepCard>
      <StepCard>
        <StepNumber>2</StepNumber>
        <StepTitle>Discover Opportunities</StepTitle>
        <StepDescription>Browse internships, jobs, volunteer roles, grants, and pitch competitions in one place.</StepDescription>
      </StepCard>
      <StepCard>
        <StepNumber>3</StepNumber>
        <StepTitle>Apply & Grow</StepTitle>
        <StepDescription>Apply easily and kickstart your career growth with real-world experience.</StepDescription>
      </StepCard>
    </StepsWrapper>
  </Section>
);

export default HowItWorks;
