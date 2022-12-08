import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Line=()=>{
  return
}

const Profile = ({navigation}) => {
  return (
    <View>
     <View style={styles.textvox}>
      <Text  style={styles.textbok}>Profile</Text>
     </View>
     <View style={{flexDirection:'row'}}>
     <View style={{flex: 1, height: 1.5, backgroundColor: 'black'}} />
     </View>

     <View style={{
      
      width:'100%',
      backgroundColor:'white'
     }}>
      <Text style={{
        margin:30,
        fontSize:23,
      }}>Verified User</Text>
     </View>
     <View style={{
      width:'100%',
      
     }}>
      <Text style={styles.text}>About App</Text>
      <Text style={styles.text}>Share App</Text>
      <Text style={styles.text}>Rate App</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Login') }>
      <Text style={styles.text2}>Login/Register</Text>
      </TouchableOpacity>
      
     </View>
     
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  textbok:{
    color:'#1c3857',
    fontSize:24,
    fontWeight:'800',
    alignSelf:'center'
  },
  textvox:{
    padding:20,
    flexDirection:'row',
    backgroundColor:'white',
    width:'100%',
    justifyContent:'center'
  },
  text:{
    fontSize:18,
    fontWeight:'700',
    color:'black',
    margin:7
  },
  text2:{
    fontSize:18,
    fontWeight:'700',
    color:'blue',
    margin:7
  }
})