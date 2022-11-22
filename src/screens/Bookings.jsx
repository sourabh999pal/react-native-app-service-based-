import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Bookings = () => {

const [show, setShow] = useState(false)
  return (
    <>
    <View style={styles.textvox}>
      <Text style={styles.textbok}>My Bookings</Text>
     
      
    </View>
     <View style={{flexDirection:'row'}}>
     <View style={{flex: 1, height: 1.5, backgroundColor: 'black'}} />
     </View>
     <View style={styles.main}>
      <TouchableOpacity onPress={() => setShow(false)}>
      <View style={show? styles.nonactive : styles.active}>
       <Text style={styles.button}>Ongoing</Text>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => setShow(true)}>
      <View style={show ? styles.active1 : styles.nonactive}>
        <Text style={styles.button1}>History</Text>
      </View>
      </TouchableOpacity>
      
     </View>
     <View style={show ? styles.hide : styles.ongoing}>
      <Text>Ongoing text details </Text>
     </View>
     <View style={show ? styles.ongoing:styles.hide}>
      <Text> History text details</Text>
     </View>
     </>
  )
}

const book=()=>{
  return(
    <View>
     <Text>this is Ongoing component</Text>
    </View>
  )
}

export default Bookings

const styles = StyleSheet.create({
  textbok:{
    color:'#1c3857',
    fontSize:24,
    fontWeight:'800'
  },
  textvox:{
    alignSelf:'center',
    padding:20,
    flexDirection:'row',
    width:'100%',
    backgroundColor:'white',
    justifyContent:'center',
  },
  button:{
    fontSize:16,
    color:'black',
    fontWeight:'600',
    padding:5,
   
  },
  button1:{
    fontSize:16,
    color:'black',
    fontWeight:'600',
    padding:5,
    
    alignSelf:'center'
  },
  active:{
    backgroundColor:'white',
    margin:2,
    borderRadius:10,
    width:180,
    alignItems:'center',
  },
  active1:{
    backgroundColor:'white',
    margin:2,
    borderRadius:10,
    width:180,
    alignItems:'center',
    marginLeft:13
  },
  main:{
    flexDirection:'row',
    marginTop:20,
    width:null,
    height:35,
    backgroundColor:'#d1d2d7',
    borderRadius:10,
    marginHorizontal:16,
  },
  nonactive:{
   
    margin:2,
    borderRadius:10,
    width:180,
    alignItems:'center',
  },
  hide:{
    display:'none'
  },
  ongoing:{
    alignItems:'center',
    padding:20,
    marginTop:10,
  }
})