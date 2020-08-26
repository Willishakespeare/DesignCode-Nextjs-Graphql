import React from 'react';
import styled from '@Styles/styled';

const StyledLoader = styled.div`
  position: absolute;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.fill.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-of-type(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;
const Loader: React.FC = () => {
  return (
    <StyledLoader>
      <div className="lds-ripple">
        <div />
        <div />
      </div>
    </StyledLoader>
  );
};

export default Loader;
