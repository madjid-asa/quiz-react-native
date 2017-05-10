import Welcome from './App/Components/Welcome'
import Choose from './App/Components/Choose'
import Game from './App/Components/Game'
import Finish from './App/Components/Finish'
import App from './App/Components/App'


import React, { Component } from 'react'

import {
  AppRegistry,
  StyleSheet,
} from 'react-native'

// import {StackNavigator,} from 'react-navigation'

import { Provider } from 'react-redux'
import configureStore from './App/configureStore'
// const navigation = StackNavigator({
//   welcome: {screen: Welcome},
//   Choose: {screen: Choose},
//   Game: {screen: Game},
//   Finish: {screen: Finish},
// });
const store = configureStore();
const cultarte = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
export default cultarte;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('cultarte', () => cultarte);
