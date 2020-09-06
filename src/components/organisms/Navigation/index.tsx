import React from 'react';
import styled from '@Styles/styled';
import NavigationMenu from '@Molecules/NavigationMenu';
import Button from '@Atoms/Button';
import SearchNav from '@Molecules/SearchNav';
import Icon from '@Atoms/Icon';
import Link from 'next/link';

const StyledNavigation = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #1e1e1e66;
  width: 100vw;
  height: 100px;
  .LogoIMGClass {
    @media (max-width: 1024px) {
      display: none;
    }
  }
  div:nth-of-type(2) {
    padding: 0px;
    margin: auto;

    svg {
      path:nth-of-type(2) {
        fill: ${({ theme }) => theme.colors.fill.primary};
      }
    }
  }
`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 420px;
  margin: auto;
  @media (max-width: 1024px) {
    width: max-content;
  }
  @media (max-width: 769px) {
    width: 100%;
    justify-content: space-evenly;
  }

  @media (min-width: 769px) {
    button:nth-of-type(1) {
      display: none;
    }
  }
`;

const Navigation: React.FC = () => {
  return (
    <StyledNavigation>
      <NavigationMenu />
      <Icon icon="logo" className="LogoIMGClass" />
      <StyledContainer>
        <Button icon="home" />
        <SearchNav />
        <Link href="/login">
          <Button>LOGIN</Button>
        </Link>
      </StyledContainer>
    </StyledNavigation>
  );
};

export default Navigation;
