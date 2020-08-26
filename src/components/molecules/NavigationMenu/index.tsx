import React from 'react';
import styled from '@Styles/styled';
import TagNav from '@Atoms/TagNavigation';

const StyledNav = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: max-content;
  height: max-content;
  margin: auto;
  @media (max-width: 768px) {
    display: none;
  }

  button {
    margin: -15px;
  }
  button:nth-last-of-type(1) {
    width: 90px;
    padding: 0px 25px 0px 10px;
  }
  button:nth-of-type(1) {
    border-radius: 2px;
  }
  transition: width 0.2s;
`;
const NavigationMenu: React.FC = () => {
  return (
    <StyledNav>
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
