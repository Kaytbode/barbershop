import React, { Component } from 'react';
import { Mutation } from '@apollo/react-components';
import CREATE_SERVICE from '../Mutations/CreateService';
import ServiceViewer from '../Views/createservice';

class CreateService extends Component {
  constructor(props){
    super(props);

    this.state = {
      email : ''
    };
  }

  render(){
    const { email } = this.props;
    return(
      <Mutation mutation={CREATE_SERVICE}>
        {(createService, { data }) => (
          <form
            onSubmit={e => {
              const { target } = e;
              const input = {
                barberEmail: email,
                customer: target.customer.value,
              }

              createService({ variables: { input } });

              this.setState({
                email: email
              });

              e.preventDefault();
           }}
          >
            {console.log(email)}
            {data? this.state.email : <ServiceViewer />}

          </form>
        )}
      </Mutation>
    );
  }
}

export default CreateService;
