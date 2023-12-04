/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView, ToastAndroid} from 'react-native';
import {useSelector} from 'react-redux';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Image} from 'react-native-svg';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import Button from '../../../components/button';
import InputText from '../../../components/inputText';
import ButtonSelect from '../../../components/buttonSelect';
import PhotoUploader from '../../../components/photoUploader';

import {apiGooglePlaces} from '../../../../config/ApiConfig';
import {estatesWS} from '../../../../networking/api/endpoints/EstatesEndpoints';

const EditarPublicacionXUI = ({goBack, goHome}) => {
  const {
    id,
    title,
    description,
    rentOrSale,
    street,
    addressNumber,
    floor,
    neighborhood,
    state,
    country,
    estateType,
    coveredSquareMeters,
    semiUncoveredSquaremeters,
    uncoveredSquareMeters,
    roomsAmount,
    bathroomsAmount,
    bedroomsAmount,
    terrace,
    balcony,
    storage,
    garage,
    frontOrBack,
    antiquity,
    orientation,
    amenites,
    status,
    price,
    currency,
    expenses,
    expenseCurrency,
    latitude,
    longitude,
    images,
    videoUrl,
  } = useSelector(state => state.estate);
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);
  const [newStreet, setStreet] = useState(street);
  const [newAddressNumber, setaddressNumber] = useState(addressNumber);
  const [newFloorDpto, setFloorDpto] = useState(floor);
  const [newNeighborhood, setNeighborhood] = useState(neighborhood);
  const [newState, setState] = useState(state);
  const [newCountry, setCountry] = useState(country);
  const [newLatitude, setLatitude] = useState(latitude);
  const [newLongitude, setLongitude] = useState(longitude);
  const [newCoveredSquareMeters, setCoveredSquareMeters] =
    useState(coveredSquareMeters);
  const [newSemiUncoveredSquaremeters, setSemiUncoveredSquaremeters] = useState(
    semiUncoveredSquaremeters,
  );
  const [newUncoveredSquareMeters, setUncoveredSquareMeters] = useState(
    uncoveredSquareMeters,
  );
  const [newAntiquity, setAntiquity] = useState(antiquity);
  const [newPrice, setPrice] = useState(price);
  const [newExpenses, setExpenses] = useState(expenses);
  const [newParking, setParking] = useState(garage);
  const [newSelectedImagesUri, setSelectedImagesUri] = useState([]);
  console.log(images);
  const [newUrlVideo, setUrlVideo] = useState(videoUrl);

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

  const [errorImages, setErrorImages] = useState(false);
  const [sizeErrorImage, setSizeErrorImage] = useState(false);

  const [errorVideo, setErrorVideo] = useState(false);
  const inputRefVideo = useRef();

  const refGoogle = useRef();

  const handleGoogleAddress = details => {
    console.log('DETAIIIIILS: ' + JSON.stringify(details));
    setaddressNumber('0');
    setStreet('');
    setNeighborhood('');
    setState('');
    setCountry('');
    let varSublocality = '';
    let varLocality = '';
    details.address_components.forEach(component => {
      switch (true) {
        case component.types.includes('street_number'):
          setaddressNumber(component.short_name);
          break;
        case component.types.includes('route'):
          setStreet(component.short_name);
          break;
        case component.types.includes('sublocality_level_1'):
          varSublocality = component.short_name;
          break;
        case component.types.includes('locality'):
          varLocality = component.short_name;
          break;
        case component.types.includes('administrative_area_level_1'):
          setState(component.short_name);
          break;
        case component.types.includes('country'):
          setCountry(component.long_name);
          break;
        default:
          break;
      }
      setLatitude(details.geometry.location.lat);
      setLongitude(details.geometry.location.lng);
      if (varSublocality !== '') {
        setNeighborhood(varSublocality);
      } else {
        setNeighborhood(varLocality);
      }
    });
    refGoogle.current?.setAddressText('');
  };

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

  const handleFloorDpto = value => {
    setFloorDpto(value);
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

  const handleParking = value => {
    setParking(value);
  };

  const handleSelectedImageUris = uris => {
    setSelectedImagesUri(uris);
  };

  const handleUrlVideo = value => {
    setUrlVideo(value);
  };

  const handleSizeErrorImage = value => {
    setSizeErrorImage(value);
    setErrorImages(i18n.t('errors.maxSizePhoto'));
  };

  const [selectedButton, setSelectedButton] = useState(rentOrSale);
  const handleButtonClick = buttonName => {
    setSelectedButton(buttonName);
  };

  const [selectedTipoPropiedad, setSelectedTipoPropiedad] =
    useState(estateType);
  const handleButtonClick2 = buttonName => {
    setSelectedTipoPropiedad(buttonName);
  };

  const [selectedPrecio, setSelectedPrecio] = useState(currency);
  const handleButtonClick3 = buttonName => {
    setSelectedPrecio(buttonName);
  };

  const [selectedExpensa, setSelectedExpensa] = useState(expenseCurrency);
  const handleButtonClick4 = buttonName => {
    setSelectedExpensa(buttonName);
  };

  const [selectedAmbiente, setSelectedAmbiente] = useState(
    roomsAmount.toString(),
  );
  const handleButtonClick5 = buttonName => {
    setSelectedAmbiente(buttonName);
  };

  const [selectedDormitorio, setSelectedDormitorio] = useState(
    bedroomsAmount.toString(),
  );
  const handleButtonClick6 = buttonName => {
    setSelectedDormitorio(buttonName);
  };

  const [selectedBaño, setSelectedBaño] = useState(bathroomsAmount.toString());
  const handleButtonClick7 = buttonName => {
    setSelectedBaño(buttonName);
  };

  const [selectedDisposicion, setSelectedDisposicion] = useState(frontOrBack);
  const handleButtonClick8 = buttonName => {
    setSelectedDisposicion(buttonName);
  };

  const [selectedEstado, setSelectedEstado] = useState(status);
  const handleButtonClick9 = buttonName => {
    setSelectedEstado(buttonName);
  };

  const extras = [];
  if (terrace) {
    extras.push('terraza');
  }
  if (balcony) {
    extras.push('balcony');
  }
  if (storage) {
    extras.push('baulera');
  }
  console.log(extras);

  const [selectedButtons, setSelectedButtons] = useState(extras);
  const handleButtonClick10 = buttonName => {
    if (selectedButtons.includes(buttonName)) {
      setSelectedButtons(selectedButtons.filter(btn => btn !== buttonName));
    } else {
      setSelectedButtons([...selectedButtons, buttonName]);
    }
  };

  const amenitesArray = amenites[0].split(',');

  const [selectedAmenities, setSelectedAmenities] = useState(amenitesArray);
  const handleButtonClick11 = buttonName => {
    if (selectedAmenities.includes(buttonName)) {
      setSelectedAmenities(selectedAmenities.filter(btn => btn !== buttonName));
    } else {
      setSelectedAmenities([...selectedAmenities, buttonName]);
    }
  };

  const [selectedOrientacion, setSelectedOrientacion] = useState(orientation);
  const handleButtonClick12 = buttonName => {
    setSelectedOrientacion(buttonName);
  };

  const handleDeleteEstate = () => {
    estatesWS
      .deleteEstate(id)
      .then(response => {
        // Delete exitoso
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

  function isYouTubeVideoURL(input) {
    // Regular expression pattern for YouTube video URLs
    const youtubeURLPattern =
      /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[A-Za-z0-9_-]+/;

    return youtubeURLPattern.test(input);
  }

  const handleEditEstate = () => {
    const newTerrace = selectedButtons.includes('terrace');
    const newBalcony = selectedButtons.includes('balcony');
    const newStorage = selectedButtons.includes('storage');

    if (newTitle === '') {
      setErrorTitle(i18n.t('mandatoryField'));
      handleFocus(inputRefTitle);
      return false;
    } else {
      setErrorTitle(false);
    }

    if (newDescription === '') {
      setErrorDescription(i18n.t('mandatoryField'));
      handleFocus(inputRefDescription);
      return false;
    } else {
      setErrorDescription(false);
    }

    if (newAddressNumber === '') {
      setaddressNumber(0);
    }

    if (newCoveredSquareMeters === '') {
      setErrorCoveredSquareMeters(i18n.t('mandatoryField'));
      handleFocus(inputRefCoveredSquareMeters);
      return false;
    } else {
      setErrorCoveredSquareMeters(false);
    }

    if (newSemiUncoveredSquaremeters === '') {
      setErrorSemiUncoveredSquaremeters(i18n.t('mandatoryField'));
      handleFocus(inputRefSemiUncoveredSquaremeters);
      return false;
    } else {
      setErrorSemiUncoveredSquaremeters(false);
    }

    if (newUncoveredSquareMeters === '') {
      setErrorUncoveredSquareMeters(i18n.t('mandatoryField'));
      handleFocus(inputRefUncoveredSquareMeters);
      return false;
    } else {
      setErrorUncoveredSquareMeters(false);
    }

    if (newPrice === '') {
      setErrorPrice(i18n.t('mandatoryField'));
      handleFocus(inputRefPrice);
      return false;
    } else {
      setErrorPrice(false);
    }

    if (newAntiquity === '') {
      setErrorAntiquity(i18n.t('mandatoryField'));
      handleFocus(inputRefAntiquity);
      return false;
    } else {
      setErrorAntiquity(false);
    }

    if (newSelectedImagesUri.length < 3) {
      setErrorImages(i18n.t('mandatoryImages'));
      return false;
    } else {
      setErrorImages(false);
    }

    if (isNaN(newCoveredSquareMeters)) {
      setErrorCoveredSquareMeters(i18n.t('invalidNumber'));
      handleFocus(inputRefCoveredSquareMeters);
      return false;
    } else {
      setErrorCoveredSquareMeters(false);
    }

    if (isNaN(newSemiUncoveredSquaremeters)) {
      setErrorSemiUncoveredSquaremeters(i18n.t('invalidNumber'));
      handleFocus(inputRefSemiUncoveredSquaremeters);
      return false;
    } else {
      setErrorSemiUncoveredSquaremeters(false);
    }

    if (isNaN(newUncoveredSquareMeters)) {
      setErrorUncoveredSquareMeters(i18n.t('invalidNumber'));
      handleFocus(inputRefUncoveredSquareMeters);
      return false;
    } else {
      setErrorUncoveredSquareMeters(false);
    }

    if (isNaN(newPrice)) {
      setErrorPrice(i18n.t('invalidNumber'));
      handleFocus(inputRefPrice);
      return false;
    } else {
      setErrorPrice(false);
    }

    if (isNaN(newExpenses)) {
      setErrorExpenses(i18n.t('invalidNumber'));
      handleFocus(inputRefExpenses);
      return false;
    } else {
      setErrorExpenses(false);
    }

    if (isNaN(newParking)) {
      setErrorParking(i18n.t('invalidNumber'));
      handleFocus(inputRefParking);
      return false;
    } else {
      setErrorParking(false);
    }

    if (isNaN(newAntiquity)) {
      setErrorAntiquity(i18n.t('invalidNumber'));
      handleFocus(inputRefAntiquity);
      return false;
    } else {
      setErrorAntiquity(false);
    }

    if (newUrlVideo && !isYouTubeVideoURL(newUrlVideo)) {
      setErrorVideo(i18n.t('invalidVideo'));
      handleFocus(inputRefVideo);
      return false;
    } else {
      setErrorVideo(false);
    }

    estatesWS
      .editEstate(
        id,
        newTitle,
        newDescription,
        selectedButton,
        selectedEstado,
        newStreet,
        +newAddressNumber,
        newFloorDpto,
        newNeighborhood,
        newState,
        newCountry,
        selectedTipoPropiedad,
        +newCoveredSquareMeters,
        +newSemiUncoveredSquaremeters,
        +newUncoveredSquareMeters,
        +selectedAmbiente,
        +selectedBaño,
        +selectedDormitorio,
        newTerrace,
        newBalcony,
        newStorage,
        +newParking,
        selectedDisposicion,
        +newAntiquity,
        selectedOrientacion,
        selectedAmenities,
        selectedPrecio,
        +newPrice,
        selectedExpensa,
        newExpenses,
        newLatitude,
        newLongitude,
        newSelectedImagesUri,
        newUrlVideo,
      )
      .then(response => {
        // Edit Publicacion exitoso
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
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Text style={styles.text3}>{i18n.t('stateTitle')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_title')}
            ogValue={newTitle}
            changeValue={handleTitle}
            error={errorTitle}
            innerRef={inputRefTitle}
          />
          <Text style={styles.text3}>{i18n.t('description')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_description')}
            ogValue={newDescription}
            borderWidth={1}
            borderRadius={8}
            height={120}
            changeValue={handleDescription}
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
              width: '102%',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              marginTop: 10,
              marginHorizontal: 5,
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
            <Text style={styles.textBox}>
              {i18n.t('selected_streetAndAdressNumber')}
            </Text>
            <TextInput
              editable={false}
              value={
                newStreet && newAddressNumber !== '0'
                  ? newStreet + ', ' + newAddressNumber
                  : newStreet
              }
              style={styles.message}
            />
          </View>
          <View style={styles.dateTurnBox}>
            <Text style={styles.textBox}>
              {i18n.t('selected_neighborhood')}
            </Text>
            <TextInput
              editable={false}
              value={newNeighborhood}
              style={styles.message}
            />
          </View>
          <View style={styles.dateTurnBox}>
            <Text style={styles.textBox}>{i18n.t('selected_state')}</Text>
            <TextInput
              editable={false}
              value={newState}
              style={styles.message}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
            <Text style={styles.text3}>{i18n.t('floorDpto') + ' '}</Text>
            <InputText
              size="S"
              placeholder={i18n.t('placeholder_floorDpto')}
              changeValue={handleFloorDpto}
              ogValue={newFloorDpto}
            />
            <Text style={styles.textOptional}>{i18n.t('optional')}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'start',
              flexWrap: 'wrap',
              marginTop: 10,
            }}>
            <Text style={styles.text3}>{i18n.t('surfaceCover')}</Text>
            <InputText
              keyboard="phone-pad"
              size="XS"
              placeholder={i18n.t('placeholder_number')}
              ogValue={newCoveredSquareMeters.toString()}
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
            }}>
            <Text style={styles.text3}>{i18n.t('surfaceSemicover')}</Text>
            <InputText
              keyboard="phone-pad"
              size="XS"
              placeholder={i18n.t('placeholder_number')}
              ogValue={newSemiUncoveredSquaremeters.toString()}
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
            }}>
            <Text style={styles.text3}>{i18n.t('surfaceUncover')}</Text>
            <InputText
              keyboard="phone-pad"
              size="XS"
              placeholder={i18n.t('placeholder_number')}
              ogValue={newUncoveredSquareMeters.toString()}
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
              ogValue={newPrice.toString()}
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
              ogValue={newExpenses.toString()}
              changeValue={handleExpenses}
              error={errorExpenses}
              innerRef={inputRefExpenses}
            />
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
              selected={selectedAmbiente !== '0'}
            />
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
              onPress={() => handleButtonClick5('6')}
              selected={selectedAmbiente !== '6'}
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
              selected={selectedDormitorio !== '0'}
            />
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
              onPress={() => handleButtonClick6('6')}
              selected={selectedDormitorio !== '6'}
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
              selected={selectedBaño !== '0'}
            />
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
              width: '102%',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
              marginTop: 10,
              marginHorizontal: 5,
            }}>
            <ButtonSelect
              text={i18n.t('terraza')}
              onPress={() => handleButtonClick10('terraza')}
              selected={!selectedButtons.includes('terraza')}
            />
            <ButtonSelect
              text={i18n.t('balcony')}
              onPress={() => handleButtonClick10('balcony')}
              selected={!selectedButtons.includes('balcony')}
            />
            <ButtonSelect
              text={i18n.t('baulera')}
              onPress={() => handleButtonClick10('baulera')}
              selected={!selectedButtons.includes('baulera')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'start',
              flexWrap: 'wrap',
              marginHorizontal: 5,
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
              ogValue={newParking.toString()}
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
            ogValue={newAntiquity.toString()}
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
              width: '102%',
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
            sizeError={sizeErrorImage}
            handleSizeErrorImage={handleSizeErrorImage}
            onImageUrisChange={handleSelectedImageUris}
          />

          <Text style={styles.text3}>
            {i18n.t('addVideo') + ' '}
            <Text style={styles.textOptional}>{i18n.t('optional')}</Text>
          </Text>
          <InputText
            placeholder={i18n.t('placeholder_URL')}
            ogValue={newUrlVideo}
            changeValue={handleUrlVideo}
            error={errorVideo}
            innerRef={inputRefVideo}
          />

          <Text style={styles.text3}>{i18n.t('state')}</Text>
          <View
            style={{
              flexDirection: 'row',
              width: '102%',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 10,
            }}>
            <ButtonSelect
              text={i18n.t('sellingInRent')}
              size="XXS"
              onPress={() => handleButtonClick9('alquiler - venta')}
              selected={selectedEstado !== 'alquiler - venta'}
            />
            <ButtonSelect
              text={i18n.t('reserved')}
              size="XXS"
              onPress={() => handleButtonClick9('reservada')}
              selected={selectedEstado !== 'reservada'}
            />
            <ButtonSelect
              text={i18n.t('soldRented')}
              size="XXS"
              onPress={() => handleButtonClick9('alquilada - vendida')}
              selected={selectedEstado !== 'alquilada - vendida'}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 16,
            marginBottom: 16,
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
          <Button
            text={i18n.t('delete')}
            size="M"
            color="secondary"
            onPress={() => {
              handleDeleteEstate();
            }}
          />
          <Button
            text={i18n.t('edit')}
            size="M"
            color="primary"
            onPress={() => {
              handleEditEstate();
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
    paddingBottom: 20,
  },
  container2: {
    marginLeft: 25,
    marginRight: 25,
    width: '90%',
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

export default EditarPublicacionXUI;
