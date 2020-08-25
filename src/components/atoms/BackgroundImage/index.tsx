import React from 'react';
import styled from '@Styles/styled';

const StyledBackGroundImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 92.31%),
    url(${({ theme }) => theme.background}) center/cover;
  backdrop-filter: blur(2px);
  @keyframes change {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const StyledBackGroundImageBlurEffect = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
`;
const StyledBackGroundContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 110px;
  width: 100%;
  min-height: calc(100vh);
  max-height: 100%;
  @media (max-width: 768px) {
    align-items: center;
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
