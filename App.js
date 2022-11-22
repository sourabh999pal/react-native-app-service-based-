import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'


import { NavigationContainer } from '@react-navigation/native';

import Tabnavigation from './src/navigation/Tabnavigation';

//introapp imports here 
import AppIntroSlider from 'react-native-app-intro-slider';





const App = () => {

  const [realshow , setRealshow] = useState(false);
  
  const On_done =()=>{
    setRealshow(false);
  }

  const slides = [
    {
      key: 1,
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('./src/asource/1.jpg'),
      backgroundColor: '#59b2ab',
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
      <View>
        <Text>{item.title}</Text>
      </View>
     )
  }

  return(
   <ScrollView>
    <View>
      {realshow ? <AppIntroSlider /> : <Main/>  }
    </View>
   </ScrollView>
  )
}

export default App

const Main = () => {
  return(
    <NavigationContainer>
    <Tabnavigation/>
  
  </NavigationContainer>
  )
}



const styles = StyleSheet.create({})