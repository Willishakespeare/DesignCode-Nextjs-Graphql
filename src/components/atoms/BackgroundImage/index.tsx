import React from 'react';
import styled from '@Styles/styled';

const StyledBackGroundImage = styled.div`
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
  display: flex;
  padding-top: 100px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh);
  max-height: 100%;
  @media (max-width: 1024px) {
    padding-top: 50px;
    justify-content: center;
  }
`;

const BackgroundImage: React.FC = ({ children }) => {
  return (
    <StyledBackGroundImage>
      <StyledBackGroundImageBlurEffect>
        <StyledBackGroundContainer>{children}</StyledBackGroundContainer>{' '}
      </StyledBackGroundImageBlurEffect>
    </StyledBackGroundImage>
  );
};

export default BackgroundImage;
