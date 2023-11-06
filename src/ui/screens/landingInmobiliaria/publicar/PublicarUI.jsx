/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {Image} from 'react-native-svg';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';
import InputText from '../../../components/inputText';
import ButtonSelect from '../../../components/buttonSelect';
import PhotoUploader from '../../../components/photoUploader';

import {estatesWS} from '../../../../networking/api/endpoints/EstatesEndpoints';

const PublicarUI = ({goHome}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [street, setStreet] = useState('');
  const [addressNumber, setaddressNumber] = useState('');
  const [floorDpto, setFloorDpto] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [coveredSquareMeters, setCoveredSquareMeters] = useState('');
  const [semiUncoveredSquaremeters, setSemiUncoveredSquaremeters] =
    useState('');
  const [uncoveredSquareMeters, setUncoveredSquareMeters] = useState('');
  const [antiquity, setAntiquity] = useState('');
  const [price, setPrice] = useState('');
  const [expenses, setExpenses] = useState('');
  const [parking, setParking] = useState('');
  const [selectedImagesUri, setSelectedImagesUri] = useState([]);
  const [urlVideo, setUrlVideo] = useState('');

  const [errorAddressNumber, setErrorAddressNumber] = useState(false);
  const inputRefAdressNumber = useRef();

  const [errorCoveredSquareMeters, setErrorCoveredSquareMeters] =
    useState(false);
  const inputRefCoveredSquareMeters = useRef();

  const [errorSemiUncoveredSquaremeters, setErrorSemiUncoveredSquaremeters] =
    useState(false);
  const inputRefSemiUncoveredSquaremeters = useRef();

  const [errorUncoveredSquareMeters, setErrorUncoveredSquareMeters] =
    useState(false);
  const inputRefUncoveredSquareMeters = useRef();

  const [errorPrice, setErrorPrice] = useState(false);
  const inputRefPrice = useRef();

  const [errorExpenses, setErrorExpenses] = useState(false);
  const inputRefExpenses = useRef();

  const [errorParking, setErrorParking] = useState(false);
  const inputRefParking = useRef();

  const [errorAntiquity, setErrorAntiquity] = useState(false);
  const inputRefAntiquity = useRef();

  const [errorTitle, setErrorTitle] = useState(false);
  const inputRefTitle = useRef();

  const [errorDescription, setErrorDescription] = useState(false);
  const inputRefDescription = useRef();

  const [errorStreet, setErrorStreet] = useState(false);
  const inputRefStreet = useRef();

  const [errorNeighborhood, setErrorNeighborhood] = useState(false);
  const inputRefNeighborhood = useRef();

  const [errorState, setErrorState] = useState(false);
  const inputRefState = useRef();

  const [errorCountry, setErrorCountry] = useState(false);
  const inputRefCountry = useRef();

  const [errorImages, setErrorImages] = useState(false);
  const inputRefImages = useRef();

  const [errorVideo, setErrorVideo] = useState(false);
  const inputRefVideo = useRef();

  const handleFocus = ref => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  const handleTitle = value => {
    setTitle(value);
  };

  const handleDescription = value => {
    setDescription(value);
  };

  const handleStreet = value => {
    setStreet(value);
  };

  const handleAddressNumber = value => {
    setaddressNumber(value);
  };

  const handleFloorDpto = value => {
    setFloorDpto(value);
  };

  const handleNeighborhood = value => {
    setNeighborhood(value);
  };

  const handleCoveredSquareMeters = value => {
    setCoveredSquareMeters(value);
  };

  const handleSemiUncoveredSquaremeters = value => {
    setSemiUncoveredSquaremeters(value);
  };

  const handleUncoveredSquareMeters = value => {
    setUncoveredSquareMeters(value);
  };

  const handleAntiquity = value => {
    setAntiquity(value);
  };

  const handlePrice = value => {
    setPrice(value);
  };

  const handleExpenses = value => {
    setExpenses(value);
  };

  const handleState = value => {
    setState(value);
  };

  const handleCountry = value => {
    setCountry(value);
  };

  const handleParking = value => {
    setParking(value);
  };

  const handleSelectedImageUris = uris => {
    setSelectedImagesUri(uris);
  };

  const handleUrlVideo = value => {
    setUrlVideo(value);
  };

  const [selectedButton, setSelectedButton] = useState('venta');
  const handleButtonClick = buttonName => {
    setSelectedButton(buttonName);
  };

  const [selectedTipoPropiedad, setSelectedTipoPropiedad] = useState('casa');
  const handleButtonClick2 = buttonName => {
    setSelectedTipoPropiedad(buttonName);
  };

  const [selectedPrecio, setSelectedPrecio] = useState('peso');
  const handleButtonClick3 = buttonName => {
    setSelectedPrecio(buttonName);
  };

  const [selectedExpensa, setSelectedExpensa] = useState('peso');
  const handleButtonClick4 = buttonName => {
    setSelectedExpensa(buttonName);
  };

  const [selectedAmbiente, setSelectedAmbiente] = useState('1');
  const handleButtonClick5 = buttonName => {
    setSelectedAmbiente(buttonName);
  };

  const [selectedDormitorio, setSelectedDormitorio] = useState('1');
  const handleButtonClick6 = buttonName => {
    setSelectedDormitorio(buttonName);
  };

  const [selectedBaño, setSelectedBaño] = useState('1');
  const handleButtonClick7 = buttonName => {
    setSelectedBaño(buttonName);
  };

  const [selectedDisposicion, setSelectedDisposicion] = useState('frente');
  const handleButtonClick8 = buttonName => {
    setSelectedDisposicion(buttonName);
  };

  const [selectedButtons, setSelectedButtons] = useState([]);
  const handleButtonClick10 = buttonName => {
    if (selectedButtons.includes(buttonName)) {
      setSelectedButtons(selectedButtons.filter(btn => btn !== buttonName));
    } else {
      setSelectedButtons([...selectedButtons, buttonName]);
    }
  };

  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const handleButtonClick11 = buttonName => {
    if (selectedAmenities.includes(buttonName)) {
      setSelectedAmenities(selectedAmenities.filter(btn => btn !== buttonName));
    } else {
      setSelectedAmenities([...selectedAmenities, buttonName]);
    }
  };

  const [selectedOrientacion, setSelectedOrientacion] = useState('norte');
  const handleButtonClick12 = buttonName => {
    setSelectedOrientacion(buttonName);
  };

  function isYouTubeVideoURL(input) {
    // Regular expression pattern for YouTube video URLs
    const youtubeURLPattern =
      /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]+/;

    return youtubeURLPattern.test(input);
  }

  const handlePostEstate = () => {
    const terrace = selectedButtons.includes('terrace');
    const balcony = selectedButtons.includes('balcony');
    const storage = selectedButtons.includes('storage');
    const status = 'alquiler - venta'; //Se asume este estado, luego se puede cambiar en "editar"

    const latitude = 'String'; //Hardcodeado hasta entrega final
    const longitude = 'String'; //Hardcodeado hasta entrega final

    console.log(selectedImagesUri);
    console.log(selectedImagesUri.length);

    if (title === '') {
      setErrorTitle(i18n.t('mandatoryField'));
      handleFocus(inputRefTitle);
      return false;
    } else {
      setErrorTitle(false);
    }

    if (description === '') {
      setErrorDescription(i18n.t('mandatoryField'));
      handleFocus(inputRefDescription);
      return false;
    } else {
      setErrorDescription(false);
    }

    if (street === '') {
      setErrorStreet(i18n.t('mandatoryField'));
      handleFocus(inputRefStreet);
      return false;
    } else {
      setErrorStreet(false);
    }

    if (addressNumber === '') {
      setErrorAddressNumber(i18n.t('mandatoryField'));
      handleFocus(inputRefAdressNumber);
      return false;
    } else {
      setErrorAddressNumber(false);
    }

    if (neighborhood === '') {
      setErrorNeighborhood(i18n.t('mandatoryField'));
      handleFocus(inputRefNeighborhood);
      return false;
    } else {
      setErrorNeighborhood(false);
    }

    if (state === '') {
      setErrorState(i18n.t('mandatoryField'));
      handleFocus(inputRefState);
      return false;
    } else {
      setErrorState(false);
    }

    if (country === '') {
      setErrorCountry(i18n.t('mandatoryField'));
      handleFocus(inputRefCountry);
      return false;
    } else {
      setErrorCountry(false);
    }

    if (coveredSquareMeters === '') {
      setErrorCoveredSquareMeters(i18n.t('mandatoryField'));
      handleFocus(inputRefCoveredSquareMeters);
      return false;
    } else {
      setErrorCoveredSquareMeters(false);
    }

    if (semiUncoveredSquaremeters === '') {
      setErrorSemiUncoveredSquaremeters(i18n.t('mandatoryField'));
      handleFocus(inputRefSemiUncoveredSquaremeters);
      return false;
    } else {
      setErrorSemiUncoveredSquaremeters(false);
    }

    if (uncoveredSquareMeters === '') {
      setErrorUncoveredSquareMeters(i18n.t('mandatoryField'));
      handleFocus(inputRefUncoveredSquareMeters);
      return false;
    } else {
      setErrorUncoveredSquareMeters(false);
    }

    if (price === '') {
      setErrorPrice(i18n.t('mandatoryField'));
      handleFocus(inputRefPrice);
      return false;
    } else {
      setErrorPrice(false);
    }

    if (antiquity === '') {
      setErrorAntiquity(i18n.t('mandatoryField'));
      handleFocus(inputRefAntiquity);
      return false;
    } else {
      setErrorAntiquity(false);
    }

    if (selectedImagesUri.length < 3) {
      setErrorImages(i18n.t('mandatoryImages'));
      return false;
    } else {
      setErrorImages(false);
    }

    if (isNaN(addressNumber)) {
      setErrorAddressNumber(i18n.t('invalidNumber'));
      handleFocus(inputRefAdressNumber);
      return false;
    } else {
      setErrorAddressNumber(false);
    }

    if (isNaN(coveredSquareMeters)) {
      setErrorCoveredSquareMeters(i18n.t('invalidNumber'));
      handleFocus(inputRefCoveredSquareMeters);
      return false;
    } else {
      setErrorCoveredSquareMeters(false);
    }

    if (isNaN(semiUncoveredSquaremeters)) {
      setErrorSemiUncoveredSquaremeters(i18n.t('invalidNumber'));
      handleFocus(inputRefSemiUncoveredSquaremeters);
      return false;
    } else {
      setErrorSemiUncoveredSquaremeters(false);
    }

    if (isNaN(uncoveredSquareMeters)) {
      setErrorUncoveredSquareMeters(i18n.t('invalidNumber'));
      handleFocus(inputRefUncoveredSquareMeters);
      return false;
    } else {
      setErrorUncoveredSquareMeters(false);
    }

    if (isNaN(price)) {
      setErrorPrice(i18n.t('invalidNumber'));
      handleFocus(inputRefPrice);
      return false;
    } else {
      setErrorPrice(false);
    }

    if (isNaN(expenses)) {
      setErrorExpenses(i18n.t('invalidNumber'));
      handleFocus(inputRefExpenses);
      return false;
    } else {
      setErrorExpenses(false);
    }

    if (isNaN(parking)) {
      setErrorParking(i18n.t('invalidNumber'));
      handleFocus(inputRefParking);
      return false;
    } else {
      setErrorParking(false);
    }

    if (isNaN(antiquity)) {
      setErrorAntiquity(i18n.t('invalidNumber'));
      handleFocus(inputRefAntiquity);
      return false;
    } else {
      setErrorAntiquity(false);
    }

    if (urlVideo && !isYouTubeVideoURL(urlVideo)) {
      setErrorVideo(i18n.t('invalidVideo'));
      handleFocus(inputRefVideo);
      return false;
    } else {
      setErrorVideo(false);
    }

    console.log('---------------------------------');
    console.log('---------------------------------');
    console.log('PROBANDO BOTON PUBLICAR');
    console.log(title);
    console.log(description);
    console.log(selectedButton);
    console.log(status);
    console.log(selectedTipoPropiedad);
    console.log(street);
    console.log(addressNumber);
    console.log(floorDpto);
    console.log(neighborhood);
    console.log(state);
    console.log(country);
    console.log(coveredSquareMeters);
    console.log(semiUncoveredSquaremeters);
    console.log(uncoveredSquareMeters);
    console.log(price);
    console.log(selectedPrecio);
    console.log(expenses);
    console.log(selectedExpensa);
    console.log(selectedAmbiente);
    console.log(selectedDormitorio);
    console.log(selectedBaño);
    console.log('TERRAZA, BALCON, BAULERA');
    console.log(terrace);
    console.log(balcony);
    console.log(storage);
    console.log(selectedAmenities);
    console.log(parking);
    console.log(selectedDisposicion);
    console.log(antiquity);
    console.log(selectedImagesUri);
    console.log(urlVideo);
    console.log('---------------------------------');
    console.log('---------------------------------');
    estatesWS
      .createEstate(
        title,
        description,
        selectedButton,
        status,
        street,
        +addressNumber,
        floorDpto,
        neighborhood,
        state,
        country,
        selectedTipoPropiedad,
        +coveredSquareMeters,
        +semiUncoveredSquaremeters,
        +uncoveredSquareMeters,
        +selectedAmbiente,
        +selectedBaño,
        +selectedDormitorio,
        terrace,
        balcony,
        storage,
        +parking,
        selectedDisposicion,
        +antiquity,
        selectedOrientacion,
        selectedAmenities,
        selectedPrecio,
        +price,
        selectedExpensa,
        expenses,
        latitude,
        longitude,
        selectedImagesUri,
        urlVideo,
      )
      .then(response => {
        // Post Publicacion exitoso
        console.log(response);
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
        } else {
          // Handle error
          console.error('Error setting up the request:', error.message);
        }
      });
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
          <Text style={styles.text3}>{i18n.t('stateTitle')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_title')}
            keyboard="email-address"
            changeValue={handleTitle}
            error={errorTitle}
            innerRef={inputRefTitle}
          />
          <Text style={styles.text3}>{i18n.t('description')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_description')}
            changeValue={handleDescription}
            borderWidth={1}
            borderRadius={8}
            height={120}
            error={errorDescription}
            innerRef={inputRefDescription}
          />
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
              selected={selectedButton !== 'venta'}
            />
            <ButtonSelect
              text={i18n.t('tabs.alquiler')}
              onPress={() => handleButtonClick('alquiler')}
              selected={selectedButton !== 'alquiler'}
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
              marginBottom: -35,
            }}>
            <ButtonSelect
              text={i18n.t('house')}
              image={
                selectedTipoPropiedad !== 'casa' ? (
                  <IMAGES.SVG.HOME width={25} height={25} />
                ) : (
                  <IMAGES.SVG.HOME_WHITE width={25} height={25} />
                )
              }
              onPress={() => handleButtonClick2('casa')}
              selected={selectedTipoPropiedad !== 'casa'}
            />
            <ButtonSelect
              text={i18n.t('department')}
              size="L"
              image={
                selectedTipoPropiedad !== 'departamento' ? (
                  <IMAGES.SVG.DEPARTMENT width={25} height={25} />
                ) : (
                  <IMAGES.SVG.DEPARTMENT_WHITE width={25} height={25} />
                )
              }
              onPress={() => handleButtonClick2('departamento')}
              selected={selectedTipoPropiedad !== 'departamento'}
            />
            <ButtonSelect
              text={i18n.t('local')}
              image={
                selectedTipoPropiedad !== 'local' ? (
                  <IMAGES.SVG.HOME width={25} height={25} />
                ) : (
                  <IMAGES.SVG.HOME_WHITE width={25} height={25} />
                )
              }
              onPress={() => handleButtonClick2('local')}
              selected={selectedTipoPropiedad !== 'local'}
            />
            <ButtonSelect
              text={i18n.t('ph')}
              image={
                selectedTipoPropiedad !== 'ph' ? (
                  <IMAGES.SVG.HOME width={25} height={25} />
                ) : (
                  <IMAGES.SVG.HOME_WHITE width={25} height={25} />
                )
              }
              onPress={() => handleButtonClick2('ph')}
              selected={selectedTipoPropiedad !== 'ph'}
            />
            <ButtonSelect
              text={i18n.t('office')}
              image={
                selectedTipoPropiedad !== 'oficina' ? (
                  <IMAGES.SVG.OFFICE width={25} height={25} />
                ) : (
                  <IMAGES.SVG.OFFICE_WHITE width={25} height={25} />
                )
              }
              onPress={() => handleButtonClick2('oficina')}
              selected={selectedTipoPropiedad !== 'oficina'}
            />
            <ButtonSelect
              text={i18n.t('galpon')}
              image={
                selectedTipoPropiedad !== 'galpon' ? (
                  <IMAGES.SVG.HOME width={25} height={25} />
                ) : (
                  <IMAGES.SVG.HOME_WHITE width={25} height={25} />
                )
              }
              onPress={() => handleButtonClick2('galpon')}
              selected={selectedTipoPropiedad !== 'galpon'}
            />
            <ButtonSelect
              text={i18n.t('terreno')}
              image={
                selectedTipoPropiedad !== 'terreno' ? (
                  <IMAGES.SVG.TERRAIN width={25} height={25} />
                ) : (
                  <IMAGES.SVG.TERRAIN_WHITE width={25} height={25} />
                )
              }
              onPress={() => handleButtonClick2('terreno')}
              selected={selectedTipoPropiedad !== 'terreno'}
            />
          </View>
          <Text style={styles.text3}>{i18n.t('address')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_street')}
            changeValue={handleStreet}
            error={errorStreet}
            innerRef={inputRefStreet}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <InputText
              size="S"
              keyboard="phone-pad"
              placeholder={i18n.t('placeholder_strNumber')}
              changeValue={handleAddressNumber}
              error={errorAddressNumber}
              innerRef={inputRefAdressNumber}
            />
            <InputText
              size="S"
              placeholder={i18n.t('placeholder_floorDpto')}
              changeValue={handleFloorDpto}
            />
            <Text style={styles.textOptional2}>{i18n.t('optional')}</Text>
          </View>
          <InputText
            placeholder={i18n.t('placeholder_barrio')}
            changeValue={handleNeighborhood}
            error={errorNeighborhood}
            innerRef={inputRefNeighborhood}
          />
          <InputText
            placeholder={i18n.t('placeholder_province')}
            changeValue={handleState}
            error={errorState}
            innerRef={inputRefState}
          />
          <InputText
            placeholder={i18n.t('placeholder_country')}
            changeValue={handleCountry}
            error={errorCountry}
            innerRef={inputRefCountry}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'start',
              flexWrap: 'wrap',
              marginBottom: -5,
              marginTop: 10,
            }}>
            <Text style={styles.text3}>{i18n.t('surfaceCover') + ' '}</Text>
            <InputText
              keyboard="phone-pad"
              size="XS"
              placeholder={i18n.t('placeholder_number')}
              changeValue={handleCoveredSquareMeters}
              error={errorCoveredSquareMeters}
              innerRef={inputRefCoveredSquareMeters}
            />
            <Text style={styles.text3}>{i18n.t('m2')}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'start',
              flexWrap: 'wrap',
              marginBottom: -50,
            }}>
            <Text style={styles.text3}>{i18n.t('surfaceSemicover') + ' '}</Text>
            <InputText
              keyboard="phone-pad"
              size="XS"
              placeholder={i18n.t('placeholder_number')}
              changeValue={handleSemiUncoveredSquaremeters}
              error={errorSemiUncoveredSquaremeters}
              innerRef={inputRefSemiUncoveredSquaremeters}
            />
            <Text style={styles.text3}>{i18n.t('m2')}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'start',
              flexWrap: 'wrap',
              marginBottom: -45,
            }}>
            <Text style={styles.text3}>{i18n.t('surfaceUncover') + ' '}</Text>
            <InputText
              keyboard="phone-pad"
              size="XS"
              placeholder={i18n.t('placeholder_number')}
              changeValue={handleUncoveredSquareMeters}
              error={errorUncoveredSquareMeters}
              innerRef={inputRefUncoveredSquareMeters}
            />
            <Text style={styles.text3}>{i18n.t('m2')}</Text>
          </View>

          <Text style={styles.text3}>{i18n.t('price')}</Text>
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
              selected={selectedPrecio !== 'peso'}
            />
            <ButtonSelect
              text={'U$S'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick3('dolar')}
              selected={selectedPrecio !== 'dolar'}
            />
            <InputText
              keyboard="phone-pad"
              size="XS"
              placeholder={i18n.t('placeholder_number')}
              changeValue={handlePrice}
              error={errorPrice}
              innerRef={inputRefPrice}
            />
          </View>

          <Text style={styles.text3}>
            {i18n.t('expenses') + ' '}
            <Text style={styles.textOptional}>{i18n.t('optional')}</Text>
          </Text>
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
              onPress={() => handleButtonClick4('peso')}
              selected={selectedExpensa !== 'peso'}
            />
            <ButtonSelect
              text={'U$S'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick4('dolar')}
              selected={selectedExpensa !== 'dolar'}
            />
            <InputText
              keyboard="phone-pad"
              size="XS"
              placeholder={i18n.t('placeholder_number')}
              changeValue={handleExpenses}
              error={errorExpenses}
              innerRef={inputRefExpenses}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('rooms')}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'start',
              flexWrap: 'wrap',
              marginTop: 10,
              marginBottom: -50,
            }}>
            <ButtonSelect
              text={'1'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick5('1')}
              selected={selectedAmbiente !== '1'}
            />
            <ButtonSelect
              text={'2'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick5('2')}
              selected={selectedAmbiente !== '2'}
            />
            <ButtonSelect
              text={'3'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick5('3')}
              selected={selectedAmbiente !== '3'}
            />
            <ButtonSelect
              text={'4'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick5('4')}
              selected={selectedAmbiente !== '4'}
            />
            <ButtonSelect
              text={'5'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick5('5')}
              selected={selectedAmbiente !== '5'}
            />
            <ButtonSelect
              text={'6+'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick5('6+')}
              selected={selectedAmbiente !== '6+'}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('bedrooms')}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'start',
              flexWrap: 'wrap',
              marginBottom: -50,
            }}>
            <ButtonSelect
              text={'1'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick6('1')}
              selected={selectedDormitorio !== '1'}
            />
            <ButtonSelect
              text={'2'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick6('2')}
              selected={selectedDormitorio !== '2'}
            />
            <ButtonSelect
              text={'3'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick6('3')}
              selected={selectedDormitorio !== '3'}
            />
            <ButtonSelect
              text={'4'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick6('4')}
              selected={selectedDormitorio !== '4'}
            />
            <ButtonSelect
              text={'5'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick6('5')}
              selected={selectedDormitorio !== '5'}
            />
            <ButtonSelect
              text={'6+'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick6('6+')}
              selected={selectedDormitorio !== '6+'}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('bathrooms')}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'start',
              flexWrap: 'wrap',
              marginBottom: -40,
            }}>
            <ButtonSelect
              text={'1'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick7('1')}
              selected={selectedBaño !== '1'}
            />
            <ButtonSelect
              text={'2'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick7('2')}
              selected={selectedBaño !== '2'}
            />
            <ButtonSelect
              text={'3'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick7('3')}
              selected={selectedBaño !== '3'}
            />
            <ButtonSelect
              text={'4'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick7('4')}
              selected={selectedBaño !== '4'}
            />
            <ButtonSelect
              text={'5'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick7('5')}
              selected={selectedBaño !== '5'}
            />
            <ButtonSelect
              text={'6+'}
              size="XS"
              borderRadius={50}
              onPress={() => handleButtonClick7('6')}
              selected={selectedBaño !== '6'}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('extras')}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              marginTop: 10,
              marginHorizontal: 5,
              marginBottom: -40,
            }}>
            <ButtonSelect
              text={i18n.t('terraza')}
              onPress={() => handleButtonClick10('terrace')}
              selected={!selectedButtons.includes('terrace')}
            />
            <ButtonSelect
              text={i18n.t('balcony')}
              onPress={() => handleButtonClick10('balcony')}
              selected={!selectedButtons.includes('balcony')}
            />
            <ButtonSelect
              text={i18n.t('baulera')}
              onPress={() => handleButtonClick10('storage')}
              selected={!selectedButtons.includes('storage')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'start',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.text3}>
              {i18n.t('parking')}
              <Text style={styles.textOptional}>
                {' ' + i18n.t('optional')}
              </Text>
            </Text>
            <InputText
              keyboard="phone-pad"
              size="S"
              placeholder={i18n.t('placeholder_amount')}
              changeValue={handleParking}
              error={errorParking}
              innerRef={inputRefParking}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('disposicion')}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 10,
            }}>
            <ButtonSelect
              text={i18n.t('frente')}
              onPress={() => handleButtonClick8('frente')}
              selected={selectedDisposicion !== 'frente'}
            />
            <ButtonSelect
              text={i18n.t('contrafrente')}
              onPress={() => handleButtonClick8('contrafrente')}
              selected={selectedDisposicion !== 'contrafrente'}
            />
          </View>

          <Text style={styles.text3}>{i18n.t('antiguedad')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_antiguedad')}
            keyboard="phone-pad"
            changeValue={handleAntiquity}
            error={errorAntiquity}
            innerRef={inputRefAntiquity}
          />

          <Text style={styles.text3}>{i18n.t('orientation')}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 10,
              marginBottom: -30,
            }}>
            <ButtonSelect
              text={i18n.t('north')}
              onPress={() => handleButtonClick12('norte')}
              selected={selectedOrientacion !== 'norte'}
              size={'ORIENTACION'}
            />
            <ButtonSelect
              text={i18n.t('south')}
              onPress={() => handleButtonClick12('sur')}
              selected={selectedOrientacion !== 'sur'}
              size={'ORIENTACION'}
            />
            <ButtonSelect
              text={i18n.t('east')}
              onPress={() => handleButtonClick12('este')}
              selected={selectedOrientacion !== 'este'}
              size={'ORIENTACION'}
            />
            <ButtonSelect
              text={i18n.t('west')}
              onPress={() => handleButtonClick12('oeste')}
              selected={selectedOrientacion !== 'oeste'}
              size={'ORIENTACION'}
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
                !selectedAmenities.includes(' pool') ? (
                  <IMAGES.SVG.PILETA width={25} height={25} />
                ) : (
                  <IMAGES.SVG.PILETA_WHITE width={25} height={25} />
                )
              }
              onPress={() => handleButtonClick11(' pool')}
              selected={!selectedAmenities.includes(' pool')}
            />
            <ButtonSelect
              text={i18n.t('sauna')}
              image={
                !selectedAmenities.includes(' sauna') ? (
                  <IMAGES.SVG.SAUNA width={25} height={25} />
                ) : (
                  <IMAGES.SVG.SAUNA_WHITE width={25} height={25} />
                )
              }
              onPress={() => handleButtonClick11(' sauna')}
              selected={!selectedAmenities.includes(' sauna')}
            />
            <ButtonSelect
              text={i18n.t('sum')}
              image={
                !selectedAmenities.includes(' sum') ? (
                  <IMAGES.SVG.HOME width={25} height={25} />
                ) : (
                  <IMAGES.SVG.HOME_WHITE width={25} height={25} />
                )
              }
              onPress={() => handleButtonClick11(' sum')}
              selected={!selectedAmenities.includes(' sum')}
            />
            <ButtonSelect
              text={i18n.t('quincho')}
              size="L"
              image={
                !selectedAmenities.includes(' quincho') ? (
                  <IMAGES.SVG.QUINCHO width={25} height={25} />
                ) : (
                  <IMAGES.SVG.QUINCHO_WHITE width={25} height={25} />
                )
              }
              onPress={() => handleButtonClick11(' quincho')}
              selected={!selectedAmenities.includes(' quincho')}
            />
            <ButtonSelect
              text={i18n.t('gameRoom')}
              image={
                !selectedAmenities.includes(' gameRoom') ? (
                  <IMAGES.SVG.JUEGO width={25} height={25} />
                ) : (
                  <IMAGES.SVG.JUEGO_WHITE width={25} height={25} />
                )
              }
              onPress={() => handleButtonClick11(' gameRoom')}
              selected={!selectedAmenities.includes(' gameRoom')}
              size="L"
            />
            <ButtonSelect
              text={i18n.t('jacuzzi')}
              image={
                !selectedAmenities.includes(' jacuzzi') ? (
                  <IMAGES.SVG.JACUZZI width={25} height={25} />
                ) : (
                  <IMAGES.SVG.JACUZZI_WHITE width={25} height={25} />
                )
              }
              onPress={() => handleButtonClick11(' jacuzzi')}
              selected={!selectedAmenities.includes(' jacuzzi')}
            />
          </View>

          <PhotoUploader
            error={errorImages}
            onImageUrisChange={handleSelectedImageUris}
          />

          <Text style={styles.text3}>
            {i18n.t('addVideo') + ' '}
            <Text style={styles.textOptional}>{i18n.t('optional')}</Text>
          </Text>
          <InputText
            placeholder={i18n.t('placeholder_URL')}
            changeValue={handleUrlVideo}
            error={errorVideo}
            innerRef={inputRefVideo}
          />
        </View>

        <View style={{marginBottom: 30}}>
          <Button
            text={i18n.t('publish')}
            size="M"
            color="primary"
            onPress={() => {
              handlePostEstate();
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
  textOptional2: {
    marginLeft: -20,
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
    flexWrap: 'wrap',
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
