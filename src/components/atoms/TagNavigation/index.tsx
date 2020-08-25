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
  }
  &:focus {
    outline: none;
  }
`;

const TagNavigation: React.FC<TagNavigationProps> = ({ onClick, href, children, icon, position }) => {
  const router = useRouter();
  const activate = router.pathname === href;
  return (
    <Link href={href}>
      <TagNavigationButton
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
