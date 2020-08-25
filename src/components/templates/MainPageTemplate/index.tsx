import React from 'react';
import styled from '@Styles/styled';

import Navigation from '@Organisms/Navigation';
import BackgroundImage from '@Atoms/BackgroundImage';

const StyledMainPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainPageTemplate: React.FC = ({ children }) => {
  return (
    <StyledMainPageContainer>
      <Navigation />
      <BackgroundImage>{children}</BackgroundImage>
    </StyledMainPageContainer>
  );
};

export default MainPageTemplate;
