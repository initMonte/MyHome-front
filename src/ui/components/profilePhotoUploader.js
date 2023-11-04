import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import IMAGES from '../../assets/images/images';
import Theme from '../../styles/Theme';
import i18n from '../../assets/strings/I18n';
import Lightbox from 'react-native-lightbox-v2';
import ImageViewer from './imageViewer';

const ProfilePhotoUploader = () => {
  const [imageSources, setImageSources] = useState([{ isAddImage: true }]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const selectImageIndex = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const deleteImage = (indexToRemove) => {
    const updatedImages = imageSources.filter((_, index) => index !== indexToRemove);
    setImageSources([...updatedImages]);
  };

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
              <Pressable onPress={() => selectImageIndex(index-1)}>
                <TouchableOpacity style={styles.closeButton} onPress={() => deleteImage(index)}>
                  <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
                <Image
                  source={item}
                  style={{ width: '100%', height: '100%', borderRadius: 8, resizeMode: 'cover' }}
                />
                
              </Pressable>
            )}
          </View>
        )}
      />

      {selectedImageIndex !== null && (
        <ImageViewer
          images={imageSources.filter((item) => !item.isAddImage)}
          currentIndex={selectedImageIndex}
          onClose={closeLightbox}
        />
      )}
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
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 25,
    height: 25,
    backgroundColor: Theme.colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 15,
  },
});

export default ProfilePhotoUploader;