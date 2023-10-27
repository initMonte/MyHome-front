import React from 'react';
import {
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Image} from 'react-native-svg';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';
import InputText from '../../../components/inputText';
import ButtonSelect from '../../../components/buttonSelect';

const PublicarUI = ({goHome}) => {
  return (
    <ScrollView style={styles.generalContainer}>
      <View style={styles.container1}>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          showHideTransition={'fade'}
          hidden={false}
        />
        <View style={styles.container2}>
          <Text style={styles.text3}>
            {i18n.t('stateTitle')}
          </Text>
          <InputText
            placeholder={i18n.t('placeholder_title')}
            keyboard="email-address"
          />
          <Text style={styles.text3}>{i18n.t('description')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_description')}
            keyboard="email-address"
          />
          <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
            <ButtonSelect
              text={i18n.t('tabs.venta')}
            />
            <ButtonSelect
              text={i18n.t('tabs.alquiler')}
            />
          </View>
          <Text style={styles.text3}>{i18n.t('stateType')}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <ButtonSelect
              text={i18n.t('department')}
              size='L'
              image={<IMAGES.SVG.DEPARTMENT width={25} height={25} />}
            />
            <ButtonSelect
              text={i18n.t('house')}
              image={<IMAGES.SVG.HOME width={25} height={25} />}
            />
            <ButtonSelect
              text={i18n.t('local')}
              image={<IMAGES.SVG.HOME width={25} height={25} />}
            />
            <ButtonSelect
              text={i18n.t('ph')}
              image={<IMAGES.SVG.HOME width={25} height={25} />}
            />
            <ButtonSelect
              text={i18n.t('office')}
              image={<IMAGES.SVG.OFFICE width={25} height={25} />}
            />
            <ButtonSelect
              text={i18n.t('quinta')}
              image={<IMAGES.SVG.HOME width={25} height={25} />}
            />
            <ButtonSelect
              text={i18n.t('galpon')}
              image={<IMAGES.SVG.HOME width={25} height={25} />}
            />
            <ButtonSelect
              text={i18n.t('terreno')}
              image={<IMAGES.SVG.TERRAIN width={25} height={25} />}
            />
          </View>
          <Text style={styles.text3}>{i18n.t('address')}</Text>
          <InputText placeholder={i18n.t('placeholder_street')} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            <InputText size='S' placeholder={i18n.t('placeholder_strNumber')} />
            <InputText size='S' placeholder={i18n.t('placeholder_floor')} />
            <InputText size='XS' placeholder={i18n.t('placeholder_department')} />
          </View>
          <InputText placeholder={i18n.t('placeholder_barrio')} />
          <InputText placeholder={i18n.t('placeholder_localidad')} />
          <InputText placeholder={i18n.t('placeholder_province')} />
          <InputText placeholder={i18n.t('placeholder_country')} />

          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap' }}>
            <Text style={styles.text3}>{i18n.t('surfaceCover') + ' '}</Text>
            <InputText keyboard="phone-pad" size='XS' placeholder={i18n.t('placeholder_number')} />
            <Text style={styles.text3}>{i18n.t('m2')}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap' }}>
            <Text style={styles.text3}>{i18n.t('surfaceSemicover') + ' '}</Text>
            <InputText keyboard="phone-pad" size='XS' placeholder={i18n.t('placeholder_number')} />
            <Text style={styles.text3}>{i18n.t('m2')}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap' }}>
            <Text style={styles.text3}>{i18n.t('surfaceUncover') + ' '}</Text>
            <InputText keyboard="phone-pad" size='XS' placeholder={i18n.t('placeholder_number')} />
            <Text style={styles.text3}>{i18n.t('m2')}</Text>
          </View>

          <Text style={styles.text3}>{i18n.t('price')}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap' }}>
            <ButtonSelect
              text={'$'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'U$S'}
              size='XS'
              borderRadius={50}
            />
            <InputText keyboard="phone-pad" size='XS' placeholder={i18n.t('placeholder_number')} />
          </View>

          <Text style={styles.text3}>{i18n.t('expenses') + ' '}
            <Text style={styles.textOptional}>{i18n.t('optional')}</Text>
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap' }}>
            <ButtonSelect
              text={'$'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'U$S'}
              size='XS'
              borderRadius={50}
            />
            <InputText keyboard="phone-pad" size='XS' placeholder={i18n.t('placeholder_number')} />
          </View>

          <Text style={styles.text3}>{i18n.t('rooms')}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap' }}>
            <ButtonSelect
              text={'1'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'2'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'3'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'4'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'5'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'6+'}
              size='XS'
              borderRadius={50}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('bedrooms')}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap' }}>
            <ButtonSelect
              text={'1'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'2'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'3'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'4'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'5'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'6+'}
              size='XS'
              borderRadius={50}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('bathrooms')}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap' }}>
            <ButtonSelect
              text={'1'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'2'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'3'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'4'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'5'}
              size='XS'
              borderRadius={50}
            />
            <ButtonSelect
              text={'6+'}
              size='XS'
              borderRadius={50}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('extras')}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
            <ButtonSelect
              text={i18n.t('terraza')}
            />
            <ButtonSelect
              text={i18n.t('balcony')}
            />
            <ButtonSelect
              text={i18n.t('baulera')}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap' }}>
            <ButtonSelect
              text={i18n.t('parking')}
              image={<IMAGES.SVG.PARKING width={25} height={25} />}
            />
            <InputText keyboard="phone-pad" size='XS' placeholder={i18n.t('placeholder_amount')} />
          </View>

          <Text style={styles.text3}>{i18n.t('disposicion')}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
            <ButtonSelect
              text={i18n.t('frente')}
            />
            <ButtonSelect
              text={i18n.t('contrafrente')}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('antiguedad')}</Text>
          <InputText placeholder={i18n.t('placeholder_antiguedad')} />

          <Text style={styles.text3}>{i18n.t('orientation')}</Text>
          <InputText placeholder={i18n.t('placeholder_orientacion')} />

          <Text style={styles.text3}>{i18n.t('amenities')}</Text>

          <Text style={styles.text3}>{i18n.t('addPhotos') + ' '}
            <Text style={styles.textOptional}>{i18n.t('minimun2')}</Text>
          </Text>

          <Text style={styles.text3}>{i18n.t('addVideo') + ' '}
            <Text style={styles.textOptional}>{i18n.t('optional')}</Text>
          </Text>
          <InputText placeholder={i18n.t('placeholder_URL')} />

          <Text style={styles.text3}>{i18n.t('state')}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
            <ButtonSelect
              text={i18n.t('sellingInRent')}
            />
            <ButtonSelect
              text={i18n.t('reserved')}
            />
            <ButtonSelect
              text={i18n.t('soldRented')}
            />
          </View>

        </View>
        <Button
          text={i18n.t('publish')}
          size="M"
          color="primary"
          onPress={() => {
            goHome();
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: Theme.colors.WHITE,
  },
  container1: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    margin: 20,
  },
  text: {
    marginLeft: 20,
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  text2: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 15,
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.L,
    fontWeight: Theme.fonts.BOLD,
  },
  text3: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 15,
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  textOptional: {
    marginLeft: 10,
    color: Theme.colors.PLACEHOLDER,
    fontSize: Theme.fonts.S,
    fontWeight: Theme.fonts.LIGHT,
  },
  presable1: {
    marginLeft: 20,
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.S,
    fontWeight: Theme.fonts.SEMIBOLD,
  },
  pressable2: {
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
    textDecorationLine: 'underline',
  },
});

export default PublicarUI;
