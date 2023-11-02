import React from 'react';
import { Modal, View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';

const ImageViewer = ({ visible, imageUri, onClose }) => {
  return (
    <Modal visible={visible} transparent={true}>
      <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text>Cerrar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default ImageViewer;