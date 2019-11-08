import { gql }  from 'apollo-boost';

const GET_SERVICE = gql`
  query GetServices{
    allServices{
      edges{
        node{
          id
          serviceId
          location
          status
        }
      }
    }
  }
`;

export default GET_SERVICE;