import React from 'react';

import Icons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Bookings from '../screens/Bookings';
import Profile from '../screens/Profile';
import Support from '../screens/Support';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './Navigation';

const Tab = createBottomTabNavigator();



const Tabnavigation = () =>{
   return(
    <Tab.Navigator
    initialRouteName='navigation'
    
    
    screenOptions={{
        
        
        headerShown:false,
        tabBarShowLabel:false,
        
        tabBarStyle: {
            position:'absolute',
            height:90,
            borderTopStartRadius:30,
            backgroundColor:'white',
          

        },
        tabBarInactiveTintColor:'#838687',
        tabBarActiveTintColor:'#f5363f',
        
      }}
      
    
     >
    <Tab.Screen name="navigation" component={Navigation} 
    options={{
        
      tabBarIcon:({focused,color}) => {
           let iconName;
           iconName = focused ? 'home':'home-outline'
        return(
            
            <Icons name={iconName} color={color} size={26}/>
        )},
        
    }}
    
    />
    <Tab.Screen name="Bookings" component={Bookings} 
     options={{
       
        tabBarIcon:({focused, color}) => {
           let iconName;
           iconName = focused ? 'document-text':'document-text-outline'
        return(
            
            <Icons name={iconName} color={color} size={26}/>
        )},
       
    }}
    />
    <Tab.Screen name="Profile" component={Profile} 
     options={{
        
        tabBarIcon:({focused, color}) => {
           let iconName;
           iconName = focused ? 'person':'person-outline'
        return(
            
            <Icons name={iconName}  color={color} size={26}/>
        )},
        
    }}
    />
    <Tab.Screen name="Support" component={Support} 
     options={{
        
        tabBarIcon:({focused, color}) => {
           let iconName;
           iconName = focused ? 'ios-build':'ios-build-outline'
        return(
            
            <Icons name={iconName} color={color} size={26}/>
        )},
       
    }}
    />
  </Tab.Navigator>
   )
}
export default Tabnavigation