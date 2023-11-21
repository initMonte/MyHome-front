import React from 'react';
import {useNavigation} from '@react-navigation/native';

import HomeUI from './HomeUI';

function Home() {
  const navigation = useNavigation();

  return <HomeUI />;
}

export default Home;
