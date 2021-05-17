import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native'
import {MyTabs} from "./src/navigation/NavigationBottom";

export default function App (){
  return(
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
  )
}
