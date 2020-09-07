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

export default function useAuth() {
  const { data } = useQuery(GET_USER);
  return {
    user: data && data.getUser
  };
}
