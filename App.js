import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Track from './track';

//---console.log(store.getState(), 'First');
export default class App extends Component {
  render() {
//---console.log(store.getState(), 'Second');
    return (
      <Provider  store={store}>
          <Track />
      </Provider>
    );
  }
}

