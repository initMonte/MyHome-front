import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Theme from '../../styles/Theme';

const ImageViewer = ({images, currentIndex, onClose, uri = false}) => {
  return (
    <Modal transparent={false} visible={true}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <Swiper
        activeDotColor={Theme.colors.PRIMARY}
        dotColor={Theme.colors.SECONDARY}
        index={currentIndex}
        style={styles.wrapper}
        loop={false}>
        {images.map((image, index) => (
          <View style={styles.slide} key={index}>
            {uri ? (
              <Image
                source={{uri: image}}
                style={styles.image}
                resizeMode="contain"
              />
            ) : (
              <Image source={image} style={styles.image} resizeMode="contain" />
            )}
          </View>
        ))}
      </Swiper>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Theme.colors.BLACK,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: Theme.colors.PRIMARY,
  },
  image: {
    flex: 1,
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    backgroundColor: Theme.colors.PRIMARY,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default ImageViewer;
