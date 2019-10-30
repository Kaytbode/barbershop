import React, { Component } from 'react';
import { Mutation } from '@apollo/react-components';
import CREATE_BARBER from '../Mutations/AddUser';
import SignUpViewer from '../Views/signup';
import DashBoardViewer from '../Views/dashboard';

class Signup extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: ''
    };
  }

  render(){
    return(
      <Mutation mutation={CREATE_BARBER}>
        {(createBarber, { data }) => (
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

              this.setState({
                email: input.email
              });

              e.preventDefault();
           }}
          >
            
            {data? <DashBoardViewer email = {this.state.email} /> : <SignUpViewer />}

          </form>
        )}
      </Mutation>
    );
  }
}

export default Signup;