import { gql }  from 'apollo-boost';

const CREATE_SERVICE = gql`
  mutation CreateService($input: CreateServiceInput!) {
    createService(input: $input) {
      clientMutationId
    }
  }
`;

export default CREATE_SERVICE;