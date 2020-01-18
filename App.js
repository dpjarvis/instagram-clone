import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'


// You can import from local files
import MainScreen from './components/MainScreen';


// or any pure javascript modules available in npm

export default class App extends React.Component {
  render() {
    return   <AppStackNavigator />;
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen,
  },
});

const styles = StyleSheet.create({});