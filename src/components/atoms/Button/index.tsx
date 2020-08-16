import React from 'react';
import styled, { Theme } from '@Styles/styled';
import Icon from '@Atoms/Icon';

type ButtonProps = {
  text?: string;
  variant?: 'fill' | 'outline';
  icon?: string;
  position?: 'left' | 'right';
  active?: boolean;
};

const getVariant = (variant: ButtonProps['variant'], active: boolean | undefined, theme: Theme) => {
  switch (variant) {
    case 'fill':
      return {
        primary: theme.colors.fill.primary,
        color: theme.colors.text.primary,
        secondary: theme.colors.fill.secondary,
        acent: theme.colors.fill.acent
      };
    case 'outline':
      return {
        primary: theme.colors.blur.primary,
        color: theme.colors.text.primary,
        secondary: theme.colors.blur.secondary,
        acent: theme.colors.blur.acent
      };

    default:
      return {
        primary: theme.colors.fill.primary,
        color: theme.colors.text.primary,
        secondary: theme.colors.fill.secondary,
        acent: theme.colors.fill.acent
      };
  }
};

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  font-family: 'MohrRounded';
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 2px;
  color: ${({ variant, theme, active }) =>
    variant ? getVariant(variant, active, theme).color : theme.colors.text.primary};
  background-color: ${({ variant, active, theme }) =>
    variant ? getVariant(variant, active, theme).primary : theme.colors.fill.primary};
  height: 50px;
  padding: ${({ position }) => (position === 'left' ? '0px 25px 0px 20px' : '0px 20px 0px 25px')};
  line-height: 50px;
  border: ${({ variant, theme }) =>
    variant === 'outline' ? `2px solid ${theme.colors.fill.acent}` : 'none'};
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: background-color 0.2s ease-out;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)), drop-shadow(0px 4.8px 14.4px rgba(0, 0, 0, 0.15));
  backdrop-filter: blur(30px);

  &:hover {
    background-color: ${({ variant, active, theme }) =>
      variant ? getVariant(variant, active, theme).secondary : theme.colors.fill.secondary};
    border-color: ${({ variant, active, theme }) =>
      variant ? getVariant(variant, active, theme).secondary : theme.colors.fill.secondary};
    &:before {
      background-color: hsla(0, 0%, 100%, 0.2);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${({ variant, theme, active }) =>
      variant ? getVariant(variant, active, theme).acent : theme.colors.fill.acent};
    transition: background-color 0.2s ease-out;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    border: ${({ variant, theme }) =>
      variant === 'outline'
        ? `2px solid ${theme.colors.fill.primary}`
        : '1px solid hsla(240, 0%, 100%, 0.9);'};
    border-radius: 2px;
    mask-image: radial-gradient(circle closest-side, white, transparent);
    mask-origin: border-box;
    mask-position: inherit;
    mask-size: inherit;
    mask-repeat: space;
    transition: webkitMaskPosition 0.1s ease-out;
  }
`;

const getPosition = (position: ButtonProps['position']) => {
  switch (position) {
    case 'left':
      return 'left';
    case 'right':
      return 'right';
    default:
      return 'left';
  }
};

const Button: React.FC<ButtonProps> = ({ variant, text, icon, position, active }) => {
  const maskSize = 150;
  const btnRef: React.RefObject<HTMLButtonElement> = React.createRef();

  const Revealhighlight = (e: React.MouseEvent) => {
    const activeRef = btnRef.current;
    if (activeRef) {
      const { top, left } = activeRef.getBoundingClientRect();
      const x = e.pageX - left - maskSize / 2;
      const y = e.pageY - top - maskSize / 2;
      activeRef.style.webkitMaskPosition = `${x}px ${y}px`;
      activeRef.style.webkitMaskSize = `${maskSize}px ${maskSize}px`;
    }
  };

  const RevealhighlightOut = () => {
    const activeRef = btnRef.current;
    if (activeRef) {
      activeRef.style.webkitMaskPosition = '150px 150px';
    }
  };

  return (
    <StyledButton
      onMouseMove={Revealhighlight}
      onMouseLeave={RevealhighlightOut}
      ref={btnRef}
      variant={variant}
      position={position}
      active={active}
    >
      {getPosition(position) === 'left' && icon ? <Icon icon={icon} position={position} /> : null}
      {text}
      {getPosition(position) === 'right' && icon ? <Icon icon={icon} position={position} /> : null}
    </StyledButton>
  );
};

export default Button;
