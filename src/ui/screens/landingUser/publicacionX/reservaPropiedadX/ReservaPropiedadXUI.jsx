import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';

import Theme from '../../../../../styles/Theme';
import IMAGES from '../../../../../assets/images/images';
import i18n from '../../../../../assets/strings/I18n';

import Button from '../../../../components/button';
import InputText from '../../../../components/inputText';
import CardState from '../../../../components/cardState';
import {estatesWS} from '../../../../../networking/api/endpoints/EstatesEndpoints';
import {changeRealEstateToReserved} from '../../../../../redux/slices/EstateReducer';

const ReservaPropiedadXUI = ({showCalificarInmobiliaria}) => {
  const dispatch = useDispatch();
  const {
    id,
    description,
    street,
    neighborhood,
    state,
    coveredSquareMeters,
    semiUncoveredSquaremeters,
    uncoveredSquareMeters,
    roomsAmount,
    bathroomsAmount,
    bedroomsAmount,
    price,
    currency,
    expenses,
    images,
    realEstate,
  } = useSelector(state => state.estate);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [code, setCode] = useState('');
  const [openMonth, setOpenMonth] = useState(false);
  const [month, setMonth] = useState('Enero');
  const [itemsMonth, setItemsMonth] = useState([
    {label: 'Enero', value: 'Enero'},
    {label: 'Febrero', value: 'Febrero'},
    {label: 'Marzo', value: 'Marzo'},
    {label: 'Abril', value: 'Abril'},
    {label: 'Mayo', value: 'Mayo'},
    {label: 'Junio', value: 'Junio'},
    {label: 'Julio', value: 'Julio'},
    {label: 'Agosto', value: 'Agosto'},
    {label: 'Septiembre', value: 'Septiembre'},
    {label: 'Octubre', value: 'Octubre'},
    {label: 'Noviembre', value: 'Noviembre'},
    {label: 'Diciembre', value: 'Diciembre'},
  ]);
  const [openYear, setOpenYear] = useState(false);
  const [year, setYear] = useState('2023');
  const [itemsYear, setItemsYear] = useState([
    {label: '2023', value: '2023'},
    {label: '2024', value: '2024'},
    {label: '2025', value: '2025'},
    {label: '2026', value: '2026'},
    {label: '2027', value: '2027'},
    {label: '2028', value: '2028'},
    {label: '2029', value: '2029'},
    {label: '2030', value: '2030'},
  ]);

  const handleName = value => {
    setName(value);
  };

  const handleNumber = value => {
    setNumber(value);
  };

  const handleCode = value => {
    setCode(value);
  };

  const handleReserve = () => {
    estatesWS
      .bookEstate(id)
      .then(response => {
        // Patch exitoso
        console.log(response.data);
        dispatch(changeRealEstateToReserved('reservada'));
        showCalificarInmobiliaria();
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

  const prettifyCurrency = () => {
    if (currency === 'peso') {
      return 'ARS';
    } else {
      return 'USD';
    }
  };

  return (
    <ScrollView style={styles.generalContainer}>
      <View style={styles.container}>
        <Text style={styles.textH1}>{i18n.t('aboutToReserve')}</Text>
        <CardState
          size="L"
          image={{uri: images[0]}}
          tittle={street}
          ubication={neighborhood + ', ' + state}
          currency={prettifyCurrency()}
          amb={roomsAmount}
          dorm={bedroomsAmount}
          bath={bathroomsAmount}
          m2={
            coveredSquareMeters +
            semiUncoveredSquaremeters +
            uncoveredSquareMeters
          }
          description={description.slice(0, 50) + '...'}
          price={price}
          expenses={expenses}
        />
        <Text style={styles.textDescription}>
          {i18n.t('toReserve_start')}
          <Text style={styles.textPrice}>
            {prettifyCurrency() + ' ' + price / 2}
            <Text style={styles.textDescription}>
              {i18n.t('toReserve_end')}
            </Text>
          </Text>
        </Text>
        <View style={styles.containerBody}>
          <Text style={styles.textH2}>{i18n.t('cardData')}</Text>
          <Text style={styles.textH3}>{i18n.t('cardName')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_name')}
            changeValue={handleName}
          />
          <Text style={styles.textH3}>{i18n.t('cardNumber')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_number')}
            keyboard="phone-pad"
            changeValue={handleNumber}
          />
          <Text style={styles.textH3}>{i18n.t('cardCode')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_code')}
            keyboard="phone-pad"
            changeValue={handleCode}
          />
          <Text style={styles.textH3}>{i18n.t('cardExpiry')}</Text>
          <View style={styles.containerDate}>
            <DropDownPicker
              open={openMonth}
              value={month}
              items={itemsMonth}
              setOpen={setOpenMonth}
              setValue={setMonth}
              setItems={setItemsMonth}
              maxHeight={500}
              containerStyle={{
                width: '40%',
              }}
            />
            <DropDownPicker
              open={openYear}
              value={year}
              items={itemsYear}
              setOpen={setOpenYear}
              setValue={setYear}
              setItems={setItemsYear}
              maxHeight={500}
              containerStyle={{
                width: '40%',
              }}
            />
          </View>
        </View>
        <Button text={i18n.t('reserve')} onPress={() => handleReserve()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: Theme.colors.WHITE,
  },
  container: {
    padding: 12,
    width: '100%',
    alignItems: 'center',
  },
  textH1: {
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.L,
    fontWeight: Theme.fonts.BOLD,
  },
  textDescription: {
    color: Theme.colors.BLACK,
    fontWeight: Theme.fonts.LIGHT,
  },
  textPrice: {
    color: Theme.colors.PRIMARY,
    fontWeight: Theme.fonts.BOLD,
  },
  containerBody: {
    alignItems: 'flex-start',
    width: '100%',
    marginTop: 24,
    marginBottom: 24,
  },
  textH2: {
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
  },
  textH3: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
    marginLeft: 6,
    marginTop: 16,
  },
  containerDate: {
    marginTop: 24,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default ReservaPropiedadXUI;