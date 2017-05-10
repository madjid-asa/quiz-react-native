import Welcome from './App/Components/Welcome';


import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

export default class cultarte extends Component {
  render() {
    const sceneConfiguration = () => {return Navigator.SceneConfigs.HorizontalSwipeJump};
    const sceneRender = (route, navigator) => {
          if (route.component)
              return <route.component navigator={navigator} {...route.passProps} />;
    }
    return (
      <Navigator
            initialRoute={{ name: 'Welcome', component: Welcome }}
            configureScene={sceneConfiguration}
            renderScene={sceneRender}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('cultarte', () => cultarte);
