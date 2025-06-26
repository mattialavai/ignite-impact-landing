import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const FooterWrapper = styled.footer`
  padding: 20px;
  text-align: center;
  font-size: 14px;
  color: ${theme.colors.secondaryText};
`;

const Footer = () => (
  <FooterWrapper>
    © {new Date().getFullYear()} Ignite Impact. All rights reserved.
  </FooterWrapper>
);

export default Footer;
