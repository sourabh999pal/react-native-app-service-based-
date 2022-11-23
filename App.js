import { ScrollView, StyleSheet, Text, View,Image, Dimensions } from 'react-native'
import React, { useState } from 'react'


import { NavigationContainer } from '@react-navigation/native';

import Tabnavigation from './src/navigation/Tabnavigation';

//introapp imports here 
import AppIntroSlider from 'react-native-app-intro-slider';
import SplashScreen from 'react-native-splash-screen'


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const App = () => {

  setTimeout(() => {
    SplashScreen.hide();
  }, 500);

  const [realshow , setRealshow] = useState(true);
  
  const On_done =()=>{
    setRealshow(false);
  }

  const slides = [
    {
      key: 1,
      title: 'Global eNetworks Ltd.',
      text: 'fast and very trustable company by indian navy , army',
      image: require('./src/asource/1.jpg'),
      backgroundColor: '#1c3857',
    },
    {
      key: 2,
      title: 'Now open to work for public sector ',
      text: 'We provides small services for offices and Homes ',
      image: require('./src/asource/1.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Software / hardware Troubleshootings services',
      text: 'Now ready to solve your hardship ',
      image: require('./src/asource/1.jpg'),
      backgroundColor: '#22bcb5',
    }
  ];

  const renderSlide = ({item})=>{
     return (
      <View style={{backgroundColor:item.backgroundColor,height:screen.height}}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </View>
     )
  }

 
if(realshow){
  return(
    <AppIntroSlider 
    data={slides} 
    renderItem={renderSlide}
    onDone={On_done}
    />
  )
}else{
  return(
    <Main_application/>
  )
}
 
}

const Main_application =()=>{
  return(
    <NavigationContainer>
    <Tabnavigation/>
  
  </NavigationContainer>
  )
}

export default App





const styles = StyleSheet.create({
  image:{
    width:350,
    alignSelf:'center',
    height:300,
  },
  title:{
    fontSize:30,
    alignSelf:'center',
    color:'white',
    margin:40
  },
  text:{
      fontSize:30,
      alignSelf:'center',
      color:'white',
      margin:40
  }
})