import React from 'react';
import styled from '@Styles/styled';
import NavigationMenu from '@Molecules/NavigationMenu';
import LogoIMG from '@Assets/icons/logo.svg';
import Button from '@Atoms/Button';
import SearchNav from '@Molecules/SearchNav';

const StyledNavigation = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #1e1e1e66;
  width: 100%;
  height: 110px;
  svg {
    g {
      path:nth-of-type(2) {
        fill: ${({ theme }) => theme.colors.fill.primary};
      }
    }
  }
`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 527px;
`;

const Navigation: React.FC = () => {
  return (
    <StyledNavigation>
      <NavigationMenu />
      <LogoIMG />
      <StyledContainer>
        <SearchNav />
        <Button>LOGIN</Button>
      </StyledContainer>
    </StyledNavigation>
  );
};

export default Navigation;
