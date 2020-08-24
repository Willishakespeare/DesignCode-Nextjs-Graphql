import React from 'react';
import styled from '@Styles/styled';
import Icon from '@Atoms/Icon';

const StyledSearchNav = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  margin-right: 30px;
  input:focus {
    outline: 0;
  }
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
`;
const StyledIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5px;
  width: 80px;
  height: 35px;
  margin-left: -30px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.text.blurPrimary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4.8px 14.4px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(30px);
`;
const StyledInput = styled.input`
  display: flex;
  background-color: transparent;
  border: none;
  border-radius: 2px 20px 20px 2px;
  font-family: 'MohrRounded';
  font-weight: 600;
  font-size: 13px;
  padding: 0px 0px 2px 25px;
  width: 160px;
  height: 35px;

  caret-color: ${({ theme }) => theme.colors.fill.primary};
  ::placeholder {
    font-family: 'MohrRounded';
    font-weight: 600;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  @media (max-width: 1024px) {
    width: 10px;
    :focus {
      width: 120px;
    }
  }
  transition: width 0.5s ease;
`;
const StyledInputContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.text.primary};
  border-radius: 2px 20px 20px 2px;
  width: auto;
  height: 35px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4.8px 14.4px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(30px);
  div {
    margin: 0px 10px 0px 10px;
  }
`;

const SearchNav: React.FC = () => {
  return (
    <StyledSearchNav>
      <StyledIconContainer>
        <Icon icon="shop" />
      </StyledIconContainer>
      <StyledInputContainer>
        <StyledInput placeholder="Search" />
        <Icon icon="search" />
      </StyledInputContainer>
    </StyledSearchNav>
  );
};

export default SearchNav;
