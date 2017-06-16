// Exported from snack.expo.io
import Expo from 'expo';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, Video} from 'expo';
import App from './App.js'

/*
  <Video
      source={require('./1.webm')}
      rate={1.0}
      volume={1.0}
      muted={false}
      resizeMode="cover"
      repeat
      style={{ width:360, height: 700 }}
    />
*/

class Maine extends Component {
  render() {
    return (
      <View >
         <App />
      </View >
    );
  }
}

Expo.registerRootComponent(Maine);