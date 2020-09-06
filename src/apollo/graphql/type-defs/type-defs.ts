import { gql } from 'apollo-server-micro';
import tdUser from './tdUser';
import tdProduct from './tdProduct';
import tdClient from './tdClient';

const typeDefs = gql`
  ${tdUser}
  ${tdProduct}
  ${tdClient}

  #######################QUERY#######################
  type Query {
    getUser(token: String!): User
    getClient(token: String!): Client

    getProducts: [Product]
    getProductById(id: ID!): Product

    getProductUserById(id: ID!): Product
    getProductClientById(id: ID!): Product

    getProductsUser: [Product]
    getProductsClient: [Product]
  }
  #####################MUTACION######################
  type Mutation {
    # Client
    newClient(input: ClientInput): Client
    authClient(input: AuthInputClient): TokenClient
    # User
    newUser(input: UserInput): User
    authUser(input: AuthInputUser): TokenUser

    # Products
    newProduct(input: ProductInput): Product
    updateProduct(id: ID!, input: ProductInput): Product
    deleteProduct(id: ID!): String
  }
`;

export default typeDefs;
