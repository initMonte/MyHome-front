import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './navigation/RootNavigator';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <RootNavigator />;
}

export default App;
