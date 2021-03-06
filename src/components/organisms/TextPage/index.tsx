import React from 'react';
import TextTitile from '@Atoms/TextTitle';
import TextDescription from '@Atoms/TextDescription';
import styled from '@Styles/styled';
import Button from '@Atoms/Button';

const StyledTextPageContainer = styled.div`
  margin-left: 8vw;
  @media (max-width: 1024px) {
    margin: auto;
  }
  z-index: 1;
  @media (max-width: 768px) {
    button {
      width: max-content;
    }
  }
  div:nth-of-type(2) {
    margin-top: 15px;
  }
  button {
    margin-top: 40px;
  }
`;
const TextPage: React.FC = () => {
  return (
    <StyledTextPageContainer>
      <TextTitile />
      <TextDescription />
      <Button icon="arrowleft" position="right">
        FIND YOUR BETTER OPCION
      </Button>
    </StyledTextPageContainer>
  );
};

export default TextPage;
