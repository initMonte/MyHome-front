import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';

import Theme from '../../../../../styles/Theme';
import IMAGES from '../../../../../assets/images/images';
import i18n from '../../../../../assets/strings/I18n';

import Button from '../../../../components/button';
import InputText from '../../../../components/inputText';
import CardState from '../../../../components/cardState';

const ContactoPropiedadXUI = ({goBack}) => {
  const [message, setMessage] = useState();
  const [openConsulta, setOpenConsulta] = useState(false);
  const [consulta, setConsulta] = useState('Consulta');
  const [itemsConsulta, setItemsConsulta] = useState([
    {label: 'Consulta', value: 'Consulta'},
    {label: 'Visita programada', value: 'Visita programada'},
  ]);
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);

  const handleMessage = value => {
    setMessage(value);
  };

  const handleSend = () => {
    goBack();
  };

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
          size="L"
          image={IMAGES.OTHERS.TEMPORAL_IMAGE}
          tittle="Av. Gral. Las Heras 2100"
          ubication="RECOLETA, CABA"
          currency="USD"
          amb={2}
          dorm={1}
          bath={3}
          m2={23}
          description="Blablaa blabalbal lablbal lorem ipsum"
          price={72500}
          expenses={24000}
        />
        <View style={styles.container2}>
          <Text style={styles.textH3}>{i18n.t('question_type')}</Text>
          <DropDownPicker
            open={openConsulta}
            value={consulta}
            items={itemsConsulta}
            setOpen={setOpenConsulta}
            setValue={setConsulta}
            setItems={setItemsConsulta}
          />
          {consulta === 'Visita programada' ? (
            <>
              <Text style={styles.textH3}>{i18n.t('date')}</Text>
              <Button
                text={i18n.t('select')}
                color={'primaryInverted'}
                onPress={() => setOpenDate(true)}
              />
            </>
          ) : null}
          <DatePicker
            modal
            open={openDate}
            date={date}
            minimumDate={new Date()}
            minuteInterval={30}
            onConfirm={date => {
              setOpenDate(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpenDate(false);
            }}
          />
          <Text style={styles.textH3}>{i18n.t('message')}</Text>
          <InputText
            placeholder={i18n.t('placeholder_message')}
            changeValue={handleMessage}
            borderWidth={1}
            borderRadius={8}
            height={120}
          />
        </View>
        <Button text={i18n.t('send')} onPress={() => handleSend()} />
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
  container2: {
    width: '100%',
    alignItems: 'flex-start',
  },
  containerColumn: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  textH3: {
    color: Theme.colors.SECONDARY,
    fontSize: Theme.fonts.SM,
    fontWeight: Theme.fonts.BOLD,
    marginTop: 32,
    marginBottom: 16,
    marginRight: 16,
  },
  text: {
    color: Theme.colors.BLACK,
  },
  textButton: {
    color: Theme.colors.WHITE,
  },
});

export default ContactoPropiedadXUI;
