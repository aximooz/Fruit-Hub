import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  StatusBar ,
  SafeAreaView 
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import ItemList from "./ItemList";
import PriceRangeModal from "./PriceRangeModal";
import SearchDialog from './SearchDialog';  


const Home = ({ navigation }) => {

  const [searchText, setSearchText] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [dialogVisible, setDialogVisible] = useState(false);


  const handleSearch = (text) => {
    setSearchText(text);

    if (text === '') {
      setFilteredItems([]);
      setDialogVisible(false);
    } else {
      const allItems = Object.values(itemsData).flat();
      const filtered = allItems.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredItems(filtered);
      setDialogVisible(true); // Show dialog with filtered items
    }
  };

  const handleSelectItem = (item) => {
    console.log('Selected item:', item.name);
    setDialogVisible(false); // Hide the dialog after selecting an item
  };




  const [modalVisible, setModalVisible] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);


  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const [userName, setUserName] = useState(null); // State to store the user's name
  const isFocused = useIsFocused();
  const [isFilled, setIsFilled] = useState(false);
  const [isFilledd, setIsFilledd] = useState(false);



  
  const options = [
    { id: '1', title: 'Hottest' },
    { id: '2', title: 'Popular' },
    { id: '3', title: 'New Combo' },
    { id: '4', title: 'Top' },
  ];
  
  const itemsData = {
    1: [
      { 
        id: '1', 
        name: 'Tropical Salad', 
        price: '2000', 
        image: require('../assets/item1.png'), 
        ingredients: 'Mango, Pineapple, Kiwi, Coconut, Lime, Mint, Honey' 
      },
      { 
        id: '2', 
        name: 'Berry Salad', 
        price: '3000', 
        image: require('../assets/item2.png'), 
        ingredients: 'Strawberries, Blueberries, Raspberries, Banana, Yogurt, Honey, Almonds' 
      },
      { 
        id: '3', 
        name: 'Citrus Salad', 
        price: '2500', 
        image: require('../assets/item3.png'), 
        ingredients: 'Orange, Grapefruit, Lemon, Lime, Pomegranate, Mint, Honey' 
      },
      { 
        id: '4', 
        name: 'Exotic Salad', 
        price: '1500', 
        image: require('../assets/item4.png'), 
        ingredients: 'Dragon Fruit, Papaya, Lychee, Passionfruit, Mint, Coconut Flakes, Lime' 
      },
      { 
        id: '5', 
        name: 'Classic Salad', 
        price: '4000', 
        image: require('../assets/item5.png'), 
        ingredients: 'Apple, Banana, Grapes, Orange, Kiwi, Lemon Juice, Honey' 
      },
    ],
    2: [
      { 
        id: '6', 
        name: 'Summer Salad', 
        price: '1000', 
        image: require('../assets/item6.png'), 
        ingredients: 'Watermelon, Cucumber, Feta Cheese, Mint, Balsamic Glaze, Lemon Juice, Olive Oil' 
      },
      { 
        id: '7', 
        name: 'Nutty Salad', 
        price: '5000', 
        image: require('../assets/item7.png'), 
        ingredients: 'Banana, Peanut Butter, Honey, Granola, Almonds, Cinnamon, Coconut Flakes' 
      },
      { 
        id: '8', 
        name: 'Avocado Salad', 
        price: '3500', 
        image: require('../assets/item8.png'), 
        ingredients: 'Avocado, Strawberries, Blueberries, Spinach, Feta Cheese, Walnut, Balsamic Dressing' 
      },
      { 
        id: '9', 
        name: 'Melon Salad', 
        price: '4500', 
        image: require('../assets/item9.png'), 
        ingredients: 'Honeydew, Cantaloupe, Mint, Lime, Feta Cheese, Balsamic Reduction, Basil' 
      },
      { 
        id: '10', 
        name: 'Green Salad', 
        price: '1200', 
        image: require('../assets/item10.png'), 
        ingredients: 'Kale, Green Apple, Avocado, Cucumber, Celery, Lemon Dressing, Sunflower Seeds' 
      },
    ],
    3: [
      { 
        id: '11', 
        name: 'Peachy Salad', 
        price: '2900', 
        image: require('../assets/item11.png'), 
        ingredients: 'Peach, Nectarine, Honey, Mint, Lime, Goat Cheese, Pistachios' 
      },
      { 
        id: '12', 
        name: 'Protein Salad', 
        price: '3600', 
        image: require('../assets/item12.png'), 
        ingredients: 'Quinoa, Mixed Berries, Greek Yogurt, Honey, Almonds, Mint, Lime' 
      },
      { 
        id: '13', 
        name: 'Crispy Salad', 
        price: '1800', 
        image: require('../assets/item13.png'), 
        ingredients: 'Apple, Carrot, Raisins, Walnuts, Honey, Lemon Juice, Cinnamon' 
      },
      { 
        id: '14', 
        name: 'Berry Avocado', 
        price: '1700', 
        image: require('../assets/item14.png'), 
        ingredients: 'Avocado, Mixed Berries, Spinach, Walnuts, Feta Cheese, Honey, Balsamic Dressing' 
      },
      { 
        id: '15', 
        name: 'Fiesta Salad', 
        price: '2000', 
        image: require('../assets/item15.png'), 
        ingredients: 'Apple, Banana, Orange, Grapes, Kiwi, Pomegranate, Mint' 
      },
    ],
    4: [
      { 
        id: '16', 
        name: 'Choco Salad', 
        price: '2100', 
        image: require('../assets/item16.png'), 
        ingredients: 'Banana, Cocoa Powder, Honey, Almonds, Coconut Flakes, Yogurt, Vanilla' 
      },
      { 
        id: '17', 
        name: 'Caribbean Salad', 
        price: '3000', 
        image: require('../assets/item17.png'), 
        ingredients: 'Mango, Pineapple, Coconut, Lime, Chili Powder, Mint, Honey' 
      },
      { 
        id: '18', 
        name: 'Fruit Crunch', 
        price: '1000', 
        image: require('../assets/item18.png'), 
        ingredients: 'Mixed Nuts, Dried Fruits, Honey, Oats, Coconut Flakes, Maple Syrup, Cinnamon' 
      },
      { 
        id: '19', 
        name: 'Sassy Salad', 
        price: '4200', 
        image: require('../assets/item19.png'), 
        ingredients: 'Orange, Grapefruit, Lime, Mint, Honey, Pomegranate, Basil' 
      },
      { 
        id: '20', 
        name: 'Holiday Salad', 
        price: '3300', 
        image: require('../assets/item20.png'), 
        ingredients: 'Apple, Cranberries, Pecans, Spinach, Feta, Balsamic Dressing, Orange Juice' 
      },
    ],
  };

  const Items=[{
    id:'11',
    name:'Honey lime Combo',
    image: require('../assets/m1.png'),
    price:'2000',
    ingredients: 'Apple, Cranberries, Pecans, Spinach, Feta, Balsamic Dressing, Orange Juice' 
  },
  {
    id:'22',
    name:'Berry mango combo',
    image: require('../assets/m22.png'),
    price:'2000',
    ingredients: 'Barry, Mango, Pecans, Spinach, Feta, Balsamic Dressing, Orange Juice' 
  }

];

  
  useEffect(() => {
    if (isFocused) {
      getLoggedInUser();
    }

    return () => console.log("Unmounted");
  },[isFocused] );

  const getLoggedInUser = async () => {
    let data = await AsyncStorage.getItem("user");
    if (data) {
      setUserName(data); // Store the user name in the state
      console.log(data);
    } 
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Splash");
  };
  const handleDetailsPage = async () => {
    await AsyncStorage.clear();
    navigation.navigate("ItemDetails");
  };
  const handleTest = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Test");
  };

  const handleHeartClick = () => {
    console.log("Pressed")
    setIsFilled(!isFilled); 
  };
  const handleHeartClick2 = () => {
    console.log("Pressed")
    setIsFilledd(!isFilledd); 
  };

  
  

  return (
    <SafeAreaView> 
      {/* <StatusBar hidden={true}/> */}
    <ScrollView>
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          height: "100%",
          alignItems: "center",
          padding: 24,
          backgroundColor:'rgba(255, 255, 255, 1)'
        }}
      >
        {/* Home Icons */}
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            width: "100%",
            marginTop: 30,
          }}
        >
          <TouchableOpacity onPress={() => navigation.openDrawer()} 
           
          >
            <Ionicons
              style={{ color: "rgba(7, 6, 72, 1)" }}
              name="menu"
              size={24}
            />
          </TouchableOpacity>

          <View
            style={{
              width: 41,
              height: 42,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={()=>navigation.navigate("Baskit")}>
              <FontAwesome
                style={{ color: "rgba(255, 164, 81, 1)" }}
                name="shopping-basket"
                size={24}
              />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  fontSize: 8,
                  color: "rgba(39, 33, 77, 1)",
                }}
              >
                My basket
              </Text>
            </View>
          </View>
        </View>

        {/* Heading */}
        <View
          style={{
            width: 267,
            height: 58,
            alignSelf: "flex-start",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: "rgba(39, 33, 77, 1)",
            }}
          >
            Hello {userName ? userName : "Guest"},
            <Text
              style={{
                fontWeight: 500,
                color: "rgba(39, 33, 77, 1)",
              }}
            >
              {" "}
              What fruit salad combo do you want today?
            </Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(243, 244, 249, 1)",
            borderRadius: 16,
            height: 56,
            width: 288,
            alignSelf: "flex-start",
          }}
        >
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <AntDesign
              name="search1"
              color="black"
              style={{ marginLeft: 24, width: 16, height: 16 }}
            />
            <TextInput 

          value={searchText}
          onChangeText={handleSearch}


              style={{
                flex: 1,
                fontSize: 13,
                fontWeight: "400",
                color: "black",
                paddingLeft: 8,
                marginLeft: 16,
              }}
              placeholder="Search for fruit salad combos"
              placeholderTextColor="rgba(134, 134, 158, 1)"
            />
          </View>

          <View style={{ width: 26, height: 17, marginLeft: 16 }}>
            <TouchableOpacity onPress={toggleModal}
            >
              <Image
                source={require("../assets/setting.png")}
                style={{ width: 26, height: 27, marginLeft: 16 }}
              ></Image>
            </TouchableOpacity>
          </View>

         
        </View>


        <View>
              
        </View>

        <View>
        <PriceRangeModal
        modalVisible={modalVisible}
        toggleModal={toggleModal}
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />
        </View>

 
        <View
          style={{
            height: 32,
            width: 253,
            alignSelf: "flex-start",
            marginTop: 40,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: 500,
              color: "rgba(39, 33, 77, 1)",
            }}
          >
            Recommended Combo
          </Text>
        </View>
        {/* Recomended Combo */}
        <View
          style={{
            
            width: "100%",
            height:183,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 24,
            // display:'none'
           
            
          }}
        >
          <TouchableOpacity 
        onPress={() => navigation.navigate("ItemDetails", { itemId: Items[0].id, itemName: Items[0].name, itemPrice: Items[0].price,itemImage: Items[0].image,itemIng:Items[0].ingredients})} // Navigate to details page
        activeOpacity={1}
          >
          <View
            style={{
              height: 183,
              width: 152,
              borderRadius: 16,
              alignItems: "center",
              backgroundColor: 'white',
              
              borderRadius: 10,
              // Shadow for iOS
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              // Shadow for Android
              elevation: 5,

            }}
          >
            <View
             style={{
  
              
              position:'relative',
              left:56,
              top:16,
              width:18,
              height:18,
              alignItems:'flex-end'
            }}
            >
              <TouchableOpacity onPress={handleHeartClick}>
           

<AntDesign   style={{
             color: isFilled ? 'red' : 'rgba(0,0,0,0.2)',
             
              

           }}
            name="heart" size={18} color="black" />


            </TouchableOpacity>
            </View>
            <View
              style={{
                width: 80,
                height: 80,
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Image 
              style={{
                width:80,
                height:80
              }}
              source={require("../assets/m1.png")}></Image>
              
              <View
                style={{
                  marginTop: 8,
                }}
              >
                <Text
                  style={{
                    width: 152,
                    height: 23,
                    fontSize: 15,
                    fontWeight: 500,
                    color: "rgba(39, 33, 77, 1)",
                    textAlign: "center",
                  }}
                >
                  Honey lime combo
                </Text>
              </View>

              <View
              style={{
                height: 20,
                width: 127,
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                
               
                
              }}
              
              >
                <View
                  style={{
                    height: 20,
                    width: 57,
                   
                    flexDirection: "row",
                    alignItems: "center",
                    
                  }}
                >
                  <View style={{}}>
                    <Image
                      source={require("../assets/Vector.png")}
                      style={{
                        width: 16,
                        height: 12.8,
                      }}
                    ></Image>
                  </View>
                  <Text
                    style={{
                      fontWeight: 200,
                      fontSize: 14,
                      color: "rgba(240, 134, 38, 1)",
                      marginLeft: 4,
                    }}
                  >
                    2,000
                  </Text>

                  <View>
                    <TouchableOpacity
                    
                    >
                    <Image
                      source={require("../assets/Group 10.png")}
                      style={{
                        height: 24,
                        width: 24,
                        marginLeft:50
                      }}
                    ></Image>
                    </TouchableOpacity>
                  </View>

                  
                </View>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity         onPress={() => navigation.navigate("ItemDetails", { itemId: Items[1].id, itemName: Items[1].name, itemPrice: Items[1].price,itemImage: Items[1].image,itemIng:Items[1].ingredients})} // Navigate to details page

          activeOpacity={1}>
          <View
            style={{
              height: 183,
              width: 152,
              borderRadius: 16,

              alignItems: "center",
              backgroundColor: 'white',
              
              borderRadius: 10,
              // Shadow for iOS
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              // Shadow for Android
              elevation: 5,
            }}
          >
            <View
             style={{
  
              
              position:'relative',
              left:56,
              top:16,
              width:18,
              height:18,
              alignItems:'flex-end'
            }}
            >
              <TouchableOpacity onPress={handleHeartClick2}>
              <AntDesign   style={{
             color: isFilledd ? 'red' : 'rgba(0,0,0,0.2)',
             
              

           }}
            name="heart" size={18} color="black" />
            </TouchableOpacity>
            </View>
            <View
              style={{
                width: 80,
                height: 80,
                marginTop: 10,
                alignItems: "center",
              }}
            >
              <Image 
              style={{
                width:80,
                height:80
              }}
              source={require("../assets/m22.png")}></Image>
              
              <View
                style={{
                  marginTop: 8,
                }}
              >
                <Text
                  style={{
                    width: 152,
                    height: 23,
                    fontSize: 15,
                    fontWeight: 500,
                    color: "rgba(39, 33, 77, 1)",
                    textAlign: "center",
                  }}
                >
                  Berry mango combo
                </Text>
              </View>

              <View
              style={{
                height: 20,
                width: 127,
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
               
                
              }}
              
              >
                <View
                  style={{
                    height: 20,
                    width: 57,
                   
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <View style={{}}>
                    <Image
                      source={require("../assets/Vector.png")}
                      style={{
                        width: 16,
                        height: 12.8,
                      }}
                    ></Image>
                  </View>
                  <Text
                    style={{
                      fontWeight: 200,
                      fontSize: 14,
                      color: "rgba(240, 134, 38, 1)",
                      marginLeft: 4,
                    }}
                  >
                    8,000
                  </Text>

                  <View>
                    <TouchableOpacity>
                    <Image
                      source={require("../assets/Group 10.png")}
                      style={{
                        height: 24,
                        width: 24,
                        marginLeft:50
                      }}
                    ></Image>
                    </TouchableOpacity>
                  </View>

                  
                </View>
              </View>
            </View>
          </View>
          </TouchableOpacity>

        
        </View>

          {/* Bottom Manu*/}
      

          <View style={{ flex: 1 }}>
          <ItemList options={options} itemsData={itemsData} navigation={navigation} />

    </View>

        


       
      </View>
      
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({

});

