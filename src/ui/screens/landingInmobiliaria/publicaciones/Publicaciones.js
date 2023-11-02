import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {userWS} from '../../../../networking/api/endpoints/UserEndpoints';
import {meAction} from '../../../../redux/slices/UserReducer';

import PublicacionesUI from './PublicacionesUI';

function Publicaciones() {
  const {user, session, isFetching} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  console.log('---------');
  console.log(user);
  console.log(session);
  console.log(isFetching);
  console.log('---------');
  userWS
    .me()
    .then(response => {
      // me exitoso
      console.log(response.data);
      dispatch(meAction(response));
    })
    .catch(error => {
      if (error.response) {
        // Handle error
        console.error(
          'Server responded with an error status:',
          error.response.status,
        );
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        // Handle error
        console.error('No response received:', error.request);
      } else {
        // Handle error
        console.error('Error setting up the request:', error.message);
      }
    });
  return <PublicacionesUI />;
}

export default Publicaciones;
