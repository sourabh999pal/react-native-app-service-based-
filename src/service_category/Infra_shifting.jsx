import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import Servica from './comp/Servica';

const Infra_shifting = () => {
  return (
    <>
    <View style={styles.box}>
      <Text style={styles.text}>IT related infra shifting and setup </Text>
    </View>
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginBottom: 88 }}
    >
      <Servica name='Shifting Office LAN Setup' color='#1c3857' />
      <Servica name='Shifting of Hardware & Peripheral' color='#9c2332' />
      <Servica name='Shifting From physical LAN Server to cloud' color='#9c2332' />
     
     
    </ScrollView>
  </>
  )
}

export default Infra_shifting

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