import React, { Component } from 'react';
import { Mutation } from '@apollo/react-components';
import VERIFY_BARBER from '../Mutations/VerifyUser';
import LogInViewer from '../Views/login';
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      email : '',
    };
  }

  render(){
    const { email } = this.state;
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

                  this.setState({email: input.email});

                  e.preventDefault();
                }}
              >
                <LogInViewer />
                { data? 
                 <Redirect
                  to={{
                    pathname: "/users",
                    state: { email: email }
                  }}
                /> 
                 : null 
                 }
    
              </form>
          )
        }
        </Mutation>
    );
  }
}

export default Login;
