import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Servica from './comp/Servica';

const Software = () => {
  return (
   <>
    <View style={styles.box}>
      <Text style={styles.text}>Software related Services </Text>
    </View>
       <ScrollView 
       showsVerticalScrollIndicator={false}
       style={{marginBottom:88}}
       >
      <Servica name='Antivirus Installation' color='#1c3857' />
      <Servica name='Windows Optimization' color='#9c2332' />
    </ScrollView>
    </>
  )
}

export default Software

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