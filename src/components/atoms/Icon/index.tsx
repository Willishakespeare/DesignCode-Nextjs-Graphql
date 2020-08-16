import React from 'react';
import styled from '@Styles/styled';
import dynamic from 'next/dynamic';

type IconProps = {
  size?: 'sm' | 'rl';
  icon?: string;
  position?: 'left' | 'right';
};

const StyledIcon = styled.div<IconProps>`
  display: flex;
  height: 100%;
  padding: ${({ position }) => (position === 'right' ? '1px 0px 0px 10px' : '1px 10px 0px 0px')};
  svg {
    height: 100%;
  }
`;

const Icon: React.FC<IconProps> = ({ icon, position }) => {
  const DynamicIcon = dynamic(() =>
    import(`@Assets/icons/${icon}.svg`).catch(() => {
      return false;
    })
  );

  if (DynamicIcon) {
    return (
      <StyledIcon position={position}>
        <DynamicIcon />
      </StyledIcon>
    );
  }
  return null;
};

export default Icon;
