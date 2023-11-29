import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet, ScrollView} from 'react-native';
import {Image} from 'react-native-svg';

import Theme from '../../../../../styles/Theme';
import i18n from '../../../../../assets/strings/I18n';
import IMAGES from '../../../../../assets/images/images';

import Button from '../../../../components/button';
import ButtonSelect from '../../../../components/buttonSelect';
import {estatesWS} from '../../../../../networking/api/endpoints/EstatesEndpoints';

const FiltroBusquedaUI = ({goHome}) => {
  const [selectedButton, setSelectedButton] = useState('venta');
  const handleButtonClick = buttonName => {
    setSelectedButton(buttonName);
  };

  const [selectedTipoPropiedad, setSelectedTipoPropiedad] = useState('casa');
  const handleButtonClick2 = buttonName => {
    setSelectedTipoPropiedad(buttonName);
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

  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const handleButtonClick11 = buttonName => {
    if (selectedAmenities.includes(buttonName)) {
      setSelectedAmenities(selectedAmenities.filter(btn => btn !== buttonName));
    } else {
      setSelectedAmenities([...selectedAmenities, buttonName]);
    }
  };

  const handleFilter = () => {
    let rentOrSale = 'alquiler';
    let estateType = 'oficina';
    let neighborhood = 'San Nicolas';
    let currency = 'peso';
    let priceMin = '200000';
    let priceMax = '200700';
    let roomsAmount = 3;
    let bedroomsAmount = 1;
    let bathroomsAmount = 1;
    let state = 'CABA';
    let amenities = '';
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
        amenities,
      )
      .then(response => {
        // Get exitoso
        console.log(response.data.estates);
        //setEstates(response.data.estates);
        //goHome();
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
        <Text style={styles.text3}>{i18n.t('rooms')}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'start',
            flexWrap: 'wrap',
            marginTop: 10,
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
            onPress={() => handleButtonClick5('6')}
            selected={selectedAmbiente !== '6'}
          />
        </View>

        <Text style={styles.text3}>{i18n.t('bedrooms')}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'start',
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
            onPress={() => handleButtonClick6('6')}
            selected={selectedDormitorio !== '6'}
          />
        </View>

        <Text style={styles.text3}>{i18n.t('bathrooms')}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'start',
            flexWrap: 'wrap',
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
});

export default FiltroBusquedaUI;
