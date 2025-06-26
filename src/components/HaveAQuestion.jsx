import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Section = styled.section`
  background-color: ${theme.colors.sectionBackground};
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 32px;
  color: ${theme.colors.primary};
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${theme.colors.secondaryText};
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const AskButton = styled.a`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #163290;
  }
`;

const HaveAQuestion = () => (
  <Section>
    <Title>Have a Question in Mind?</Title>
    <Subtitle>
      We’re here to help! Reach out to us if you have any questions about Ignite Impact, how it works, or how to get started.
    </Subtitle>
    <AskButton href="mailto:support@igniteimpact.app">Ask Us Anything</AskButton>
  </Section>
);

export default HaveAQuestion;
