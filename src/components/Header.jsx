import React from 'react';
import styled from 'styled-components';


const Header = () => (
  <Nav>
    <Logo src="/assets/logo.jpg" alt="Ignite Impact Logo" />
    <button className="signin-btn">Sign In</button>
  </Nav>
);

export default Header;

const Nav = styled.header`
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  .logo {
    height: 50px;
  }

  .signin-btn {
    background: none;
    border: 2px solid #1F41BB;
    color: #1F41BB;
    font-weight: 600;
    padding: 8px 20px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .signin-btn:hover {
    background: #1F41BB;
    color: white;
  }
`;

const Logo = styled.img`
  height: 50px;
  margin-bottom: 10px;
`;