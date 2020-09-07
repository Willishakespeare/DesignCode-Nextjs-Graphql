import React from 'react';
import styled from '@Styles/styled';
import MainPageTemplate from '@Templates/MainPageTemplate';
import { useQuery, gql } from '@apollo/client';

const GET_USER = gql`
  query {
    getUser {
      id
      nickname
      profilePicture
      emailVerified
      desc
      name
      lastname
      email
    }
  }
`;

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
  const { data, loading } = useQuery(GET_USER);
  if (loading) return null;

  const { name } = data.getUser;

  return (
    <MainPageTemplate>
      <StyledDiv>Hola {name}</StyledDiv>
    </MainPageTemplate>
  );
};

export default ProfilePage;
