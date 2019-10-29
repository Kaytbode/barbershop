import { gql }  from 'apollo-boost';

const GET_BARBER = gql`
  query GetBarber($id: String!) {
    barber(id: $id) {
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

export default GET_BARBER;