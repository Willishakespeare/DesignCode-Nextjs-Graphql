import React, { useState, useEffect } from 'react';
import styled from '@Styles/styled';
import Loader from '@Organisms/Loader';
import { CSSTransition } from 'react-transition-group';

import Navigation from '@Organisms/Navigation';
import BackgroundImage from '@Atoms/BackgroundImage';

const StyledMainPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainPageTemplate: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <>
      <CSSTransition in={loading} timeout={500} classNames="fade" unmountOnExit>
        <Loader />
      </CSSTransition>
      <StyledMainPageContainer>
        <Navigation />
        <BackgroundImage>{children}</BackgroundImage>
      </StyledMainPageContainer>
    </>
  );
};

export default MainPageTemplate;
