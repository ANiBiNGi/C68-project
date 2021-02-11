
import React from 'react';
import {View} from 'react-native';
import Fb from './Screens/Fb'
import In from './Screens/In'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { } from 'react-native-elements';

export default class App extends React.Component{
  render(){
  return (  
    <AppContainer/>
  );
}
}
const TabNavigator = createBottomTabNavigator({
  Fb: {screen : Fb},
  In: {screen : In}
})
const AppContainer = createAppContainer(TabNavigator)
