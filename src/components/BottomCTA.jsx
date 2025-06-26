import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const CTA = styled.div`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: 50px 20px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 12px;
  max-width: 700px;
  margin: 50px auto 40px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #163290;
    transform: scale(1.05);
  }
`;

const BottomCTA = () => (
  <CTA
    onClick={() => window.open('#', '_blank')}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => { if (e.key === 'Enter') window.open('#', '_blank'); }}
    aria-label="Download Ignite Impact App"
  >
    Download Ignite Impact Now
  </CTA>
);

export default BottomCTA;
