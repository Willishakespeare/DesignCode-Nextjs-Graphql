import React from 'react';
import styled from '@Styles/styled';
import NavigationMenu from '@Molecules/NavigationMenu';
import Button from '@Atoms/Button';
import SearchNav from '@Molecules/SearchNav';
import Icon from '@Atoms/Icon';

const StyledNavigation = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #1e1e1e66;
  width: 100%;
  height: 100px;
  .LogoIMGClass {
    @media (max-width: 1024px) {
      display: none;
    }
  }
  div:nth-of-type(2) {
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
  justify-content: flex-end;
  width: 527px;
  @media (max-width: 1024px) {
    width: 280px;
  }
  @media (max-width: 424px) {
    div {
      display: none;
    }
  }
  button {
    margin-right: 20px;
  }
`;

const Navigation: React.FC = () => {
  return (
    <StyledNavigation>
      <NavigationMenu />
      <Icon icon="logo" className="LogoIMGClass" />

      <StyledContainer>
        <SearchNav />
        <Button>LOGIN</Button>
      </StyledContainer>
    </StyledNavigation>
  );
};

export default Navigation;
