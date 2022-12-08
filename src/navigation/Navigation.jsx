import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Software from '../service_category/Software';
import Hardware from '../service_category/Hardware';
import Desktop_os from '../service_category/Desktop_os';
import Lan_Services from '../service_category/Lan_Services';
import Drivers from '../service_category/Drivers';
import Smart_home from '../service_category/Smart_home';
import Infra_shifting from '../service_category/Infra_shifting';
import Prints_delivery from '../service_category/Prints_delivery';
import Digital_help from '../service_category/Digital_help';
import See_all from '../service_category/See_all';
import See_al from '../trending_service/See_al';
import Register from '../Signup/Register';
import Login from '../Signup/Login';

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <Stack.Navigator
    initialRouteName='Home'
    screenOptions={{
        headerShown:false,
    }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Software" component={Software} />
      <Stack.Screen name="Hardware" component={Hardware} />
      <Stack.Screen name="Desktop_os" component={Desktop_os} />
      <Stack.Screen name="Lan_services" component={Lan_Services} />
      <Stack.Screen name="Drivers" component={Drivers} />
      <Stack.Screen name="Smart_home" component={Smart_home} />
      <Stack.Screen name="Infra_shifting" component={Infra_shifting} />
      <Stack.Screen name="Print_deliver" component={Prints_delivery} />
      <Stack.Screen name="Digital_help" component={Digital_help} />
      <Stack.Screen name="See_all" component={See_all} />
      <Stack.Screen name="See_al" component={See_al} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
      
    </Stack.Navigator>
  )
}

export default Navigation
