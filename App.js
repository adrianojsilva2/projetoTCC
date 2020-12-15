import React, {useState, useEffect} from 'react';
import {Text, View, Button, Alert} from 'react-native';
//import {css} from './assets/css/Css';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './view/Home';
import Results from './view/Results';
import Escanear from './view/Escanear';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Results" component={Results} />
        <Stack.Screen name="Escanear" component={Escanear} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
