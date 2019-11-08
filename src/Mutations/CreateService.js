import { gql }  from 'apollo-boost';

const CREATE_SERVICE = gql`
  mutation CreateService($input: CreateServiceInput!) {
    createService(input: $input) {
      clientMutationId
      service{
        id
        location
        barber
        start
      }
    }
  }
`;

export default CREATE_SERVICE;