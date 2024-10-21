import React, { useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const Test=({navigation})=>{

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate("Splash");
  };

  

 

  return (
    <View
    
    style={{

      flex:1,
      width:"100%",
      height:"100%",
      alignItems:'center',
      justifyContent:'flex-start',
      marginTop:70
      
    }}>

      <View
      style={{
        width:"94%",
        height:"70%",
        backgroundColor:"rgba(0,0,0,0.2)",
        alignItems:'center',
        justifyContent:"flex-end",
        paddingBottom:24,
        borderRadius:16

      }}
      >
        
      <View
    style={{
      height:40,
      width:150,
      backgroundColor:"red",
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10
    }}
    
    >
      
    <TouchableOpacity onPress={handleLogout}>
      <Text
      style={{
        color:'white'
      }}
      >
        LogOut
      </Text>
    </TouchableOpacity>
  </View>
      <View
    style={{
      height:40,
      width:150,
      backgroundColor:"green",
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
      marginTop:16
    }}
    
    >
      
    <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
      <Text
      style={{
        color:'white'
      }}
      >
        Home
      </Text>
    </TouchableOpacity>
  </View>
      </View>
      
    </View>
    
  );
};


export default Test;
