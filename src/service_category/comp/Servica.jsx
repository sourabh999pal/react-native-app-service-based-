import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Servica = ({name, color,price}) => {
  return (
    <View style={{ 
        width:null,
        height:303,
        backgroundColor:color,
        borderRadius:16,
        margin:5,
        }}>
          <Text style={styles.box_text}>{name}</Text>
          <View style={{
            width:120,
            height:45,
            backgroundColor:'skyblue',
            borderRadius:15
          }}>
            <Text style={{
              fontSize:18,
              fontWeight:'600',
              color:'black',
              padding:8,
            }}>Price: {price} {'\u20B9'}   </Text>
          </View>
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