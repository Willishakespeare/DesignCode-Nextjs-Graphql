import React from 'react';
import styled from '@Styles/styled';
import Icon from '@Atoms/Icon';
import { useRouter, NextRouter } from 'next/router';
import Link from 'next/link';

type TagNavigationProps = {
  text?: string;
  activate?: boolean;
  icon?: string;
  href: string;
  router?: NextRouter;
  position?: 'right';
  onClick?: () => void;
};

const TagNavigationButton = styled.button<TagNavigationProps>`
  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;
  display: flex;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4.8px 14.4px rgba(0, 0, 0, 0.15);
  font-family: 'MohrRounded';
  font-weight: 600;
  font-size: 10px;
  letter-spacing: 2px;
  color: ${({ activate, theme }) => (activate ? theme.colors.text.primary : theme.colors.text.secondary)};
  background-color: ${({ activate, theme }) =>
    activate ? theme.colors.fill.primary : theme.colors.text.primary};
  height: 35px;
  padding: 0px 20px 0px 35px;
  line-height: 50px;
  border: none;
  border-radius: 2px 70px 70px 2px;
  justify-content: center;
  align-items: center;
  outline: none;
  transition: background-color 0.2s ease-out;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4.8px 14.4px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(30px);
  span {
    padding-left: 10px;
  }
  svg {
    display: ${({ activate }) => (activate ? 'flex' : 'none')};
  }
  @media (max-width: 1024px) {
    svg {
      display: flex;
      path {
        fill: ${({ activate, theme }) =>
          activate ? theme.colors.text.primary : theme.colors.text.secondary};
      }
    }
    span {
      display: none;
    }
  }

  &:hover {
    background-color: ${({ activate, theme }) =>
      activate ? theme.colors.fill.secondary : theme.colors.text.blurSecondary};

    &:before {
      ${({ activate }) =>
        activate ? 'background-color: hsla(0, 0%, 100%, 0.2)' : 'background-color: hsla(0, 0%, 40%, 0.2)'};
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    background-color: ${({ activate, theme }) =>
      activate ? theme.colors.blur.secondary : theme.colors.text.acent};
    transition: background-color 0.2s ease-out;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    border: 1px solid hsla(240, 0%, 100%, 0.9);
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
    background: rgba(255, 255, 255, 0.4);
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

const TagNavigation: React.FC<TagNavigationProps> = ({ onClick, href, children, icon, position }) => {
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
  const router = useRouter();
  const activate = router.pathname === href;
  return (
    <Link href={href}>
      <TagNavigationButton
        onMouseDown={ButtonRipple}
        onMouseMove={Revealhighlight}
        onMouseLeave={RevealhighlightOut}
        ref={btnRef}
        activate={activate}
        position={position}
        onClick={onClick}
        href={href}
        router={router}
      >
        {icon ? <Icon icon={icon} position="right" /> : null}
        <span>{children}</span>
      </TagNavigationButton>
    </Link>
  );
};

export default TagNavigation;
