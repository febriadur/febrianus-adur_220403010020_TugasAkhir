import Home from "./screen/Home.tsx";
import {Text,TextInput,View,Button,Alert,StyleSheet } from 'react-native';
import Produk from "./screen/Produk.tsx";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";


const tabs=createBottomTabNavigator();
const Mainnavigasi = ()=>{
  return (
    
    <tabs.Navigator>
      <tabs.Screen name="Home" component={Home}/>
      
      <tabs.Screen name="Produk" component={Produk}/>
      
    </tabs.Navigator>
    
  )
}

export default function App(){
  
  return(
    
   <NavigationContainer>
    <Mainnavigasi/>
   </NavigationContainer>
  );
}