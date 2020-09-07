import React, { useState, useEffect } from 'react';
import MainPageTemplate from '@Templates/MainPageTemplate';
import TextPage from '@Organisms/TextPage';
import TagViewGrid from '@Organisms/TagViewGrid';
import MessageAlert from '@Atoms/MessageAlert';
import useAuth from '@Assets/hooks/useAuth';

const Index: React.FC = () => {
  const [messageAlert, useMessageAlert] = useState(null);
  const [messageAlertBoolean, useMessageAlertBoolean] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      if (user && messageAlertBoolean) {
        console.log(user);
        useMessageAlert(`Hola ${user.name}`);
        useMessageAlertBoolean(false);
        setTimeout(() => {
          useMessageAlert(null);
        }, 2000);
      }
    }, 2000);
  });
  return (
    <MainPageTemplate>
      <MessageAlert alert={messageAlert} />
      <TextPage />
      <TagViewGrid />
    </MainPageTemplate>
  );
};

export default Index;
