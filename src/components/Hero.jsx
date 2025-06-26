import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const HeroSection = styled.section`
  padding: 80px 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;


const Title = styled.h1`
  font-size: 48px;
  color: ${theme.colors.primary};
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 20px;
  max-width: 600px;
  margin: 0 auto 40px;
  color: ${theme.colors.secondaryText};
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const StoreButton = styled.a`
  display: inline-block;
  width: 200px;
  height: auto;
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 80px;
  }
`;


const Hero = () => (
  <HeroSection>
    <Title>Ignite Impact</Title>
    <Subtitle>
      Connecting students and young professionals with the best internships, jobs, volunteer roles, grants, and pitch competitions worldwide.
    </Subtitle>
        <ButtonGroup>
          <StoreButton href="https://play.google.com/store/apps/details?id=your_app_id" target="_blank" rel="noopener noreferrer">
            <img src="/assets/playstore.svg" alt="Get it on Google Play" />
          </StoreButton>

          <StoreButton href="https://apps.apple.com/app/id_your_app_id" target="_blank" rel="noopener noreferrer">
            <img src="/assets/applestore.svg" alt="Download on the App Store" />
          </StoreButton>
       </ButtonGroup>

  </HeroSection>
);

export default Hero;
