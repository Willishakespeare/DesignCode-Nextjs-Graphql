import React from 'react';
import styled from '@Styles/styled';
import TagNav from '@Atoms/TagNavigation';

const StyledNav = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: max-content;
  height: max-content;
  padding: 10px 10px 10px 35px;

  button {
    margin: -15px;
  }
  button:nth-last-of-type(1) {
    padding: 0px 25px 0px 20px;
  }
  button:nth-of-type(1) {
    border-radius: 2px;
  }
`;
const NavigationMenu: React.FC = () => {
  return (
    <StyledNav>
      <TagNav href="/" icon="home">
        CONTACT
      </TagNav>
      <TagNav href="/" icon="home">
        PORFOLIO
      </TagNav>
      <TagNav href="/" icon="home">
        DESIGNS
      </TagNav>
      <TagNav href="/" icon="home">
        PROJECTS
      </TagNav>
      <TagNav href="/" activate icon="home">
        HOME
      </TagNav>
    </StyledNav>
  );
};

export default NavigationMenu;
