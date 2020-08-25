import React, { useContext } from 'react';
import styled from '@Styles/styled';
import UserContext from '@Assets/hooks/ThemeContext';

const StyledTextTitle = styled.div`
  @media (max-width: 768px) {
    font-size: 8vw;
    line-height: calc(8vw + 5px);
    display: flex;
    flex-direction: column;
    width: 70%;
    span:nth-last-of-type(1) {
      width: max-content;
    }
  }
  width: 350px;
  height: max-content;
  color: white;
  font-family: 'MohrRounded';
  font-weight: 700;
  font-size: 50px;
  line-height: 55px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4.8px 14.4px rgba(0, 0, 0, 0.15);
  span {
    width: initial;
  }
`;
const StyledTextTitlePrimary = styled.span`
  color: ${({ theme }) => theme.colors.fill.primary};
  padding-right: 15px;
`;
const StyledTextTitleSecondary = styled.span`
  color: ${({ theme }) => theme.colors.fill.secondary};

  padding-right: 5px;
`;
const StyledTextTitleNormal = styled.span`
  padding-right: 15px;
`;

const TextTitle: React.FC = () => {
  const { theme } = useContext(UserContext);
  return (
    <StyledTextTitle>
      <StyledTextTitlePrimary>{theme.title.primaryText[0]}</StyledTextTitlePrimary>
      <StyledTextTitleNormal>{theme.title.secondatyText[0]}</StyledTextTitleNormal>
      {'\n'}
      <span>
        <StyledTextTitleSecondary>{theme.title.primaryText[1]}</StyledTextTitleSecondary>
        <StyledTextTitleNormal>{theme.title.secondatyText[1]}</StyledTextTitleNormal>
      </span>
    </StyledTextTitle>
  );
};

export default TextTitle;
