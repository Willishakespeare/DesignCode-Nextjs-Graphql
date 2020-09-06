import React, { useContext } from 'react';
import styled from '@Styles/styled';
import UserContext from '@Assets/hooks/ThemeContext';

const StyledTextTitle = styled.div`
  @media (max-width: 620px) {
    font-size: 8vw;
    display: flex;
    flex-direction: column;
  }
  width: 360px;
  height: max-content;
  color: white;
  font-family: 'MohrRounded';
  font-weight: 700;
  font-size: 50px;
  line-height: 55px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4.8px 14.4px rgba(0, 0, 0, 0.15);

  transition: height 2 ease;
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
  padding-right: 0px;
`;
const StyledTextTitleSpan = styled.p`
  width: 100%;
  font-family: 'MohrRounded';
  font-weight: 700;
  font-size: 50px;
  line-height: 50px;
  text-align: start;
`;

const TextTitle: React.FC = () => {
  const { theme } = useContext(UserContext);
  return (
    <StyledTextTitle>
      <StyledTextTitleSpan>
        <StyledTextTitlePrimary>{theme.title.primaryText[0]}</StyledTextTitlePrimary>
        <StyledTextTitleNormal>{theme.title.secondatyText[0]}</StyledTextTitleNormal>
        {'\n'}
        <StyledTextTitleSecondary>{theme.title.primaryText[1]}</StyledTextTitleSecondary>
        <StyledTextTitleNormal>{theme.title.secondatyText[1]}</StyledTextTitleNormal>
      </StyledTextTitleSpan>
    </StyledTextTitle>
  );
};

export default TextTitle;
