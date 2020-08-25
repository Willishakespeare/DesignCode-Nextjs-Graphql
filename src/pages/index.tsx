import React from 'react';
import MainPageTemplate from '@Templates/MainPageTemplate';
import TextPage from '@Organisms/TextPage';
import TagViewGrid from '@Organisms/TagViewGrid';

const Index: React.FC = () => {
  return (
    <MainPageTemplate>
      <TextPage />
      <TagViewGrid />
    </MainPageTemplate>
  );
};

export default Index;
