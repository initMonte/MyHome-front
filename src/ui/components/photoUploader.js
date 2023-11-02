import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import IMAGES from '../../assets/images/images';
import Theme from '../../styles/Theme';
import i18n from '../../assets/strings/I18n';
import Lightbox from 'react-native-lightbox-v2';

const PhotoUploader = () => {
  const [imageSources, setImageSources] = useState([{ isAddImage: true }]);

  const selectImage = () => {
    const options = {
      title: 'Seleccionar una imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      mediaType: 'photo',
      multiple: true, 
    };
  
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Selección de imagen cancelada');
      } else if (response.error) {
        console.log('Error: ', response.error);
      } else {
        const newImageSources = response.assets.map((asset) => ({ uri: asset.uri }));
        setImageSources([...imageSources, ...newImageSources]);
      }
    });
  };  

  return (

    <View style={styles.container3}>
      <Text style={styles.text3}>Agregar imágenes
        <Text style={styles.textOptional2}>{'  ' + i18n.t('minimun2')}</Text>
      </Text>
      <FlatList
        data={imageSources}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.imageContainerChild}>
            {item.isAddImage ? (
              <Pressable onPress={selectImage}>
                <IMAGES.SVG.ADD_IMAGE width={25} height={25} margin={43}/>
              </Pressable>
            ) : (
              <Lightbox source={item.uri} doubleTapZoomEnabled swipeToDismiss>
                <Image
                  source={item}
                  style={{ width: '100%', height: '100%', borderRadius: 8, resizeMode: 'contain' }}
                />
              </Lightbox>
            )}
          </View>
        )}
      />
    </View>


  );
};

const styles = StyleSheet.create({
  container3: {
    flex: 0.4,
    backgroundColor: Theme.colors.BACKGROUND,
    paddingHorizontal: -5,
    borderRadius: 10,
    marginTop: 25
  },
  text3: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 7,
    color: Theme.colors.BLACK,
    fontSize: Theme.fonts.M,
    fontWeight: Theme.fonts.BOLD,
  },
  textOptional2: {
    marginLeft: 10,
    color: Theme.colors.PLACEHOLDER,
    fontSize: Theme.fonts.S,
    fontWeight: Theme.fonts.LIGHT,
  },
  imageContainerChild: {
    width: 110,
    height: 110,
    margin: 5,
    borderRadius: 8,
    backgroundColor: Theme.colors.WHITE,
    borderWidth: 1,
    borderColor: Theme.colors.BLACK,
  },
  addImageButton: {
    width: 110,
    height: 110,
    margin: 5,
    borderRadius: 8,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PhotoUploader;