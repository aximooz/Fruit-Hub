import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const CongratsScreen = ({ navigation,route }) => {

  const { itemName, itemPrice, itemImage } = route.params;

  console.log(itemName);
  const handleAddToCart = () => {
    navigation.replace("Baskit", {
      itemName: itemName,
      itemPrice: itemPrice,
      itemImage: itemImage,
      });
  };


  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 1)",
      }}
    >
      <View
      
      style={{
        marginTop: 160,
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 1)",
      }}>
        <View>
          <Image source={require("../assets/Group 48.png")}></Image>
        </View>

        <View
         style={{
          width:224,
          height:42,
          marginTop:56
        }}>
          <Text
          
          style={{
            fontSize: 28,
            fontWeight:500
          }}
          >
          Congratulations!!!
          </Text>
        </View>

        <View>
          <Text
           style={{
height:60,
width:247,
textAlign:'center',
color:'rgba(39, 33, 77, 1)',
fontSize:17,
fontWeight:400,
marginTop:16

          }}
          >
          Your order have been taken and is being attended to
          </Text>
        </View>

        <View
          style={{
           marginTop:56
          }}
        >
          <TouchableOpacity onPress={handleAddToCart}>
          <Image
          style={{
            width: 133,
            height: 56
          }}
          source={require("../assets/Frame 48.png")}
          >

          </Image>
          </TouchableOpacity>
         
        </View>
        <View
          style={{
           marginTop:48
          }}
        >
          <TouchableOpacity onPress={()=>navigation.navigate("Home")} >
          <Image
          style={{
            width: 181,
            height: 56
          }}
          source={require("../assets/Frame 49.png")}
          >

          </Image>
          </TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
};

export default CongratsScreen;

const styles = StyleSheet.create({});
