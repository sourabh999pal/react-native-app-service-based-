import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import { NavigationContainer } from '@react-navigation/native';

import Tabnavigation from './src/navigation/Tabnavigation';
import Home from './src/screens/Home';


const App = () => {
  return (
  <NavigationContainer>
    <Tabnavigation/>
  
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})