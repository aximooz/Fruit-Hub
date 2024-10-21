import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const PriceRangeModal = ({ modalVisible, toggleModal, minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Price Range</Text>

          <Text>Min Price: ${minPrice}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={500}
            step={10}
            value={minPrice}
            onValueChange={(value) => setMinPrice(value)}
          />

          <Text>Max Price: ${maxPrice}</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={500}
            step={10}
            value={maxPrice}
            onValueChange={(value) => setMaxPrice(value)}
          />

          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  slider: {
    width: 300,
    height: 40,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default PriceRangeModal;
