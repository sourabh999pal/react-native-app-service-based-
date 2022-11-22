import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react';
import Servica from './comp/Servica';


const Lan_Services = () => {
  return (
    <>
      <View style={styles.box}>
        <Text style={styles.text}>Lan related Services </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 88 }}
      >
        <Servica name='Wifi setup' color='#1c3857' />
        <Servica name='Simple wifi router installation' color='#9c2332' />
        <Servica name='Printer setup on LAN' color='#9c2332' />
        <Servica name='Wifi Network Setup' color='#1c3857' />
        <Servica name='Ip Address Config' color='#9c2332' />
        <Servica name='Data Transfer Lan' color='#9c2332' />
        <Servica name='Share drives on Networks' color='#1c3857' />
        <Servica name='Troubleshooting of home/office wifi networks' color='#9c2332' />
      </ScrollView>
    </>
  )
}

export default Lan_Services

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