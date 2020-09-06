import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type User {
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

  type TokenUser {
    token: String
  }

  #######################INPUT#######################

  input UserInput {
    name: String!
    lastname: String!
    email: String!
    password: String!
  }

  input AuthInputUser {
    email: String!
    password: String!
  }
`;

export default typeDefs;
