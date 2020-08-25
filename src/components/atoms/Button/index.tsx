import React from 'react';
import styled from '@Styles/styled';
import Icon from '@Atoms/Icon';

type ButtonProps = {
  text?: string;
  variant?: 'outline';
  icon?: string;
  position?: 'right';
  onClick?: () => void;
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  overflow: hidden;
  font-family: 'MohrRounded';
  font-weight: 500;
  font-size: 11px;
  letter-spacing: 2px;
  color: ${({ variant, theme }) =>
    variant === 'outline' ? theme.colors.text.primary : theme.colors.text.primary};
  background-color: ${({ variant, theme }) =>
    variant === 'outline' ? theme.colors.blur.primary : theme.colors.fill.primary};
  height: 35px;
  padding: ${({ position }) => (position === 'right' ? '0px 20px 1px 25px' : '0px 25px 1px 25px')};
  line-height: 50px;
  border: ${({ variant, theme }) =>
    variant === 'outline' ? `2px solid ${theme.colors.fill.primary}` : 'none'};
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: background-color 0.2s ease-out;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4.8px 14.4px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(30px);

  svg {
    margin: auto;
    height: 50%;
  }
  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === 'outline' ? theme.colors.blur.secondary : theme.colors.fill.secondary};
  }

  &:active {
    background-color: ${({ variant, theme }) =>
      variant === 'outline' ? theme.colors.blur.secondary : theme.colors.fill.acent};
    transition: background-color 0.2s ease-out;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, variant, children, icon, position }) => {
  return (
    <StyledButton variant={variant} position={position} onClick={onClick}>
      {position !== 'right' && icon ? <Icon icon={icon} position={position} /> : null}
      {children}
      {position === 'right' && icon ? <Icon icon={icon} position={position} /> : null}
    </StyledButton>
  );
};

export default Button;
