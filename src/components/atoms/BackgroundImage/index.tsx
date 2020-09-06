import React from 'react';
import styled from '@Styles/styled';
import LoadContext from '@Assets/hooks/LoadContext';
import UserContext from '@Assets/hooks/ThemeContext';
import { CSSTransition } from 'react-transition-group';

const StyledBackGroundImage = styled.div`
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 92.31%),
    url(${({ theme }) => theme.background}) center/cover;
`;

const StyledBackGroundImageBlurEffect = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
`;
const StyledBackGroundContainer = styled.div`
  z-index: 1;
  display: flex;
  padding-top: 80px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  @media (max-width: 1024px) {
    padding-top: 50px;
    justify-content: center;
  }
`;

const BackgroundImage: React.FC = ({ children }) => {
  const { load, setLoad } = React.useContext(LoadContext);
  const { setTheme } = React.useContext(UserContext);
  return (
    <>
      <CSSTransition
        in={load}
        onExit={() =>
          setTimeout(() => {
            localStorage.getItem('theme');
            const theme = localStorage.getItem('theme');
            if (theme) {
              import(`@Styles/themes/${theme}`).then((module) => {
                setTheme(module.default);
                setLoad(true);
              });
            }
          }, 500)
        }
        timeout={{
          appear: 1000,
          enter: 1000,
          exit: 500
        }}
        classNames="changeBackground"
        unmountOnExit
        mountOnEnter
      >
        <StyledBackGroundImage>
          <StyledBackGroundImageBlurEffect />
        </StyledBackGroundImage>
      </CSSTransition>
      <StyledBackGroundContainer>{children}</StyledBackGroundContainer>
    </>
  );
};

export default BackgroundImage;
