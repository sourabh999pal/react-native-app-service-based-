import { StyleSheet, Text, View,ScrollView } from 'react-native';
import React from 'react';

import Servica from './comp/Servica';

const Desktop_os = () => {
  return (
    <>
    <View style={styles.box}>
      <Text style={styles.text}>Desktop Operating system </Text>
    </View>
       <ScrollView 
       showsVerticalScrollIndicator={false}
       style={{marginBottom:88}}
       >
      <Servica name='Installation of Linux' color='#1c3857' />
      <Servica name='Installation of Windows' color='#9c2332' />
      <Servica name='Upgradation of OS' color='#9c2332' />
      <Servica name='Update of Os ' color='#3c2332' />
    </ScrollView>
    </>
  )
}

export default Desktop_os

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