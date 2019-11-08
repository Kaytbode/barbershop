import React, { Component } from 'react';
import { Mutation } from '@apollo/react-components';
import CREATE_SERVICE from '../Mutations/CreateService';
import ServiceViewer from '../Views/createservice';
import {
  Redirect
} from "react-router-dom";

class CreateService extends Component {
  constructor(props){
    super(props);

    this.state = {
      latitude: '',
      longitude: ''
    }
  }
  
  componentDidMount(){
    const url = 'http://ip-api.com/json/';
    
    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({
          latitude: data.lat,
          longitude: data.lon
        });
      });
  }

  render(){
    const { email } = this.props;
    const {  latitude, longitude } = this.state;

    return(
      <Mutation mutation={CREATE_SERVICE}>
        {(createService, { data }) => (
          <form
            onSubmit={e => {
              const { target } = e;
              const input = {
                barberEmail: email,
                customer: target.customer.value,
                longitude: longitude,
                latitude: latitude
              }
            
              createService({ variables: { input } });

              e.preventDefault();
           }}
          >
            <ServiceViewer />
            { console.log(data)}
            {
              data? 
              <Redirect
                to={{
                  pathname: "/users/current",
                  state: { time: data.createService.service.start, id: data.createService.service.id }
                }}
              />  
              : null 
            }

          </form>
        )}
      </Mutation>
    );
  }
}


export default CreateService;
