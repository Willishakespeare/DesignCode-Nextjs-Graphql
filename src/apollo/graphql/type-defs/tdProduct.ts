import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  #######################TYPES#######################

  type listUrlType {
    nameUrl: String
    url: String
  }

  type requirements {
    requirementsDesign: requirementsDD
    requirementsDevelopment: [requirementsDevelopment]
    requirementsDeploy: requirementsDD
  }

  type requirementsDD {
    percentRequirement: Int
    statusRequirement: String
    urlsRequirementDesign: [listUrlType]
  }
  type requirementsDevelopment {
    nameRequirement: String
    percentRequirement: Int
    statusRequirement: String
  }

  type productInfo {
    statusProduct: String
    daysEstimated: Int
    date: String
    listUrl: [listUrlType]
    nameProduct: String
    typeProduct: String
    idUser: String
    idClient: String
  }

  type paymentInfo {
    typePayment: String
    pricePayment: Float
  }

  type Product {
    id: ID
    productInfo: productInfo
    requirements: requirements
    paymentInfo: paymentInfo
  }

  #######################INPUT#######################

  input listUrlInput {
    nameUrl: String
    url: String
  }

  input requirementsInput {
    requirementsDesign: requirementsInputDD
    requirementsDevelopment: [requirementsInputDevelopment]
    requirementsDeploy: requirementsInputDD
  }

  input requirementsInputDD {
    percentRequirement: Int
    statusRequirement: String
    urlsRequirementDesign: [listUrlInput]
  }
  input requirementsInputDevelopment {
    nameRequirement: String
    percentRequirement: Int
    statusRequirement: String
  }

  input productInfoInput {
    statusProduct: String
    daysEstimated: Int
    date: String
    listUrl: [listUrlInput]
    nameProduct: String
    typeProduct: String
    idUser: String
    idClient: String
  }

  input paymentInfoInput {
    typePayment: String!
    pricePayment: Float!
  }

  input ProductInput {
    productInfo: productInfoInput
    requirements: requirementsInput
    paymentInfo: paymentInfoInput
  }
`;

export default typeDefs;
