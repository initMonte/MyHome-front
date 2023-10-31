import React, { useState } from 'react';
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
import PhotoUploader from '../../../components/photoUploader';

const PublicarUI = ({goHome}) => {

  const [selectedButton, setSelectedButton] = useState('venta');
  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const [selectedTipoPropiedad, setSelectedTipoPropiedad] = useState('house');
  const handleButtonClick2 = (buttonName) => {
    setSelectedTipoPropiedad(buttonName);
  };

  const [selectedPrecio, setSelectedPrecio] = useState('pesos');
  const handleButtonClick3 = (buttonName) => {
    setSelectedPrecio(buttonName);
  };

  const [selectedExpensa, setSelectedExpensa] = useState('pesos');
  const handleButtonClick4 = (buttonName) => {
    setSelectedExpensa(buttonName);
  };

  const [selectedAmbiente, setSelectedAmbiente] = useState('1');
  const handleButtonClick5 = (buttonName) => {
    setSelectedAmbiente(buttonName);
  };

  const [selectedDormitorio, setSelectedDormitorio] = useState('1');
  const handleButtonClick6 = (buttonName) => {
    setSelectedDormitorio(buttonName);
  };

  const [selectedBaño, setSelectedBaño] = useState('1');
  const handleButtonClick7 = (buttonName) => {
    setSelectedBaño(buttonName);
  };

  const [selectedDisposicion, setSelectedDisposicion] = useState('frente');
  const handleButtonClick8 = (buttonName) => {
    setSelectedDisposicion(buttonName);
  };

  const [selectedEstado, setSelectedEstado] = useState('alquiler/venta');
  const handleButtonClick9 = (buttonName) => {
    setSelectedEstado(buttonName);
  };

  const [selectedButtons, setSelectedButtons] = useState([]);
  const handleButtonClick10 = (buttonName) => {
    if (selectedButtons.includes(buttonName)) {
      setSelectedButtons(selectedButtons.filter((btn) => btn !== buttonName));
    } else {
      setSelectedButtons([...selectedButtons, buttonName]);
    }
  };

  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const handleButtonClick11 = (buttonName) => {
    if (selectedAmenities.includes(buttonName)) {
      setSelectedAmenities(selectedAmenities.filter((btn) => btn !== buttonName));
    } else {
      setSelectedAmenities([...selectedAmenities, buttonName]);
    }
  };

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
            borderWidth={1}
            borderRadius={8}
            height={120}
          />
          <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginVertical: 20 }}>
            <ButtonSelect
              text={i18n.t('tabs.venta')}
              onPress={() => handleButtonClick("venta")}
              selected={selectedButton !== "venta"}
            />
            <ButtonSelect
              text={i18n.t('tabs.alquiler')}
              onPress={() => handleButtonClick("alquiler")}
              selected={selectedButton !== "alquiler"}
            />
          </View>
          <Text style={styles.text3}>{i18n.t('stateType')}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: 10, marginHorizontal: 5, marginBottom: -35}}>
            <ButtonSelect
              text={i18n.t('house')}
              image={selectedTipoPropiedad !== "house" ? <IMAGES.SVG.HOME width={25} height={25} /> : <IMAGES.SVG.HOME_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick2("house")}
              selected={selectedTipoPropiedad !== "house"}
            />
            <ButtonSelect
              text={i18n.t('department')}
              size='L'
              image={selectedTipoPropiedad !== "department" ? <IMAGES.SVG.DEPARTMENT width={25} height={25} /> : <IMAGES.SVG.DEPARTMENT_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick2("department")}
              selected={selectedTipoPropiedad !== "department"}
            />
            <ButtonSelect
              text={i18n.t('local')}
              image={selectedTipoPropiedad !== "local" ? <IMAGES.SVG.HOME width={25} height={25} /> : <IMAGES.SVG.HOME_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick2("local")}
              selected={selectedTipoPropiedad !== "local"}
            />
            <ButtonSelect
              text={i18n.t('ph')}
              image={selectedTipoPropiedad !== "ph" ? <IMAGES.SVG.HOME width={25} height={25} /> : <IMAGES.SVG.HOME_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick2("ph")}
              selected={selectedTipoPropiedad !== "ph"}
            />
            <ButtonSelect
              text={i18n.t('office')}
              image={selectedTipoPropiedad !== "office" ? <IMAGES.SVG.OFFICE width={25} height={25} /> : <IMAGES.SVG.OFFICE_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick2("office")}
              selected={selectedTipoPropiedad !== "office"}
            />
            <ButtonSelect
              text={i18n.t('quinta')}
              image={selectedTipoPropiedad !== "quinta" ? <IMAGES.SVG.HOME width={25} height={25} /> : <IMAGES.SVG.HOME_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick2("quinta")}
              selected={selectedTipoPropiedad !== "quinta"}
            />
            <ButtonSelect
              text={i18n.t('galpon')}
              image={selectedTipoPropiedad !== "galpon" ? <IMAGES.SVG.HOME width={25} height={25} /> : <IMAGES.SVG.HOME_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick2("galpon")}
              selected={selectedTipoPropiedad !== "galpon"}
            />
            <ButtonSelect
              text={i18n.t('terreno')}
              image={selectedTipoPropiedad !== "terreno" ? <IMAGES.SVG.TERRAIN width={25} height={25} /> : <IMAGES.SVG.TERRAIN_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick2("terreno")}
              selected={selectedTipoPropiedad !== "terreno"}
            />
          </View>
          <Text style={styles.text3}>{i18n.t('address')}</Text>
          <InputText placeholder={i18n.t('placeholder_street')} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: -65}}>
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
              onPress={() => handleButtonClick3("pesos")}
              selected={selectedPrecio !== "pesos"}
            />
            <ButtonSelect
              text={'U$S'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick3("dolares")}
              selected={selectedPrecio !== "dolares"}
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
              onPress={() => handleButtonClick4("pesos")}
              selected={selectedExpensa !== "pesos"}
            />
            <ButtonSelect
              text={'U$S'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick4("dolares")}
              selected={selectedExpensa !== "dolares"}
            />
            <InputText keyboard="phone-pad" size='XS' placeholder={i18n.t('placeholder_number')} />
          </View>

          <Text style={styles.text3}>{i18n.t('rooms')}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginTop: 10, marginBottom: -50 }}>
            <ButtonSelect
              text={'1'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick5("1")}
              selected={selectedAmbiente !== "1"}
            />
            <ButtonSelect
              text={'2'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick5("2")}
              selected={selectedAmbiente !== "2"}
            />
            <ButtonSelect
              text={'3'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick5("3")}
              selected={selectedAmbiente !== "3"}
            />
            <ButtonSelect
              text={'4'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick5("4")}
              selected={selectedAmbiente !== "4"}
            />
            <ButtonSelect
              text={'5'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick5("5")}
              selected={selectedAmbiente !== "5"}
            />
            <ButtonSelect
              text={'6+'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick5("6+")}
              selected={selectedAmbiente !== "6+"}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('bedrooms')}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginBottom: -50 }}>
            <ButtonSelect
              text={'1'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick6("1")}
              selected={selectedDormitorio !== "1"}
            />
            <ButtonSelect
              text={'2'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick6("2")}
              selected={selectedDormitorio !== "2"}
            />
            <ButtonSelect
              text={'3'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick6("3")}
              selected={selectedDormitorio !== "3"}
            />
            <ButtonSelect
              text={'4'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick6("4")}
              selected={selectedDormitorio !== "4"}
            />
            <ButtonSelect
              text={'5'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick6("5")}
              selected={selectedDormitorio !== "5"}
            />
            <ButtonSelect
              text={'6+'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick6("6+")}
              selected={selectedDormitorio !== "6+"}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('bathrooms')}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginBottom: -40 }}>
            <ButtonSelect
              text={'1'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick7("1")}
              selected={selectedBaño !== "1"}
            />
            <ButtonSelect
              text={'2'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick7("2")}
              selected={selectedBaño !== "2"}
            />
            <ButtonSelect
              text={'3'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick7("3")}
              selected={selectedBaño !== "3"}
            />
            <ButtonSelect
              text={'4'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick7("4")}
              selected={selectedBaño !== "4"}
            />
            <ButtonSelect
              text={'5'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick7("5")}
              selected={selectedBaño !== "5"}
            />
            <ButtonSelect
              text={'6+'}
              size='XS'
              borderRadius={50}
              onPress={() => handleButtonClick7("6")}
              selected={selectedBaño !== "6"}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('extras')}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: 10, marginHorizontal: 5, marginBottom: -40 }}>
            <ButtonSelect
              text={i18n.t('terraza')}
              onPress={() => handleButtonClick10("terraza")}
              selected={!selectedButtons.includes("terraza")}
            />
            <ButtonSelect
              text={i18n.t('balcony')}
              onPress={() => handleButtonClick10("balcony")}
              selected={!selectedButtons.includes("balcony")}
            />
            <ButtonSelect
              text={i18n.t('baulera')}
              onPress={() => handleButtonClick10("baulera")}
              selected={!selectedButtons.includes("baulera")}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'start', flexWrap: 'wrap', marginHorizontal: 5 }}>
            <ButtonSelect
              text={i18n.t('parking')}
              image={!selectedButtons.includes("cochera") ? <IMAGES.SVG.PARKING width={25} height={25} /> : <IMAGES.SVG.PARKING_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick10("cochera")}
              selected={!selectedButtons.includes("cochera")}
            />
            <InputText keyboard="phone-pad" size='S' placeholder={i18n.t('placeholder_amount')} />
          </View>

          <Text style={styles.text3}>{i18n.t('disposicion')}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginTop: 10 }}>
            <ButtonSelect
              text={i18n.t('frente')}
              onPress={() => handleButtonClick8("frente")}
              selected={selectedDisposicion !== "frente"}
            />
            <ButtonSelect
              text={i18n.t('contrafrente')}
              onPress={() => handleButtonClick8("contrafrente")}
              selected={selectedDisposicion !== "contrafrente"}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('antiguedad')}</Text>
          <InputText placeholder={i18n.t('placeholder_antiguedad')} />

          <Text style={styles.text3}>{i18n.t('orientation')}</Text>
          <InputText placeholder={i18n.t('placeholder_orientacion')} />

          <Text style={styles.text3}>{i18n.t('amenities')}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: 10, marginHorizontal: 5 }}>
            <ButtonSelect
              text={i18n.t('pool')}
              image={!selectedAmenities.includes("pool") ? <IMAGES.SVG.PILETA width={25} height={25} /> : <IMAGES.SVG.PILETA_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick11("pool")}
              selected={!selectedAmenities.includes("pool")}
            />
            <ButtonSelect
              text={i18n.t('sauna')}
              image={!selectedAmenities.includes("sauna") ? <IMAGES.SVG.SAUNA width={25} height={25} /> : <IMAGES.SVG.SAUNA_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick11("sauna")}
              selected={!selectedAmenities.includes("sauna")}
            />
            <ButtonSelect
              text={i18n.t('sum')}
              image={!selectedAmenities.includes("sum") ? <IMAGES.SVG.HOME width={25} height={25} /> : <IMAGES.SVG.HOME_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick11("sum")}
              selected={!selectedAmenities.includes("sum")}
            />
            <ButtonSelect
              text={i18n.t('quincho')}
              size='L'
              image={!selectedAmenities.includes("quincho") ? <IMAGES.SVG.QUINCHO width={25} height={25} /> : <IMAGES.SVG.QUINCHO_WHITE width={25} height={25} /> }
              onPress={() => handleButtonClick11("quincho")}
              selected={!selectedAmenities.includes("quincho")}
            />
            <ButtonSelect
              text={i18n.t('gameRoom')}
              image={!selectedAmenities.includes("gameRoom") ? <IMAGES.SVG.JUEGO width={25} height={25} /> : <IMAGES.SVG.JUEGO_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick11("gameRoom")}
              selected={!selectedAmenities.includes("gameRoom")}
              size='L'
            />
            <ButtonSelect
              text={i18n.t('jacuzzi')}
              image={!selectedAmenities.includes("jacuzzi") ? <IMAGES.SVG.JACUZZI width={25} height={25} /> : <IMAGES.SVG.JACUZZI_WHITE width={25} height={25} />}
              onPress={() => handleButtonClick11("jacuzzi")}
              selected={!selectedAmenities.includes("jacuzzi")}
            />
          </View>

          <PhotoUploader/>

          <Text style={styles.text3}>{i18n.t('addVideo') + ' '}
            <Text style={styles.textOptional}>{i18n.t('optional')}</Text>
          </Text>
          <InputText placeholder={i18n.t('placeholder_URL')} />

          <Text style={styles.text3}>{i18n.t('state')}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', marginTop: 10, marginBottom: -40 }}>
            <ButtonSelect
              text={i18n.t('sellingInRent')}
              size='XXS'
              onPress={() => handleButtonClick9("alquiler/venta")}
              selected={selectedEstado !== "alquiler/venta"}
            />
            <ButtonSelect
              text={i18n.t('reserved')}
              size='XXS'
              onPress={() => handleButtonClick9("reservada")}
              selected={selectedEstado !== "reservada"}
            />
            <ButtonSelect
              text={i18n.t('soldRented')}
              size='XXS'
              onPress={() => handleButtonClick9("alquilada/vendida")}
              selected={selectedEstado !== "alquilada/vendida"}
            />
          </View>

        </View>

        <View style={{marginBottom: 30}}>
          <Button
            text={i18n.t('publish')}
            size="M"
            color="primary"
            onPress={() => {
              goHome();
            }}
          />
        </View>
        
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
