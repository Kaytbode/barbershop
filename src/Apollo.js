import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://barber-backend.herokuapp.com/graphql',
});

export default client;
