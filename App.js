import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import Page from './page';


export default class App extends Component {
  render() {
    return (
      <Provider  store={store}>
          <Page store={store} />
      </Provider>
    );
  }
}

