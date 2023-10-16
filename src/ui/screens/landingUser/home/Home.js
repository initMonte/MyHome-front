import React from 'react';
import {useNavigation} from '@react-navigation/native';
import NavigatorConstant from '../../../../navigation/NavigatorConstant';
//import i18n from '../../../../assets/strings/I18n';

import HomeUI from './HomeUI';

function Home() {
  const navigation = useNavigation();

  return <HomeUI />;
}

export default Home;
