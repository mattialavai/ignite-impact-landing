import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Section = styled.section`
  background-color: ${theme.colors.sectionBackground};
  padding: 60px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 36px;
  color: ${theme.colors.primary};
  margin-bottom: 40px;
`;

const TestimonialText = styled.p`
  font-style: italic;
  color: ${theme.colors.secondaryText};
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto;
`;

const Author = styled.p`
  margin-top: 15px;
  font-weight: 700;
  color: ${theme.colors.primary};
`;

const Testimonials = () => (
  <Section>
    <Title>What Our Users Say</Title>
    <TestimonialText>
      “Ignite Impact helped me land an internship that changed my career path. The platform is easy to use and packed with great opportunities!”
    </TestimonialText>
    <Author>- Sarah M., Student</Author>
  </Section>
);

export default Testimonials;
