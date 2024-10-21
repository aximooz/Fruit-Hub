import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";

const Baskit = ({ navigation }) => {

  



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
      flex:1,
      justifyContent:'center'
    }}>
      <Text>
      Under Development!!
      </Text>
    </View>
    <View 
    style={{
      fontSize: 20,
      marginBottom:50,
      backgroundColor:"rgba(255, 164, 81, 1)",
      color:'white',
      borderRadius:8

    }}>
      <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
      <Text 
      style={{
        fontSize: 16,
        color:'white',
        padding:15,
        
  
      }}>
        Home
      </Text>
      </TouchableOpacity>
     
    </View>
    </View>
  );
};

export default Baskit;

const styles = StyleSheet.create({});
