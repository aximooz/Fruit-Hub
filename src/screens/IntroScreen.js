import { Image,StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'


const IntroScreen = ({navigation}) => {


  

    const handleLetsGo=()=>
    {
            navigation.navigate('NameScreen')
    }
  return (
    <View
    style={{
        flex: 1,
        height:"100%",
        width:"100%", 
        alignItems: 'center',
        backgroundColor:'rgba(255, 255, 255, 1)',
      
    }}
    >
      <View 
      style={{

        width:375,
        height:469,
        backgroundColor: 'rgba(255, 164, 81, 1)',
         
        width:"100%",  
        alignItems:'center'
        ,paddingVertical:155
        
        
      }}>
        <Image
        source={require("../../src/assets/fruits.png")}
        style={{width: 301, height: 260
        }}
        />
        
      </View>

      <View
      style=
      {{
        width:327,
        height:199,
        
        marginVertical:56
      }}
      >
        <View 
        style={{
            width:282,
            height:85,
            alignSelf:'flex-start',
            
            

        }}>
            <View>
                <Text
                style={{
                    fontFamily:'',
                    color:'rgba(39, 33, 77, 1)',
                    fontWeight:500,
                    fontSize:17,
                    alignItems:"center"
                }}
                >Get The Freshest Fruit Salad Combo</Text>
            </View>
            <View>
                <Text
                style={{
                    fontFamily:'',
                    color:'rgba(93, 87, 126, 1)',
                    fontWeight:400,
                    fontSize:13,
                    alignItems:"center"
                }}
                >We deliver the best and freshest fruit salad in town. Order for a combo today!!!</Text>
            </View>
            
        </View>
        <View>
        <TouchableOpacity onPress={handleLetsGo}
        
        style={{
            height:56,
            width:327,
            borderRadius:10,
            marginVertical:58,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:'rgba(255, 164, 81, 1)'

        }}>
            <Text
            style={{
                fontWeight:500,
                fontSize:13,
                color:'rgba(255, 255, 255, 1)'


            }}
            >Let's Continue</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({})