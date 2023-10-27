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
          <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginVertical: 20 }}>
            <ButtonSelect
              text={i18n.t('tabs.venta')}
            />
            <ButtonSelect
              text={i18n.t('tabs.alquiler')}
            />
          </View>
          <Text style={styles.text3}>{i18n.t('stateType')}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 10, marginHorizontal: 5, marginBottom: -35}}>
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: -65, marginRight: 25}}>
            <InputText size='XS' keyboard="phone-pad" placeholder={i18n.t('placeholder_strNumber')} />
            <InputText size='S'  keyboard="phone-pad" placeholder={i18n.t('placeholder_floor') + ' (opc)'} />
            <InputText size='S' placeholder={i18n.t('placeholder_department') + ' (opc)'} />
          </View>
          <InputText placeholder={i18n.t('placeholder_barrio')} />
          <InputText placeholder={i18n.t('placeholder_localidad')} />
          <InputText placeholder={i18n.t('placeholder_province')} />
          <InputText placeholder={i18n.t('placeholder_country')} />

          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginBottom: -5, marginTop: 10 }}>
            <Text style={styles.text3}>{i18n.t('surfaceCover') + ' '}</Text>
            <InputText keyboard="phone-pad" size='XS' placeholder={i18n.t('placeholder_number')} />
            <Text style={styles.text3}>{i18n.t('m2')}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginBottom: -50 }}>
            <Text style={styles.text3}>{i18n.t('surfaceSemicover') + ' '}</Text>
            <InputText keyboard="phone-pad" size='XS' placeholder={i18n.t('placeholder_number')} />
            <Text style={styles.text3}>{i18n.t('m2')}</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginBottom: -45 }}>
            <Text style={styles.text3}>{i18n.t('surfaceUncover') + ' '}</Text>
            <InputText keyboard="phone-pad" size='XS' placeholder={i18n.t('placeholder_number')} />
            <Text style={styles.text3}>{i18n.t('m2')}</Text>
          </View>

          <Text style={styles.text3}>{i18n.t('price')}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginTop: 10 }}>
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
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginTop: 10  }}>
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
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginTop: 10, marginBottom: -50 }}>
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
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginBottom: -50 }}>
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
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginBottom: -40 }}>
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 10, marginHorizontal: 5, marginBottom: -40 }}>
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
          <View style={{ flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginHorizontal: 5 }}>
            <ButtonSelect
              text={i18n.t('parking')}
              image={<IMAGES.SVG.PARKING width={25} height={25} />}
            />
            <InputText keyboard="phone-pad" size='S' placeholder={i18n.t('placeholder_amount')} />
          </View>

          <Text style={styles.text3}>{i18n.t('disposicion')}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginTop: 10 }}>
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 10, marginHorizontal: 5 }}>
            <ButtonSelect
              text={i18n.t('quincho')}
              size='L'
              image={<IMAGES.SVG.QUINCHO width={25} height={25} />}
            />
            <ButtonSelect
              text={i18n.t('pool')}
              image={<IMAGES.SVG.PILETA width={25} height={25} />}
            />
            <ButtonSelect
              text={i18n.t('sauna')}
              image={<IMAGES.SVG.SAUNA width={25} height={25} />}
            />
            <ButtonSelect
              text={i18n.t('sum')}
              image={<IMAGES.SVG.HOME width={25} height={25} />}
            />
            <ButtonSelect
              text={i18n.t('jacuzzi')}
              image={<IMAGES.SVG.JACUZZI width={25} height={25} />}
            />
            <ButtonSelect
              text={i18n.t('gameRoom')}
              image={<IMAGES.SVG.JUEGO width={25} height={25} />}
              size='L'
            />
          </View>

          <Text style={styles.text3}>{i18n.t('addPhotos') + ' '}
            <Text style={styles.textOptional}>{i18n.t('minimun2')}</Text>
          </Text>
          <View style={styles.imageContainer}>
            <Pressable style={styles.imageContainerChild}>
              <IMAGES.SVG.ADD_IMAGE width={25} height={25} margin={43}/>
            </Pressable>
          </View>

          <Text style={styles.text3}>{i18n.t('addVideo') + ' '}
            <Text style={styles.textOptional}>{i18n.t('optional')}</Text>
          </Text>
          <InputText placeholder={i18n.t('placeholder_URL')} />

          <Text style={styles.text3}>{i18n.t('state')}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginTop: 10, marginBottom: -10 }}>
            <ButtonSelect
              text={i18n.t('sellingInRent')}
              size='XXS'
            />
            <ButtonSelect
              text={i18n.t('reserved')}
              size='XXS'
            />
            <ButtonSelect
              text={i18n.t('soldRented')}
              size='XXS'
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container2: {
    marginLeft: 25,
    marginRight: 25,
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
  imageContainer: {
    width: 360,
    height: 150,
    backgroundColor: Theme.colors.BACKGROUND,
    margin: 16,
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  imageContainerChild: {
    width: 115,
    height: 115,
    backgroundColor: Theme.colors.WHITE,
    borderColor: Theme.colors.PLACEHOLDER,
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default PublicarUI;
