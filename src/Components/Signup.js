import React, { Component } from 'react';
import { Mutation, ApolloProvider } from '@apollo/react-components';
import client from '../Apollo';
import CREATE_BARBER from '../Mutations/AddUser';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let n;
    return (
      <ApolloProvider client={client}>
        <Mutation mutation={CREATE_BARBER}>
          {(createBarber, {loading, error})=> (
            <div>
            <form
              onSubmit={e => {
                const { target } = e;
                const input = {
                  email: target.email.value,
                  firstName: target.firstName.value,
                  lastName: target.lastName.value,
                  password: target.password.value,
                  confirmPassword: target.confirmPassword.value
                }

                createBarber({ variables: { input } });

                e.preventDefault();
            }}
          >

              <label>
                First Name:
                <input type="text" name="firstName" />
              </label>
              <label>
                Last Name:
                <input type="text" name="lastName" />
              </label>
              <label>
                Email:
                <input type="email" name="email" />
              </label>
              <label>
                Password:
                <input type="password" name="password" />
              </label>
              <label>
                Confirm Password:
                <input type="password" name="confirmPassword"/>
              </label>
              <input type="submit" value="Submit" />
            </form>
            {loading && <p>Loading...</p>}
            {
              n = error? <p>error...</p> : <p> </p>
            }
            </div>
          )}
        </Mutation>
      </ApolloProvider>
    );
  }
}

export default Signup;