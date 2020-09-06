import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.WEB_URI,
    fetch
  })
});

export default client;
