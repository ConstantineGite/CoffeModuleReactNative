import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Font } from 'expo';

export class Fonts extends React.Component {
  componentDidMount() {
    Font.loadAsync({
        'covesbold': require('./fonts/covesbold.otf'),
  		'coveslight': require('./fonts/coveslight.otf')
    });
  }
}

export  const Styles = StyleSheet.create({
  HEADER1: {
    color : 'white'
  },
  HEADER2: {
    color: 'white'
  },
  IMAGE : {
  	width: '100%', 
  	height: '70%'
  },
  MAINE_CONTAINER : {
  	width: '50%',  
  	height: '34%',  
  	justifyContent: 'flex-end'
  }
});


