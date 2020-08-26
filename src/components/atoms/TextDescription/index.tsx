import React, { useContext } from 'react';
import styled from '@Styles/styled';
import UserContext from '@Assets/hooks/ThemeContext';

const StyledTextDescription = styled.div`
  @media (max-width: 768px) {
    font-size: 3vw;
    line-height: calc(3vw + 5px);
    width: 60vw;
  }
  width: 430px;
  height: max-content;
  color: white;
  font-family: 'MohrRounded';
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4.8px 14.4px rgba(0, 0, 0, 0.15);
`;

const TextDescription: React.FC = () => {
  const { theme } = useContext(UserContext);
  return <StyledTextDescription>{theme.description.text[0]}</StyledTextDescription>;
};

export default TextDescription;
