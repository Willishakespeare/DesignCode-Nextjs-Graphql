import React from 'react';
import styled from '@Styles/styled';
import MainPageTemplate from '@Templates/MainPageTemplate';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: max-content;
  height: max-content;
  padding: 10px;
  color: white;
`;

const DesignsPage: React.FC = () => {
  return (
    <MainPageTemplate>
      <StyledDiv>DesignsPage</StyledDiv>
    </MainPageTemplate>
  );
};

export default DesignsPage;
