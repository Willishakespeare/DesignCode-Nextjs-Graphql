import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type Client {
    id: ID
    nickname: String
    profilePicture: String
    emailVerified: Boolean
    desc: String
    name: String
    lastname: String
    email: String
    date: String
  }

  type TokenClient {
    token: String
  }

  #######################INPUT#######################

  input ClientInput {
    name: String!
    lastname: String!
    email: String!
    password: String!
  }

  input AuthInputClient {
    email: String!
    password: String!
  }
`;

export default typeDefs;
