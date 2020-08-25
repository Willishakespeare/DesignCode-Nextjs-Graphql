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
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
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

    &:before {
      background-color: hsla(0, 0%, 100%, 0.2);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${({ variant, theme }) =>
      variant === 'outline' ? theme.colors.blur.secondary : theme.colors.fill.acent};
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
        ? `2px solid ${theme.colors.fill.secondary}`
        : '1px solid hsla(240, 0%, 100%, 0.9);'};
    border-radius: 2px;
    mask-image: radial-gradient(circle closest-side, white, transparent);
    mask-origin: border-box;
    mask-position: inherit;
    mask-size: inherit;
    mask-repeat: space;
    transition: webkitMaskPosition 0.1s ease-out;
  }
  .ripple-effect {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    background: ${({ variant, theme }) =>
      variant === 'outline' ? `${theme.colors.fill.primary}66` : `rgba(255, 255, 255, 0.4)`};
    animation: ripple-animation 2s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
  @keyframes ripple-animation {
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, variant, children, icon, position }) => {
  const btnRef: React.RefObject<HTMLButtonElement> = React.createRef();

  const ButtonRipple = (e: React.MouseEvent) => {
    const activeRef = btnRef.current;
    if (activeRef) {
      const posX = e.pageX - activeRef.getBoundingClientRect().left;
      const posY = e.pageY - activeRef.getBoundingClientRect().top;
      const waveWidth = 1.5 * activeRef.getBoundingClientRect().width;
      const divRippleEffect = document.createElement('div');

      divRippleEffect.className = 'ripple-effect';
      divRippleEffect.style.width = `${waveWidth}px`;
      divRippleEffect.style.height = `${waveWidth}px`;
      divRippleEffect.style.left = `${posX - waveWidth / 2}px`;
      divRippleEffect.style.top = `${posY - waveWidth / 2}px`;
      activeRef.appendChild(divRippleEffect);
      window.setTimeout(() => {
        activeRef.removeChild(divRippleEffect);
      }, 2000);
    }
  };
  const Revealhighlight = (e: React.MouseEvent) => {
    const activeRef = btnRef.current;
    if (activeRef) {
      const maskSize = activeRef.getBoundingClientRect().width;
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
      const { width, height } = activeRef.getBoundingClientRect();
      activeRef.style.webkitMaskPosition = `${width}px ${height}px`;
    }
  };

  return (
    <StyledButton
      onMouseDown={ButtonRipple}
      onMouseMove={Revealhighlight}
      onMouseLeave={RevealhighlightOut}
      ref={btnRef}
      variant={variant}
      position={position}
      onClick={onClick}
    >
      {position !== 'right' && icon ? <Icon icon={icon} position={position} /> : null}
      {children}
      {position === 'right' && icon ? <Icon icon={icon} position={position} /> : null}
    </StyledButton>
  );
};

export default Button;
