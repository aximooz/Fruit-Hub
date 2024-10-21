import { message,Alert,Image, StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const NameScreen = ({ navigation }) => {
  const [name, setName] = useState("");



  
  const handleLetsGo = async() => {
    if(!name)
    {
        Alert.alert(
            "Enter your name!",
            message, 
            [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"), 
              },
            ],
            { cancelable: false,}
           

          );
        
    }
    else if(name.length<3)
    {
        Alert.alert(
            "Name must be atleast 3 charecter long.",
            message, 
            [
              {
                text: "OK",
                onPress: () => console.log("OK Pressed"), 
              },
            ],
            { cancelable: false,}
           

          );
    }
    else{


      try {
        
        await AsyncStorage.setItem("user", name);
        console.log("name" ,name);
      } catch (error) {
        
      }

      navigation.replace('Home1');
        setName('');
    }
   
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0} 
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../src/assets/fruits2.png")}
              style={styles.image}
            />
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.title}>What is your firstname?</Text>
            <TextInput
              style={styles.input}
              placeholder="Tony"
              value={name}
              onChangeText={(e) => setName(e)}
              placeholderTextColor="#707070"
            />
            <TouchableOpacity onPress={handleLetsGo} style={styles.button}>
              <Text style={styles.buttonText}>Start Ordering</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default NameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'rgba(255, 255, 255, 1)'
  },
  imageContainer: {
    width: '100%',
    height: 469,
    backgroundColor: 'rgba(255, 164, 81, 1)',
    alignItems: 'center',
    paddingVertical: 155,
  },
  image: {
    width: 301,
    height: 260,
  },
  formContainer: {
    width: 327,
    marginVertical: 56,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
    color: 'rgba(39, 33, 77, 1)',
  },
  input: {
    width: '100%',
    height: 56,
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
    paddingVertical: 16,
    paddingHorizontal: 6,
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 24,
    marginTop: 16,
  },
  button: {
    height: 56,
    width: '100%',
    borderRadius: 10,
    marginVertical: 58,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 164, 81, 1)',
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 1)',
  },
});
