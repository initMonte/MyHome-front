import React from 'react';
import {useNavigation} from '@react-navigation/native';

import ContactoPropiedadXUI from './ContactoPropiedadXUI';

function ContactoPropiedadX() {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return <ContactoPropiedadXUI goBack={goBack} />;
}

export default ContactoPropiedadX;
