import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, Pressable } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import IMAGES from '../../assets/images/images';
import Theme from '../../styles/Theme';
import i18n from '../../assets/strings/I18n';

const PhotoUploader = () => {
  const [imageSource, setImageSource] = useState(null);

  const selectImage = () => {
    const options = {
      title: 'Seleccionar una imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Selección de imagen cancelada');
      } else if (response.error) {
        console.log('Error: ', response.error);
      } else {
        const source = { uri: response.assets[0].uri };
        setImageSource(source);
      }
    });
  };

  return (

    <View>
      <Text style={styles.text3}>{i18n.t('addPhotos') + ' '}
        <Text style={styles.textOptional}>{i18n.t('minimun2')}</Text>
      </Text>
      <View style={styles.imageContainer}>
        <Pressable style={styles.imageContainerChild} onPress={selectImage}>
          <IMAGES.SVG.ADD_IMAGE width={25} height={25} margin={43}/>
        </Pressable>
        {imageSource && (
          <Image
            source={imageSource}
            style={{ width: 110, height: 110, borderRadius: 8 }}
          />
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default PhotoUploader;