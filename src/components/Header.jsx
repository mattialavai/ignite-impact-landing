import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo src="/assets/logo.jpg" alt="Ignite Impact Logo" />
      <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </Hamburger>

      <Menu open={menuOpen}>
        <NavLink href="#features">Features</NavLink>
        <NavLink href="#how-it-works">How It Works</NavLink>
        <NavLink href="#download">Download</NavLink>
        <SignInButton href="#download">Sign In</SignInButton>
      </Menu>
    </Nav>
  );
};

const Nav = styled.header`
  background: ${theme.colors.white};
  padding: 1.2rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Logo = styled.img`
  height: 50px;
`;

const Hamburger = styled.div`
  display: none;
  font-size: 28px;
  cursor: pointer;
  color: ${theme.colors.primary};

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    background: ${theme.colors.white};
    flex-direction: column;
    padding: 20px;
    border-top: 1px solid #eee;
    display: ${({ open }) => (open ? 'flex' : 'none')};
  }
`;

const NavLink = styled.a`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    color: #163290;
  }
`;

const SignInButton = styled.a`
  border: 2px solid ${theme.colors.primary};
  padding: 8px 20px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  color: ${theme.colors.primary};
  transition: all 0.3s;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

export default Header;
