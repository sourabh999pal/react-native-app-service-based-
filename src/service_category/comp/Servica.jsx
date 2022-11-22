import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Servica = ({name, color}) => {
  return (
    <View style={{ 
        width:null,
        height:303,
        backgroundColor:color,
        borderRadius:16,
        margin:5,
        }}>
          <Text style={styles.box_text}>{name}</Text>
        </View>
  )
}

export default Servica

const styles = StyleSheet.create({
    box:{
        width:120,
        height:120,
     
        borderRadius:16,
        margin:15,
    },
    box_text:{
        fontSize:20,
        fontWeight:'500',
        color:'white',
        margin:15
    },
   
})