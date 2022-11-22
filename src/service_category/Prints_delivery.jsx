import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import Servica from './comp/Servica';

const Prints_delivery = () => {

  return (
    <>
      <View style={styles.box}>
        <Text style={styles.text}>Delivery of prints  </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 88 }}
      >
        <Servica name='Delivery of print soft copy of pdf/word files' color='#1c3857' />
       
       
      </ScrollView>
    </>
  )
}

export default Prints_delivery

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