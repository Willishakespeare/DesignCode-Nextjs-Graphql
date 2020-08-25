import React from 'react';
import styled from '@Styles/styled';
import Themes from '@Styles/theme';
import UserContext from '@Assets/hooks/ThemeContext';

import Button from '@Atoms/Button';
import MainPageTemplate from '@Templates/MainPageTemplate';
import TextPage from '@Organisms/TextPage';

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
            switch (theme.name) {
              case 'theme1':
                localStorage.setItem('theme', 'theme2');
                setTheme(Themes.theme2);
                break;
              case 'theme2':
                localStorage.setItem('theme', 'theme3');
                setTheme(Themes.theme3);
                break;
              case 'theme3':
                localStorage.setItem('theme', 'theme4');
                setTheme(Themes.theme4);
                break;
              case 'theme4':
                localStorage.setItem('theme', 'theme5');
                setTheme(Themes.theme5);
                break;
              default:
                localStorage.setItem('theme', 'theme1');
                setTheme(Themes.theme1);
                break;
            }
          }}
        >
          CAMBIAR EL COLOR
        </Button>
      </StyledDiv>
      <TextPage />
    </MainPageTemplate>
  );
};

export default Index;
