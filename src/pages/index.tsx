import React from 'react';
import styled from '@Styles/styled';
import Themes from '@Styles/theme';
import UserContext from '@Assets/hooks/ThemeContext';

import Button from '@Atoms/Button';
import MainPageTemplate from '@Templates/MainPageTemplate';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: max-content;
  height: max-content;
  padding: 10px;
  button {
    margin: 10px;
  }
`;

const Index: React.FC = () => {
  const { theme, setTheme } = React.useContext(UserContext);
  return (
    <MainPageTemplate>
      <StyledDiv>
        <Button
          onClick={() => {
            if (theme.name === 'theme1') {
              localStorage.setItem('theme', 'theme2');
              setTheme(Themes.theme2);
            } else {
              localStorage.setItem('theme', 'theme1');
              setTheme(Themes.theme1);
            }
          }}
        >
          CAMBIAR EL COLOR
        </Button>
      </StyledDiv>
    </MainPageTemplate>
  );
};

export default Index;
