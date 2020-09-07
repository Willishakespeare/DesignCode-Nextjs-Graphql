import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';

const httpLink = createHttpLink({
  uri: '/api/graphql',
  fetch
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  const tokenCookie = Cookies.get('token');
  return {
    headers: {
      ...headers,
      authorization: tokenCookie || token ? `Bearer ${tokenCookie || token}` : ''
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
