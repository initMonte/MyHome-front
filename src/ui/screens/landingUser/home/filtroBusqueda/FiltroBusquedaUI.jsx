import React, {useRef, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Image} from 'react-native-svg';

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import IMAGES from '../../../../../assets/images/images';

import Button from '../../../../components/button';
import ButtonSelect from '../../../../components/buttonSelect';
import InputText from '../../../../components/inputText';

import {apiGooglePlaces} from '../../../../../config/ApiConfig';
import {estatesWS} from '../../../../../networking/api/endpoints/EstatesEndpoints';
import {saveFilterAction} from '../../../../../redux/slices/EstateReducer';

const FiltroBusquedaUI = ({goHome}) => {
  const dispatch = useDispatch();
  const refGoogle = useRef();

  const handleFocus = ref => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  const [rentOrSale, setSelectedButton] = useState('');
  const handleButtonClick = buttonName => {
    if (rentOrSale === '') {
      setSelectedButton(buttonName);
    } else if (rentOrSale !== buttonName) {
      setSelectedButton(buttonName);
    } else {
      setSelectedButton('');
    }
  };

  const [estateType, setSelectedTipoPropiedad] = useState('');
  const handleButtonClick2 = buttonName => {
    if (estateType === '') {
      setSelectedTipoPropiedad(buttonName);
    } else if (estateType !== buttonName) {
      setSelectedTipoPropiedad(buttonName);
    } else {
      setSelectedTipoPropiedad('');
    }
  };

  const [currency, setSelectedPrecio] = useState('');
  const handleButtonClick3 = buttonName => {
    if (currency === '') {
      setSelectedPrecio(buttonName);
    } else if (currency !== buttonName) {
      setSelectedPrecio(buttonName);
    } else {
      setSelectedPrecio('');
    }
  };

  const [priceMinInput, setPriceMin] = useState('');
  const handlePriceMin = value => {
    setPriceMin(value);
  };

  const [priceMaxInput, setPriceMax] = useState('');
  const handlePriceMax = value => {
    setPriceMax(value);
  };

  const [errorPriceMin, setErrorPriceMin] = useState(false);
  const inputRefPriceMin = useRef();

  const [errorPriceMax, setErrorPriceMax] = useState(false);
  const inputRefPriceMax = useRef();

  const [roomsAmount, setSelectedAmbiente] = useState('-1');
  const handleButtonClick5 = buttonName => {
    if (roomsAmount === '-1') {
      setSelectedAmbiente(buttonName);
    } else if (roomsAmount !== buttonName) {
      setSelectedAmbiente(buttonName);
    } else {
      setSelectedAmbiente('-1');
    }
  };

  const [bedroomsAmount, setSelectedDormitorio] = useState('-1');
  const handleButtonClick6 = buttonName => {
    if (bedroomsAmount === '-1') {
      setSelectedDormitorio(buttonName);
    } else if (bedroomsAmount !== buttonName) {
      setSelectedDormitorio(buttonName);
    } else {
      setSelectedDormitorio('-1');
    }
  };

  const [bathroomsAmount, setSelectedBaño] = useState('-1');
  const handleButtonClick7 = buttonName => {
    if (bathroomsAmount === '-1') {
      setSelectedBaño(buttonName);
    } else if (bathroomsAmount !== buttonName) {
      setSelectedBaño(buttonName);
    } else {
      setSelectedBaño('-1');
    }
  };

  const [amenitesArray, setSelectedAmenities] = useState([]);
  const handleButtonClick11 = buttonName => {
    if (amenitesArray.includes(buttonName)) {
      setSelectedAmenities(amenitesArray.filter(btn => btn !== buttonName));
    } else {
      setSelectedAmenities([...amenitesArray, buttonName]);
    }
  };

  const [neighborhood, setNeighborhood] = useState('');
  const [state, setState] = useState('');
  const handleGoogleAddress = details => {
    console.log('DETAIIIIILS: ' + JSON.stringify(details));
    setNeighborhood('');
    setState('');
    let varSublocality = '';
    let varLocality = '';
    details.address_components.forEach(component => {
      switch (true) {
        case component.types.includes('sublocality_level_1'):
          varSublocality = component.short_name;
          break;
        case component.types.includes('locality'):
          varLocality = component.short_name;
          break;
        case component.types.includes('administrative_area_level_1'):
          setState(component.short_name);
          break;
        default:
          break;
      }
      if (varSublocality !== '') {
        setNeighborhood(varSublocality);
      } else {
        setNeighborhood(varLocality);
      }
    });
    refGoogle.current?.setAddressText('');
  };

  const handleFilter = () => {
    const amenites = amenitesArray.join(',');

    if (isNaN(priceMinInput)) {
      setErrorPriceMin(i18n.t('invalidNumber'));
      handleFocus(inputRefPriceMin);
      return false;
    } else {
      setErrorPriceMin(false);
    }

    if (isNaN(priceMaxInput)) {
      setErrorPriceMax(i18n.t('invalidNumber'));
      handleFocus(inputRefPriceMax);
      return false;
    } else {
      setErrorPriceMax(false);
    }

    let priceMinAux;
    if (priceMinInput === '') {
      priceMinAux = 0;
    } else {
      priceMinAux = +priceMinInput;
    }
    let priceMaxAux;
    if (priceMaxInput === '') {
      priceMaxAux = 999999999;
    } else {
      priceMaxAux = +priceMaxInput;
    }

    let priceMin;
    let priceMax;
    if (priceMinAux > priceMaxAux) {
      priceMin = priceMaxAux;
      priceMax = priceMinAux;
    } else {
      priceMin = priceMinAux;
      priceMax = priceMaxAux;
    }

    console.log(rentOrSale);
    console.log(estateType);
    console.log(neighborhood);
    console.log(currency);
    console.log(priceMin);
    console.log(priceMax);
    console.log(roomsAmount);
    console.log(bedroomsAmount);
    console.log(bathroomsAmount);
    console.log(state);
    console.log(amenites);

    estatesWS
      .getEstatesFiltered(
        rentOrSale,
        estateType,
        neighborhood,
        currency,
        +priceMin,
        +priceMax,
        +roomsAmount,
        +bedroomsAmount,
        +bathroomsAmount,
        state,
        amenites,
      )
      .then(response => {
        // Get exitoso
        console.log(response.data.estates);
        //setEstates(response.data.estates);
        dispatch(saveFilterAction(response.data.estates));
        goHome();
      })
      .catch(error => {
        if (error.response) {
          // Handle error
          console.error(
            'Server responded with an error status:',
            error.response.status,
          );
          console.error('Response data:', error.response.data);
        } else if (error.request) {
          // Handle error
          console.error('No response received:', error.request);
          showToastWithGravityAndOffset();
        } else {
          // Handle error
          console.error('Error setting up the request:', error.message);
        }
      });
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      i18n.t('errors.connection'),
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
      0,
      0,
    );
  };

  return (
    <ScrollView style={styles.generalContainer}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginVertical: 20,
          }}>
          <ButtonSelect
            text={i18n.t('tabs.venta')}
            onPress={() => handleButtonClick('venta')}
            selected={rentOrSale !== 'venta'}
          />
          <ButtonSelect
            text={i18n.t('tabs.alquiler')}
            onPress={() => handleButtonClick('alquiler')}
            selected={rentOrSale !== 'alquiler'}
          />
        </View>
        <Text style={styles.text3}>{i18n.t('stateType')}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            marginTop: 10,
            marginHorizontal: 5,
          }}>
          <ButtonSelect
            text={i18n.t('house')}
            image={
              estateType !== 'casa' ? (
                <IMAGES.SVG.HOME width={25} height={25} />
              ) : (
                <IMAGES.SVG.HOME_WHITE width={25} height={25} />
              )
            }
            onPress={() => handleButtonClick2('casa')}
            selected={estateType !== 'casa'}
          />
          <ButtonSelect
            text={i18n.t('department')}
            size="L"
            image={
              estateType !== 'departamento' ? (
                <IMAGES.SVG.DEPARTMENT width={25} height={25} />
              ) : (
                <IMAGES.SVG.DEPARTMENT_WHITE width={25} height={25} />
              )
            }
            onPress={() => handleButtonClick2('departamento')}
            selected={estateType !== 'departamento'}
          />
          <ButtonSelect
            text={i18n.t('local')}
            image={
              estateType !== 'local' ? (
                <IMAGES.SVG.HOME width={25} height={25} />
              ) : (
                <IMAGES.SVG.HOME_WHITE width={25} height={25} />
              )
            }
            onPress={() => handleButtonClick2('local')}
            selected={estateType !== 'local'}
          />
          <ButtonSelect
            text={i18n.t('ph')}
            image={
              estateType !== 'ph' ? (
                <IMAGES.SVG.HOME width={25} height={25} />
              ) : (
                <IMAGES.SVG.HOME_WHITE width={25} height={25} />
              )
            }
            onPress={() => handleButtonClick2('ph')}
            selected={estateType !== 'ph'}
          />
          <ButtonSelect
            text={i18n.t('office')}
            image={
              estateType !== 'oficina' ? (
                <IMAGES.SVG.OFFICE width={25} height={25} />
              ) : (
                <IMAGES.SVG.OFFICE_WHITE width={25} height={25} />
              )
            }
            onPress={() => handleButtonClick2('oficina')}
            selected={estateType !== 'oficina'}
          />
          <ButtonSelect
            text={i18n.t('galpon')}
            image={
              estateType !== 'galpon' ? (
                <IMAGES.SVG.HOME width={25} height={25} />
              ) : (
                <IMAGES.SVG.HOME_WHITE width={25} height={25} />
              )
            }
            onPress={() => handleButtonClick2('galpon')}
            selected={estateType !== 'galpon'}
          />
          <ButtonSelect
            text={i18n.t('terreno')}
            image={
              estateType !== 'terreno' ? (
                <IMAGES.SVG.TERRAIN width={25} height={25} />
              ) : (
                <IMAGES.SVG.TERRAIN_WHITE width={25} height={25} />
              )
            }
            onPress={() => handleButtonClick2('terreno')}
            selected={estateType !== 'terreno'}
          />
        </View>
        <Text style={styles.text3}>{i18n.t('priceRange')}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'start',
            flexWrap: 'wrap',
            marginTop: 10,
          }}>
          <ButtonSelect
            text={'$'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick3('peso')}
            selected={currency !== 'peso'}
          />
          <ButtonSelect
            text={'U$S'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick3('dolar')}
            selected={currency !== 'dolar'}
          />
          <InputText
            keyboard="phone-pad"
            size="S"
            placeholder={i18n.t('placeholder_min')}
            changeValue={handlePriceMin}
            error={errorPriceMin}
            innerRef={inputRefPriceMin}
          />
          <InputText
            keyboard="phone-pad"
            size="S"
            placeholder={i18n.t('placeholder_max')}
            changeValue={handlePriceMax}
            error={errorPriceMax}
            innerRef={inputRefPriceMax}
          />
        </View>
        <Text style={styles.text3}>{i18n.t('address')}</Text>
        <GooglePlacesAutocomplete
          ref={refGoogle}
          fetchDetails={true}
          onPress={(data, details) => {
            handleGoogleAddress(details);
          }}
          onFail={error => console.error(error)}
          query={{
            key: apiGooglePlaces,
            language: 'es',
            components: 'country:arg',
          }}
          disableScroll={true}
          minLength={6}
          keepResultsAfterBlur={true}
          enablePoweredByContainer={false}
          styles={{
            textInputContainer: {
              borderBottomWidth: 1,
              width: '80%',
            },
            textInput: {
              height: 38,
              color: Theme.colors.BLACK,
            },
            separator: {
              backgroundColor: Theme.colors.PLACEHOLDER,
            },
            description: {
              color: Theme.colors.BLACK,
            },
          }}
        />
        <View style={styles.dateTurnBox}>
          <Text style={styles.textBox}>{i18n.t('selected_neighborhood')}</Text>
          <TextInput
            editable={false}
            value={neighborhood}
            style={styles.message}
          />
        </View>
        <View style={styles.dateTurnBox}>
          <Text style={styles.textBox}>{i18n.t('selected_state')}</Text>
          <TextInput editable={false} value={state} style={styles.message} />
        </View>
        <Text style={styles.text3}>{i18n.t('rooms')}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            marginTop: 10,
          }}>
          <ButtonSelect
            text={'0'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick5('0')}
            selected={roomsAmount !== '0'}
          />
          <ButtonSelect
            text={'1'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick5('1')}
            selected={roomsAmount !== '1'}
          />
          <ButtonSelect
            text={'2'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick5('2')}
            selected={roomsAmount !== '2'}
          />
          <ButtonSelect
            text={'3'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick5('3')}
            selected={roomsAmount !== '3'}
          />
          <ButtonSelect
            text={'4'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick5('4')}
            selected={roomsAmount !== '4'}
          />
          <ButtonSelect
            text={'5'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick5('5')}
            selected={roomsAmount !== '5'}
          />
          <ButtonSelect
            text={'6+'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick5('6')}
            selected={roomsAmount !== '6'}
          />
        </View>

        <Text style={styles.text3}>{i18n.t('bedrooms')}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}>
          <ButtonSelect
            text={'0'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick6('0')}
            selected={bedroomsAmount !== '0'}
          />
          <ButtonSelect
            text={'1'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick6('1')}
            selected={bedroomsAmount !== '1'}
          />
          <ButtonSelect
            text={'2'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick6('2')}
            selected={bedroomsAmount !== '2'}
          />
          <ButtonSelect
            text={'3'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick6('3')}
            selected={bedroomsAmount !== '3'}
          />
          <ButtonSelect
            text={'4'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick6('4')}
            selected={bedroomsAmount !== '4'}
          />
          <ButtonSelect
            text={'5'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick6('5')}
            selected={bedroomsAmount !== '5'}
          />
          <ButtonSelect
            text={'6+'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick6('6')}
            selected={bedroomsAmount !== '6'}
          />
        </View>

        <Text style={styles.text3}>{i18n.t('bathrooms')}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}>
          <ButtonSelect
            text={'0'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick7('0')}
            selected={bathroomsAmount !== '0'}
          />
          <ButtonSelect
            text={'1'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick7('1')}
            selected={bathroomsAmount !== '1'}
          />
          <ButtonSelect
            text={'2'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick7('2')}
            selected={bathroomsAmount !== '2'}
          />
          <ButtonSelect
            text={'3'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick7('3')}
            selected={bathroomsAmount !== '3'}
          />
          <ButtonSelect
            text={'4'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick7('4')}
            selected={bathroomsAmount !== '4'}
          />
          <ButtonSelect
            text={'5'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick7('5')}
            selected={bathroomsAmount !== '5'}
          />
          <ButtonSelect
            text={'6+'}
            size="XS"
            borderRadius={50}
            onPress={() => handleButtonClick7('6')}
            selected={bathroomsAmount !== '6'}
          />
        </View>
        <Text style={styles.text3}>{i18n.t('amenities')}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            marginTop: 10,
            marginHorizontal: 5,
          }}>
          <ButtonSelect
            text={i18n.t('pool')}
            image={
              !amenitesArray.includes('pool') ? (
                <IMAGES.SVG.PILETA width={25} height={25} />
              ) : (
                <IMAGES.SVG.PILETA_WHITE width={25} height={25} />
              )
            }
            onPress={() => handleButtonClick11('pool')}
            selected={!amenitesArray.includes('pool')}
          />
          <ButtonSelect
            text={i18n.t('sauna')}
            image={
              !amenitesArray.includes('sauna') ? (
                <IMAGES.SVG.SAUNA width={25} height={25} />
              ) : (
                <IMAGES.SVG.SAUNA_WHITE width={25} height={25} />
              )
            }
            onPress={() => handleButtonClick11('sauna')}
            selected={!amenitesArray.includes('sauna')}
          />
          <ButtonSelect
            text={i18n.t('sum')}
            image={
              !amenitesArray.includes('sum') ? (
                <IMAGES.SVG.HOME width={25} height={25} />
              ) : (
                <IMAGES.SVG.HOME_WHITE width={25} height={25} />
              )
            }
            onPress={() => handleButtonClick11('sum')}
            selected={!amenitesArray.includes('sum')}
          />
          <ButtonSelect
            text={i18n.t('quincho')}
            size="L"
            image={
              !amenitesArray.includes('quincho') ? (
                <IMAGES.SVG.QUINCHO width={25} height={25} />
              ) : (
                <IMAGES.SVG.QUINCHO_WHITE width={25} height={25} />
              )
            }
            onPress={() => handleButtonClick11('quincho')}
            selected={!amenitesArray.includes('quincho')}
          />
          <ButtonSelect
            text={i18n.t('gameRoom')}
            image={
              !amenitesArray.includes('gameRoom') ? (
                <IMAGES.SVG.JUEGO width={25} height={25} />
              ) : (
                <IMAGES.SVG.JUEGO_WHITE width={25} height={25} />
              )
            }
            onPress={() => handleButtonClick11('gameRoom')}
            selected={!amenitesArray.includes('gameRoom')}
            size="L"
          />
          <ButtonSelect
            text={i18n.t('jacuzzi')}
            image={
              !amenitesArray.includes('jacuzzi') ? (
                <IMAGES.SVG.JACUZZI width={25} height={25} />
              ) : (
                <IMAGES.SVG.JACUZZI_WHITE width={25} height={25} />
              )
            }
            onPress={() => handleButtonClick11('jacuzzi')}
            selected={!amenitesArray.includes('jacuzzi')}
          />
        </View>
        <Button
          text={i18n.t('search')}
          size="L"
          color="primary"
          onPress={() => {
            handleFilter();
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
  container: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text3: {
    marginTop: 20,
    marginLeft: 10,
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  row: {
    width: '85%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateTurnBox: {
    marginTop: 20,
    width: '80%',
    justifyContent: 'flex-start',
  },
  textBox: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
    marginBottom: 10,
  },
  message: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Theme.colors.PLACEHOLDER,
    color: Theme.colors.BLACK,
  },
});

export default FiltroBusquedaUI;
