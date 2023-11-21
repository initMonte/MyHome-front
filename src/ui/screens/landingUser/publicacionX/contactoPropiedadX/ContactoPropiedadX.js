import React from 'react';
import {useNavigation} from '@react-navigation/native';

import ContactoPropiedadXUI from './ContactoPropiedadXUI';

function ContactoPropiedadX() {
  const navigation = useNavigation();

  return <ContactoPropiedadXUI />;
}

export default ContactoPropiedadX;
