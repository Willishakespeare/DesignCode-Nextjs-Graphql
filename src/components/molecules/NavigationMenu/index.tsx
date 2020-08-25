import React from 'react';
import styled from '@Styles/styled';
import TagNav from '@Atoms/TagNavigation';
import Button from '@Atoms/Button';

const StyledNav = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: max-content;
  height: max-content;
  padding: 10px 10px 10px 35px;
  @media (max-width: 768px) {
    button:nth-of-type(n + 2) {
      display: none;
    }
  }
  @media (min-width: 769px) {
    button:nth-of-type(1) {
      display: none;
    }
  }
  button {
    margin: -15px;
  }
  button:nth-last-of-type(1) {
    padding: 0px 25px 0px 10px;
  }
  button:nth-of-type(2) {
    border-radius: 2px;
  }
  transition: width 0.2s;
`;
const NavigationMenu: React.FC = () => {
  return (
    <StyledNav>
      <Button icon="home" />
      <TagNav href="/contact" icon="home">
        CONTACT
      </TagNav>
      <TagNav href="/porfolio" icon="porfolio">
        PORFOLIO
      </TagNav>
      <TagNav href="/designs" icon="home">
        DESIGNS
      </TagNav>
      <TagNav href="/projects" icon="home">
        PROJECTS
      </TagNav>
      <TagNav href="/" activate icon="home">
        HOME
      </TagNav>
    </StyledNav>
  );
};

export default NavigationMenu;
