import React, { Component } from 'react';
import { Mutation, Query } from '@apollo/react-components';
import VERIFY_BARBER from '../Mutations/VerifyUser';
import LogInViewer from '../Views/login';
import GET_BARBERS from '../Queries/GetUser';
import DashBoardViewer from '../Views/dashboard';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email : '',
    };
  }

  render(){
    return (
        <Mutation mutation={VERIFY_BARBER}>
          {
            (verifyBarber, { data }) => (
              <form
                onSubmit={e => {
                  const { target } = e;
                  const input = {
                    email: target.email.value,
                    password: target.password.value,
                  }

                  verifyBarber({ variables: { input } });

                  e.preventDefault();
                }}
              >
                { !data && <LogInViewer />}
                { data && <DashBoardViewer />}
              </form>
          )
        }
        </Mutation>
    );
  }
}

export default Login;
