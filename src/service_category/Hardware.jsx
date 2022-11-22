import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';

import Servica from './comp/Servica';

const Hardware = () => {
  return (
    <>
    <View style={styles.box}>
      <Text style={styles.text}>Hardware related Services </Text>
    </View>
       <ScrollView 
       showsVerticalScrollIndicator={false}
       style={{marginBottom:88}}
       >
      <Servica name='Ram Upgradation' color='#1c3857' />
      <Servica name='PC Troubleshooting' color='#9c2332' />
      <Servica name='SSD Drive Installation' color='#9c2332' />
    </ScrollView>
    </>
  )
}

export default Hardware

const styles = StyleSheet.create({
  box:{
    alignSelf:'center',
    padding:20,
  },
  text:{
     fontSize:25,
        fontWeight:'bold',
        color:'red',
  }
})