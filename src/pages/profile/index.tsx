import React from 'react';
import styled from '@Styles/styled';
import MainPageTemplate from '@Templates/MainPageTemplate';
import useAuth from '@Assets/hooks/useAuth';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: max-content;
  height: max-content;
  padding: 10px;
  color: white;
  z-index: 1;
`;

const ProfilePage: React.FC = () => {
  const { user, loading, authPage } = useAuth();
  authPage(loading, user);

  return (
    <MainPageTemplate>
      {loading ? null : <StyledDiv>Hola {user ? user.name : null}</StyledDiv>}
    </MainPageTemplate>
  );
};

export default ProfilePage;
