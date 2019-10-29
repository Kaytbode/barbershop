import { gql }  from 'apollo-boost';

const VERIFY_BARBER = gql`
  mutation CreateBarber($input: VerifyBarberMutationInput!) {
    verifyBarber(input: $input) {
      clientMutationId
    }
  }
`;

export default VERIFY_BARBER;