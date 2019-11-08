import React from 'react';
import { Mutation, Query } from '@apollo/react-components';
import GET_SERVICE from '../Queries/GetService';
import UPDATE_SERVICE from '../Mutations/UpdateService';
import CurrentServiceViewer from '../Views/currentservice';
import { withRouter } from "react-router-dom";


function CurrentService (props){
  const { time } = props.location.state;
  const currentId = props.location.state.id;
  console.log(currentId, time);
  return(
    <Query query={GET_SERVICE}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

          console.log(data.allServices.edges[0].node)

          return data.allServices.edges.filter(({ node }) => node.id === currentId).map(({ id, serviceId }) => {

            return (
              <Mutation mutation={UPDATE_SERVICE} >
                {updateService => (
                  <div>
                    <p>{id}</p>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        const input = {
                          serviceId
                        }
                        updateService({ variables: { input } });
    
                      }}
                    >
                      <CurrentServiceViewer />
                    </form>
                  </div>
                )}
              </Mutation>
            );
          });
        }}
    </Query>
  );
}


export default withRouter(CurrentService);