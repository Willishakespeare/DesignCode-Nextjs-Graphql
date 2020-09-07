import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_USER);
  return {
    user: data && data.getUser,
    loading,
    error,
    authPage: (x, y) => {
      if (!x && !y) {
        router.push('/');
      }
    }
  };
}
