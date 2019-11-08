import { gql }  from 'apollo-boost';

const GET_BARBERS = gql`
  query GetBarbers{
    allBarbers{
      edges{
        node{
          id
          email
          firstName
        }
      }
     }
  }
`;

export default GET_BARBERS;