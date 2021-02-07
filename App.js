
import React from 'react';
import {View,SafeAreaProvider} from 'react-native';
import Fb from './Screens/Fb'
import In from './Screens/In'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { Header } from 'react-native-elements';

export default class App extends React.Component{
  render(){
  return (
    <SafeAreaProvider>
    <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Buzz App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
    <AppContainer/>
    </SafeAreaProvider>
  );
}
}
const TabNavigator = createBottomTabNavigator({
  Fb: {screen : Fb},
  In: {screen : In}
})
const AppContainer = createAppContainer(TabNavigator)
