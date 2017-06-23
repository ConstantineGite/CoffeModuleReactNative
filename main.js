// Exported from snack.expo.io
import Expo from 'expo';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Constants, Video} from 'expo';
import App from './App.js'
import  Header from './js/header';
import  Ball from './js/Ball';

class Maine extends Component {
  render() {
    return (
      <View style={{flex: 1,  backgroundColor: '#1b1814', justifyContent: 'flex-end'}}>
         <App />
      </View >
    );
  }
}

Expo.registerRootComponent(Maine);