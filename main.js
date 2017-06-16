// Exported from snack.expo.io
import Expo from 'expo';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, Video} from 'expo';
import App from './App.js'

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