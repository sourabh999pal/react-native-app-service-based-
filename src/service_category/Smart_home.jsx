import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Servica from './comp/Servica'

const Smart_home = () => {
  return (
    <>
      <View style={styles.box}>
        <Text style={styles.text}>Smart home Services </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 88 }}
      >
        <Servica name='Bluetooth speaker setup' color='#1c3857' />
        <Servica name='Installation of Voice control Light/fan' color='#9c2332' />
        <Servica name='Configuration of Smart TV and wifi' color='#9c2332' />
       
       
      </ScrollView>
    </>
  )
}

export default Smart_home

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