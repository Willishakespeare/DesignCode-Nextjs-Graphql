import React from 'react';

import Navigation from '@Organisms/Navigation';
import BackgroundImage from '@Atoms/BackgroundImage';

const MainPageTemplate: React.FC = ({ children }) => {
  return (
    <>
      <Navigation />
      <BackgroundImage>{children}</BackgroundImage>
    </>
  );
};

export default MainPageTemplate;
