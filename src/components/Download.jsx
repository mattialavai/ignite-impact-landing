import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

// ✅ Styled components go first!
const DownloadSection = styled.section`
  background-color: ${theme.colors.sectionBackground};
  padding: 60px 20px;
  text-align: center;

  h2 {
    font-size: 32px;
    color: ${theme.colors.primary};
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    color: ${theme.colors.secondaryText};
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const StoreButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 480px) {
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
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
    width: 100px;
    
  }
`;


const Download = () => (
  <DownloadSection id="download">
    <h2>Download the App Now</h2>
    <p>
      Get access to top internship, job, and volunteering opportunities right from your phone.
    </p>

    <StoreButtonGroup>
      <StoreButton
        href="https://play.google.com/store/apps/details?id=your_app_id"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/playstore.svg" alt="Get it on Google Play" />
      </StoreButton>

      <StoreButton
        href="https://apps.apple.com/app/id_your_app_id"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/applestore.svg" alt="Download on the App Store" />
      </StoreButton>
    </StoreButtonGroup>
  </DownloadSection>
);

export default Download;
