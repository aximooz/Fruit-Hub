// SearchModal.js

import React, { useState } from 'react';
import { View, Text, TextInput, Modal, TouchableOpacity, Image, StyleSheet } from 'react-native';

// Sample data
const items = [
  { id: '1', name: 'Fruit Salad', price: '200', image: require('../assets/item1.png') },
  { id: '2', name: 'Veggie Bowl', price: '150', image: require('../assets/item2.png') },
  { id: '3', name: 'Chicken Wrap', price: '250', image: require('../assets/item3.png') },
  // Add more items as needed
];

const SearchModal = ({ modalVisible, setModalVisible }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleSearch = (text) => {
    setSearchTerm(text);
    if (text) {
      const results = items.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredItems(results);
      setModalVisible(results.length > 0);
    } else {
      setModalVisible(false);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={searchTerm}
            onChangeText={handleSearch}
          />
          {filteredItems.map((item) => (
            <View key={item.id} style={styles.itemRow}>
              <Image source={item.image} style={styles.itemImage} />
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    zIndex: 1,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    color: 'blue',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%', // Full width for the input
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '100%', // Full width for the item row
  },
  itemImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  itemText: {
    fontSize: 18,
    flex: 1,
  },
  itemPrice: {
    fontSize: 18,
    color: 'green',
  },
});

export default SearchModal;
