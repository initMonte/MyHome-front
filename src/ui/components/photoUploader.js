import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import IMAGES from '../../assets/images/images';
import Theme from '../../styles/Theme';
import i18n from '../../assets/strings/I18n';
import Lightbox from 'react-native-lightbox-v2';
import ImageViewer from './imageViewer';

const PhotoUploader = ({
  onImageUrisChange,
  error = false,
  sizeError = false,
  handleSizeErrorImage,
  imagenesEditar = false,
}) => {
  const [imageSources, setImageSources] = useState([{isAddImage: true}]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const selectImageIndex = index => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const deleteImage = indexToRemove => {
    const updatedImages = imageSources.filter(
      (_, index) => index !== indexToRemove,
    );
    setImageSources([...updatedImages]);
    onImageUrisChange(updatedImages.map(image => image.uri));
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

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('Selección de imagen cancelada');
      } else if (response.error) {
        console.log('Error: ', response.error);
      } else {
        const newImageSources = response.assets.map(asset => ({
          uri: asset.uri,
          fileSize: asset.fileSize,
        }));

        // Check the file sizes
        const exceedsSizeLimit = newImageSources.some(
          image => image.fileSize > 10 * 1024 * 1024,
        ); // MB in bytes

        if (exceedsSizeLimit) {
          console.log('La imagen seleccionada pesa mas de 10mb');
          handleSizeErrorImage(exceedsSizeLimit);
        } else {
          const updatedImages = [...imageSources, ...newImageSources];
          setImageSources(updatedImages);
          onImageUrisChange(updatedImages.map(image => image.uri));
        }
      }
    });
  };

  return (
    <View style={error ? styles.container33 : styles.container3}>
      <Text style={styles.text3}>
        Agregar imágenes
        <Text style={styles.textOptional2}>{'  ' + i18n.t('minimun2')}</Text>
      </Text>
      <Text style={styles.textOptional2}>{i18n.t('maxImageSize')}</Text>
      <FlatList
        data={imageSources}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.imageContainerChild}>
            {item.isAddImage ? (
              <Pressable onPress={selectImage}>
                <IMAGES.SVG.ADD_IMAGE width={25} height={25} margin={43} />
              </Pressable>
            ) : (
              <Pressable onPress={() => selectImageIndex(index - 1)}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => deleteImage(index)}>
                  <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
                <Image
                  source={item}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 8,
                    resizeMode: 'cover',
                  }}
                />
              </Pressable>
            )}
          </View>
        )}
      />

      {selectedImageIndex !== null && (
        <ImageViewer
          images={imageSources.filter(item => !item.isAddImage)}
          currentIndex={selectedImageIndex}
          onClose={closeLightbox}
        />
      )}
      {error && (
        <Text
          style={{color: 'red', position: 'absolute', bottom: -25, left: 5}}>
          {error}
        </Text>
      )}
      {sizeError && (
        <Text
          style={{color: 'red', position: 'absolute', bottom: -25, left: 5}}>
          {error}
        </Text>
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
    marginTop: 25,
    marginBottom: 0,
  },
  container33: {
    flex: 0.4,
    backgroundColor: Theme.colors.BACKGROUND,
    paddingHorizontal: -5,
    borderRadius: 10,
    marginTop: 25,
    marginBottom: 25,
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

export default PhotoUploader;
