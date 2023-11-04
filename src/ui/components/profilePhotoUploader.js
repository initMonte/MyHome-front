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

const ProfilePhotoUploader = ({
  onImageSelected,
  isAddImage = true,
  imageSource = null,
}) => {
  console.log(onImageSelected);
  const [image, setImage] = useState(imageSource);
  const [add, setAdd] = useState(isAddImage);

  const deleteImage = () => {
    setImage(null);
    setAdd(true);
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
        const newImage = response.assets.map(asset => ({uri: asset.uri}));
        console.log(response.assets);
        console.log(newImage);
        setAdd(null);
        setImage(newImage);

        if (onImageSelected) {
          onImageSelected(newImage[0].uri);
        }
      }
    });
  };

  return (
    <View style={styles.container3}>
      <View style={styles.imageContainerChild}>
        {add && !image ? (
          <Pressable onPress={selectImage}>
            <IMAGES.SVG.ADD_IMAGE width={25} height={25} margin={43} />
          </Pressable>
        ) : (
          <Pressable>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => deleteImage()}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={selectImage} style={styles.reloadButton}>
              <IMAGES.SVG.ADD_IMAGE_WHITE width={18} height={18} />
            </TouchableOpacity>
            <Image
              source={image}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 50,
                resizeMode: 'cover',
              }}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container3: {
    flex: 0.4,
    backgroundColor: Theme.colors.BACKGROUND,
    paddingHorizontal: -5,
    borderRadius: 50,
    marginVertical: 10,
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
    borderRadius: 50,
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
  reloadButton: {
    position: 'absolute',
    top: 88,
    right: 38,
    width: 30,
    height: 30,
    backgroundColor: Theme.colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  closeButtonText: {
    color: Theme.colors.WHITE,
    fontSize: 15,
  },
});

export default ProfilePhotoUploader;
