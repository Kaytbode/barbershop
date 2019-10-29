import React from 'react';
import ReactDOM from 'react-dom';
import client from '../Apollo';
import { ApolloProvider } from '@apollo/react-components';
import App from '../Components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>, 
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
