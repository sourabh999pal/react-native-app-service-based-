import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import Servica from './comp/Servica';

const Drivers = () => {
  return (
    <>
    <View style={styles.box}>
      <Text style={styles.text}>Drivers setup for pc and pc accesories </Text>
    </View>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 88 }}
    >
      <Servica name='Printers Driver Installation' color='#1c3857' />
      <Servica name='Mouse/keyboard' color='#9c2332' />
      <Servica name='Wifi adapter' color='#9c2332' />
      
    </ScrollView>
  </>
  )
}

export default Drivers

const styles = StyleSheet.create({
  box: {
    alignSelf: 'center',
    padding: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  }
})