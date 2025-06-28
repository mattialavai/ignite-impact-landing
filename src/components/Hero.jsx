import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const HeroSection = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const HeroImage = styled.img`
  flex: 1;
  max-width: 450px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${theme.colors.primary};
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  color: ${theme.colors.secondaryText};
  line-height: 1.5;
  margin-bottom: 30px;
  max-width: 600px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }
`;


const StoreButton = styled.a`
  display: inline-block;
  width: 180px;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  img {
    width: 100%;
    display: block;
  }

  &:hover {
    transform: scale(1.05);
   
  }

  @media (max-width: 480px) {
    width: 100px;
  
  }
`;

const Hero = () => (
  <HeroSection id="hero">
    <TextContent>
      <Title>Ignite Impact</Title>
      <Subtitle>
        Connecting students and young professionals with the best internships, jobs,
        volunteer roles, grants, and pitch competitions worldwide.
      </Subtitle>

      <ButtonGroup>
        <StoreButton href="https://play.google.com/store/apps/details?id=your_app_id">
          <img src="/assets/playstore.svg" alt="Get it on Google Play" />
        </StoreButton>
        <StoreButton href="https://apps.apple.com/app/id_your_app_id">
          <img src="/assets/applestore.svg" alt="Download on the App Store" />
        </StoreButton>
      </ButtonGroup>
    </TextContent>

    <HeroImage src="/assets/hero-illustration.svg" alt="Career growth illustration" />
  </HeroSection>
);

export default Hero;
