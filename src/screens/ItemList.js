import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';

const ItemList = ({ options, itemsData, navigation }) => {
  const [selectedOption, setSelectedOption] = useState(options[0].id);
  const [likedItems, setLikedItems] = useState([]);



  const handleOptionPress = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleHeartClick = (itemId) => {
    setLikedItems((prevLikedItems) =>
      prevLikedItems.includes(itemId)
        ? prevLikedItems.filter((id) => id !== itemId)
        : [...prevLikedItems, itemId]
    );
  };

  const renderOption = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleOptionPress(item.id)}
      style={[
        styles.option,
        selectedOption === item.id && styles.selectedOption,
      ]}
    >
      <Text
        style={[
          styles.optionText,
          selectedOption === item.id
            ? styles.selectedOptionText
            : styles.unselectedOptionText,
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate("ItemDetails", { itemId: item.id, itemName: item.name, itemPrice: item.price,itemImage: item.image,itemIng:item.ingredients})} // Navigate to details page
        style={{ flex: 1 }} // Ensures the whole card is clickable
      >
        <TouchableOpacity
          onPress={() => handleHeartClick(item.id)}
          style={styles.heartIcon}
        >
       
          <AntDesign  name="heart"
            size={18}
            color={likedItems.includes(item.id) ? 'red' : 'rgba(0,0,0,0.2)'} />  
           
        </TouchableOpacity>
        <Image 

        
      
          source={item.image}
          style={styles.itemImage}
        />
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.itemBottom}>
          <View style={styles.priceContainer}>
            <Image
              source={require('../assets/Vector.png')} // Currency image
              style={styles.currencyImage}
            />
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
          <TouchableOpacity style={styles.addToCartButton}>
            <Image
              source={require('../assets/Group 10.png')} // Add to Cart image
              style={{
                width: 24,
                height: 24,
              }}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <FlatList
          data={options}
          renderItem={renderOption}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.optionsContainer}
        />
        <FlatList
          data={itemsData[selectedOption]}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.itemsContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    paddingVertical: 20, 
  },
  container: {
    paddingTop: 50,
  },
  optionsContainer: {
    justifyContent: 'space-between',
  },
  option: {
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  selectedOption: {
    borderBottomWidth: 2,
    borderBottomColor: '#FFA451',
  },
  optionText: {
    textAlign: 'center',
  },
  selectedOptionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27214D',
  },
  unselectedOptionText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#D3D3D3',
  },
  itemsContainer: {
    marginTop: 24,
    paddingBottom: 20
  },
  card: {
    width: 140,
    height: 150,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 10,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heartIcon: {
    alignSelf: 'flex-end',
    marginRight:10,
    marginTop:5
  },
  itemImage: {
    width: 64,
    height: 64,
    marginLeft:36

  },
  itemName: {
    fontSize: 12,
    color: '#27214D',
    textAlign: 'center',
  },
  itemBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginHorizontal: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencyImage: {
    width: 16,
    height: 12,
    marginRight: 5,
  },
  itemPrice: {
    fontSize: 14,
    color: '#F08626',
  },
  addToCartButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default ItemList;
