import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import SplashScreen from 'react-native-splash-screen';

import {setClientToken} from '../networking/api/Api';
import {userWS} from '../networking/api/endpoints/UserEndpoints';
import {meAction} from '../redux/slices/UserReducer';
import {logoutAction} from '../redux/slices/AuthReducer';

import RootNavigator from './RootNavigator';

function Start() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const jwt = useSelector(state => state.auth.session.jwt);

  useEffect(() => {
    const fetchData = async () => {
      if (jwt !== '') {
        try {
          setClientToken(jwt);
          console.log(jwt);
          const response = await userWS.me();
          dispatch(meAction(response));
          console.log(response.data);
        } catch (error) {
          if (error.response && error.response.status === 403) {
            dispatch(logoutAction());
            console.error('Access denied. You are not authenticated.');
          } else {
            dispatch(logoutAction());
            console.error('An error occurred:', error);
          }
        }
      }
      setLoading(false);
      SplashScreen.hide();
    };
    fetchData();
  }, [dispatch, jwt]);

  return (
    <NavigationContainer>
      {loading ? null : <RootNavigator />}
    </NavigationContainer>
  );
}

export default Start;
