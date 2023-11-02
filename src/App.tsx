import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

import SplashScreen from 'react-native-splash-screen';

import RootNavigator from './navigation/RootNavigator';
import store from './redux/Store';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
