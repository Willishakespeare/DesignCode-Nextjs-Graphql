import React, { useState, useEffect } from 'react';
import styled from '@Styles/styled';
import { CSSTransition } from 'react-transition-group';

const StyledMessageAlert = styled.div`
  position: absolute;
  top: 0;
  left: calc(100vw / 2);
  transform: translateX(-50%);
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: max-content;
  height: max-content;
  padding: 23px 60px 25px 60px;
  border-radius: 5px;
  color: white;
  font-family: 'MohrRounded';
  font-weight: 500;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 1px;
  background-color: ${({ theme }) => theme.colors.fill.primary};
  z-index: 100;
`;
type MessageAlertProps = {
  alert?: string;
};

const MessageAlert: React.FC<MessageAlertProps> = ({ alert }) => {
  const [tempMessage, useTempMessage] = useState('');
  useEffect(() => {
    if (alert) {
      useTempMessage(alert);
    }
  });
  return (
    <CSSTransition
      in={Boolean(alert || false)}
      timeout={{
        appear: 1000,
        enter: 1000,
        exit: 500
      }}
      classNames="fade"
      unmountOnExit
      mountOnEnter
    >
      <StyledMessageAlert>
        <span>{tempMessage}</span>
      </StyledMessageAlert>
    </CSSTransition>
  );
};

export default MessageAlert;
