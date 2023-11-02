import React from 'react';
import {ScrollView, View, StatusBar, StyleSheet} from 'react-native';

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import CardState from '../../../../components/cardState';
import IMAGES from '../../../../../assets/images/images';

const VentaUI = ({showPublicacionX}) => {
  return (
    <ScrollView style={styles.generalContainer}>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          showHideTransition={'fade'}
          hidden={false}
        />
        <CardState
          onPress={() => showPublicacionX()}
          size="S"
          image={IMAGES.OTHERS.TEMPORAL_IMAGE}
          tittle={'Av. Gral. Las Heras 2200'}
          ubication={'Recoleta'}
          logoRealState={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
          amb={3}
          dorm={2}
          bath={1}
          m2={65}
          description={'Venta. Departamento ubicado en 3° piso al frente. 2 dormitorios y 2 ba...'}
          price={65000}
          expenses={22000}
          currency={'USD'}
        />
        <CardState
          onPress={() => showPublicacionX()}
          size="S"
          image={IMAGES.OTHERS.TEMPORAL_IMAGE}
          tittle={'Av. Gral. Las Heras 2200'}
          ubication={'Recoleta'}
          logoRealState={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
          amb={3}
          dorm={2}
          bath={1}
          m2={65}
          description={'Venta. Departamento ubicado en 3° piso al frente. 2 dormitorios y 2 ba...'}
          price={65000}
          expenses={22000}
          currency={'USD'}
        />
        <CardState
          onPress={() => showPublicacionX()}
          size="S"
          image={IMAGES.OTHERS.TEMPORAL_IMAGE}
          tittle={'Av. Gral. Las Heras 2200'}
          ubication={'Recoleta'}
          logoRealState={IMAGES.OTHERS.TEMPORAL_IMAGE_LOGO}
          amb={3}
          dorm={2}
          bath={1}
          m2={65}
          description={'Venta. Departamento ubicado en 3° piso al frente. 2 dormitorios y 2 ba...'}
          price={65000}
          expenses={22000}
          currency={'USD'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: Theme.colors.WHITE,
  },
  container: {
    marginTop: 16,
    marginLeft: 16,
    marginRight: 16,
    rowGap: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

export default VentaUI;
