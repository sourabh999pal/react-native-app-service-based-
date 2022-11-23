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
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('./src/asource/1.jpg'),
      backgroundColor: '#1c3857',
    },
    {
      key: 2,
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('./src/asource/1.jpg'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Rocket guy',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require('./src/asource/1.jpg'),
      backgroundColor: '#22bcb5',
    }
  ];

  const renderSlide = ({item})=>{
     return (
      <View style={{backgroundColor:item.backgroundColor,height:screen.height}}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.image}  />
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

})