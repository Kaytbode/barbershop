import { gql }  from 'apollo-boost';

const CREATE_BARBER = gql`
  mutation CreateBarber($input: CreateBarberInput!) {
    createBarber(input: $input) {
      clientMutationId
    }
  }
`;

export default CREATE_BARBER;
