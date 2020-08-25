import React from 'react';
import styled from '@Styles/styled';
import Icon from '@Atoms/Icon';

type TypesTagView = {
  hover?: () => void;
  background?: string;
  color?: string;
  name?: string;
  text?: [string, string, string];
};
const StyledTagView = styled.div<TypesTagView>`
  height: 450px;
  margin: 20px 0px 20px 0px;
  width: 200px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4.8px 14.4px rgba(0, 0, 0, 0.15);
  background: linear-gradient(180deg, #0a0a0a99, #0a0a0a99 100%),
    url(${({ background, theme }) => background || theme.background}) center/cover;
  background-color: red;
  div {
    width: 85%;
    margin: 0px;
    padding: 0px;
    height: max-content;
    svg {
      path:nth-of-type(2) {
        fill: ${({ color, theme }) => color || theme.colors.fill.primary};
      }
    }
  }
`;
const StyledTagViewSpanContainer = styled.span<TypesTagView>`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
const StyledTagViewSpanP = styled.p`
  width: 100%;
  font-family: 'MohrRounded';
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
`;
const StyledTagViewSpanPrimary = styled.span<TypesTagView>`
  color: ${({ color, theme }) => color || theme.colors.fill.primary};
  margin-right: 5px;
`;
const StyledTagViewSpanSecondary = styled.span`
  color: white;
`;

const TagView: React.FC<TypesTagView> = ({ background, color, name, text, hover }) => {
  return (
    <StyledTagView onClick={hover} background={background} color={color} name={name} text={text}>
      <Icon icon={`logocomplete${name}`} />
      <StyledTagViewSpanContainer>
        <StyledTagViewSpanP>
          <StyledTagViewSpanPrimary color={color}>{text ? text[0] : 'Design'}</StyledTagViewSpanPrimary>
          <StyledTagViewSpanSecondary>and Development Web</StyledTagViewSpanSecondary>
          <StyledTagViewSpanPrimary color={color}> Apps</StyledTagViewSpanPrimary>
        </StyledTagViewSpanP>
      </StyledTagViewSpanContainer>
    </StyledTagView>
  );
};

export default TagView;
