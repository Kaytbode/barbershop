import { gql }  from 'apollo-boost';

const UPDATE_SERVICE = gql`
  mutation UpdateService($input: UpdateServiceInput!) {
    updateService(input: $input) {
      service{
          id
          serviceId
          location
          fee
          duration
      }
    }
  }
`;

export default UPDATE_SERVICE;