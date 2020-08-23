import React from 'react';
import styled from '@Styles/styled';
import { theme1, theme2 } from '@Styles/theme';
import UserContext from '@Assets/hooks/ThemeContext';

import Button from '@Atoms/Button';
import Navigation from '@Organisms/Navigation';
import BackgroundImage from '@Atoms/BackgroundImage';

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

export default function Home() {
  const { theme, setTheme } = React.useContext(UserContext);
  return (
    <>
      <Navigation />
      <BackgroundImage>
        <StyledDiv>
          <Button
            onClick={() => {
              if (theme.name === 'blueTheme') {
                setTheme(theme2);
              } else {
                setTheme(theme1);
              }
            }}
          >
            LOGIN
          </Button>
        </StyledDiv>
      </BackgroundImage>
    </>
  );
}
