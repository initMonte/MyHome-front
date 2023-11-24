import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Theme from '../../../../styles/Theme';
import i18n from '../../../../assets/strings/I18n';
import IMAGES from '../../../../assets/images/images';
import {logoutAction} from '../../../../redux/slices/AuthReducer';
import {logoutEstate} from '../../../../redux/slices/EstateReducer';
import {logoutUser} from '../../../../redux/slices/UserReducer';
import {userWS} from '../../../../networking/api/endpoints/UserEndpoints';

const PerfilUI = ({
  showLogin,
  showMisDatos,
  showConsultas,
  showVisitasProgramadas,
}) => {
  const dispatch = useDispatch();
  const {id, email, email2, name, surname, telephone, telephone2, avatarName} =
    useSelector(state => state.user);

  console.log(' ');
  console.log('---------');
  console.log('id: ' + id);
  console.log('email: ' + email);
  console.log('email2: ' + email2);
  console.log('name: ' + name);
  console.log('surname: ' + surname);
  console.log('telephone: ' + telephone);
  console.log('telephone2: ' + telephone2);
  console.log('avatar: ' + avatarName);
  console.log('---------');
  console.log(' ');

  const handleLogout = async () => {
    try {
      await GoogleSignin.signOut();
      dispatch(logoutAction());
      dispatch(logoutEstate());
      dispatch(logoutUser());
      showLogin();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteUser = () => {
    userWS
      .deleteUser()
      .then(response => {
        // Delete exitoso
        handleLogout();
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
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          showHideTransition={'fade'}
          hidden={false}
        />
        <View style={styles.containerRow}>
          <View style={styles.AvatarContainer}>
            {avatarName && (
              <Image source={{uri: avatarName}} style={styles.profilePhoto} />
            )}
          </View>
          <View>
            <Text style={styles.textH1}>
              {surname ? name + ' ' + surname : name}
            </Text>
            <View style={styles.containerLogout}>
              <Pressable onPress={() => handleLogout()}>
                <Text style={styles.textLogout}>
                  {i18n.t('logout') + ' '}
                  <IMAGES.SVG.LOGOUT width={13} height={13} />
                </Text>
              </Pressable>
              <Pressable onPress={() => handleDeleteUser()}>
                <Text style={styles.textLogout}>
                  {i18n.t('deleteAccount') + ' '}
                  <IMAGES.SVG.TRASH width={13} height={13} />
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Pressable onPress={() => showMisDatos()} style={styles.button}>
          <IMAGES.SVG.USER width={30} height={30} />
          <Text style={styles.textButton}>{i18n.t('myData')}</Text>
          <Text style={styles.textDescription}>
            {i18n.t('myData_description')}
          </Text>
        </Pressable>
        <Pressable onPress={() => showConsultas()} style={styles.button}>
          <IMAGES.SVG.MAIL width={30} height={30} />
          <Text style={styles.textButton}>{i18n.t('questions')}</Text>
          <Text style={styles.textDescription}>
            {i18n.t('questions_description_realState')}
          </Text>
        </Pressable>
        <Pressable
          onPress={() => showVisitasProgramadas()}
          style={styles.button}>
          <IMAGES.SVG.HOME_HEART width={30} height={30} />
          <Text style={styles.textButton}>{i18n.t('programmedViews')}</Text>
          <Text style={styles.textDescription}>
            {i18n.t('programmedViews_description_realState')}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  generalContainer: {
    backgroundColor: Theme.colors.SECONDARY,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerRow: {
    width: 360,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerLogout: {
    width: 250,
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: 360,
    height: 150,
    backgroundColor: Theme.colors.WHITE,
    margin: 16,
    padding: 16,
    borderRadius: 10,
  },
  textButton: {
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
    marginTop: 5,
    marginBottom: 5,
  },
  textDescription: {
    color: Theme.colors.PLACEHOLDER,
    fontSize: Theme.fonts.SM,
  },
  textH1: {
    marginBottom: 3,
    color: Theme.colors.WHITE,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  textLogout: {
    color: Theme.colors.WHITE,
  },
  profilePhoto: {
    width: 77,
    height: 77,
    borderRadius: 45,
  },
  AvatarContainer: {
    width: 77,
    height: 77,
    marginRight: 26,
  },
});

export default PerfilUI;
