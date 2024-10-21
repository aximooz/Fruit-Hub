import { StyleSheet, Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {

  useEffect(() => {
    const checkUser = async () => {
      let data = await AsyncStorage.getItem("user");
      if (data) {
       
        navigation.replace("Home1");
        console.log("Fetched Data: ", data);
      } else {
      
        setTimeout(() => {
          navigation.replace("IntroScreen");
        }, 2000);
      }
    };

    checkUser(); 
  }, []); 

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require("../../src/assets/applogo.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(255, 255, 255, 1)',
    

  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width:184,
    height: 205,
  },
  
});

export default Splash;
