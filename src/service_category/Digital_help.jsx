import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import Servica from './comp/Servica';

const Digital_help = () => {
  return (
    <>
    <View style={styles.box}>
      <Text style={styles.text}>Digital help with experts  </Text>
    </View>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 88 }}
    >
     <Servica name='Consultation on Latest Technology' color='#1c3857' />
        <Servica name='Online Meeting' color='#9c2332' />
        <Servica name='Remote connection' color='#9c2332' />
        <Servica name='Word' color='#1c3857' />
        <Servica name='Excel' color='#9c2332' />
        <Servica name='Powerpoint' color='#9c2332' />
        <Servica name='PC not stating ' color='#1c3857' />
        
     
     
    </ScrollView>
  </>
  )
}

export default Digital_help

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