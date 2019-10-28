import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import CREATE_BARBER from '../Mutations/AddUser';
import SignUpViewer from '../Views/signup';

function Signup (){
  const [createBarber, {error, data }] = useMutation(CREATE_BARBER);

    return (
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

                <SignUpViewer />
              </form>

            </div>
      
    );
  }

export default Signup;