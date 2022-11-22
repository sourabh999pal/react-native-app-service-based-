import { ScrollView, StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react';



import { Searchbar } from 'react-native-paper';
import Services from '../component/Services';
import Offers from '../component/Offers';

const Home = ({navigation}) => {
  const onChangeSearch = query => setSearchQuery(query);
  const [searchQuery, setSearchQuery] = React.useState('');

  let iPath = { 
    image1 : require('../asource/1.jpg'),
    image2 : require('../asource/hardware.png'),
    image3 : require('../asource/lan.png'),
    image4 : require('../asource/shift.png'),
    image5 : require('../asource/consulation.png'),
    image6 : require('../asource/software.png')
  };

  return (
    <>
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      
    />

   
   <View>
    <View style={styles.categorysty}>
      <Text style={styles.categorytext}>Categories</Text>
     <TouchableOpacity onPress={() => navigation.navigate('See_all')}>
       <Text style={styles.seeall}>See all...</Text> 
       </TouchableOpacity> 
    </View>
   </View>
   <ScrollView 
   horizontal={true}
   showsHorizontalScrollIndicator ={false}
   >
    <TouchableOpacity onPress={() => navigation.navigate('Software')}> 
      <Services name='Software' color='#1c3857' /> 
      </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Hardware')}> 
      <Services name='Hardware' color='#FEA700'/> 
      </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Desktop_os')}> 
      <Services name='Desktop Os' color='#4ECDF9'/> 
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Lan_services')}> 
      <Services name='LAN Services' color='#FE4B87'/> 
      </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Print_deliver')}> 
      <Services name='Prints Deliver' color='#1c3857'/> 
      </TouchableOpacity >
    <TouchableOpacity onPress={() => navigation.navigate('Drivers')}> 
      <Services name='Drivers' color='#FEA700'/> 
      </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Smart_home')}>
       <Services name='Smart Homes' color='#4ECDF9'/> 
       </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Infra_shifting')}> 
      <Services name='IT Infra Shifting' color='#FE4B87'/> 
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Digital_help')}> 
      <Services name='Digital Help' color='#FE4B87'/> 
      </TouchableOpacity>
   
   </ScrollView>

   
     <View style={styles.blue}>
     <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={styles.trends}>Trending (Digital Help)</Text>
        <TouchableOpacity onPress={() => navigation.navigate('See_al')}>
           <Text style={styles.see}>See all</Text>
           </TouchableOpacity>
      </View>
      <ScrollView
       horizontal={true}
       showsHorizontalScrollIndicator ={false}
        >
      <Offers name='Prints deliver ' price ='430' path={iPath.image1} />
      <Offers name='SSD install' price ='420' path={iPath.image2}/>
      <Offers name='Wifi Extend' price ='430' path={iPath.image3}/>
      <Offers name='Shift Hardware' price ='420' path={iPath.image4}/>
      <Offers name='Consultation' price ='430' path={iPath.image5}/>
      <Offers name='OS Install' price ='420' path={iPath.image6} />
      </ScrollView>
      
     </View>

    
  
    </>
   
  )
}

export default Home




const styles = StyleSheet.create({
  categorytext:{
    fontSize:20, 
    fontWeight:'600',
    color:'#1c3857',
  },
  categorysty:{
    flexDirection:'row',
    padding:20,
    marginTop:20,
  },
  seeall:{
    fontSize:13,
    color:'#edc12d',
    fontWeight:'800',
    marginLeft:230,
    paddingTop:5
  },
  blue:{
    backgroundColor:'#1c3857',
    marginBottom:60,
    width:420,
    borderTopLeftRadius:40,
    paddingBottom:70,
  },
  trends:{
    color:'white',
    fontSize:25,
    fontWeight:'600',
    marginTop:30,
    marginLeft:30,
    marginBottom:15
},
see:{
    color:'#edc12d',
    fontSize:18,
    marginTop:35,
    marginRight:35,
    marginBottom:15
    
},
})