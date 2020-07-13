import React, { Component } from 'react';
import Screen1 from './components/1st_screen';
import { AppRegistry } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <Screen1/>
    );
  }
}

AppRegistry.registerComponent('Project1', () => Screen1);