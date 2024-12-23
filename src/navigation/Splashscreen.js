


import { StyleSheet, Text, View, StatusBar,Image } from 'react-native'
import React,{useEffect} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const Splashscreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.navigate('HomePage'); 
    }, 3000);

    return () => clearTimeout(timer);
}, []);
  return (
    <View>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#777777" translucent={false} />
   
      <LinearGradient colors={['#777777', '#696969', '#5c5c5c', '#515151', '#454545', '#393939', '#242424', '#000']} style={{ height: '100%',alignItems:'center',justifyContent:"center" }}>
      {/* <LinearGradient colors={['#777777', '#696969', '#575757', '#434343', '#393939', '#282828', '#202020', '#000']} style={{ height: '100%',alignItems:'center',justifyContent:"center" }}> */}
      <View style={{}}>

       <Image
        source={require('../assets/p6.jpg')}
        resizeMode="contain"
        style={{
          height: 100,
          width: 100,
          borderRadius: 80,
        }}
      />
     </View>
        <Text style={{color: "#fff", fontSize: responsiveFontSize(2.4), fontWeight: "400",paddingTop:11 }}>GYAN VIGYAN SAMITI ASSAM</Text>
      {/* <View style={{position:"absolute",bottom:4}}>
        <Text style={{fontSize: responsiveFontSize(1.6),fontWeight:"200",fontStyle:"italic"}}>Fueling Your Passion for Sports</Text>
      </View> */}
      
      </LinearGradient>
    </View>
  )
}

export default Splashscreen
const styles = StyleSheet.create({})

