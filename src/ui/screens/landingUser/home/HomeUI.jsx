import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, Pressable, StyleSheet} from 'react-native';

import {styleUrl} from '../../../../config/ApiConfig';
import Theme from '../../../../styles/Theme';
import IMAGES from '../../../../assets/images/images';
import i18n from '../../../../assets/strings/I18n';

const HomeUI = ({showFiltrosBusqueda}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.smallContainer}>
            <IMAGES.SVG.UBICATION width={20} height={20} />
            <Text style={styles.textHeader}>{i18n.t('ubication')}</Text>
          </View>
          <Pressable onPress={showFiltrosBusqueda}>
            <IMAGES.SVG.FILTER width={28} height={28} />
          </Pressable>
        </View>
        <View style={styles.container}>
        
        </View>
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
  header: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textHeader: {
    color: Theme.colors.PRIMARY,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  smallContainer: {
    flexDirection: 'row',
    columnGap: 4,
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
});

export default HomeUI;
