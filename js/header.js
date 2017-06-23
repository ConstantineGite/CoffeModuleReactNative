import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Styles } from '../stylesheets/headerST';

class Header extends Component {
     constructor(props) {
       super(props);
     }


    ReturnHome(){

    }

    render() {
      return (
          <View style={Styles.MAINE_CONTAINER} > 
            <Image style={Styles.LOGO} source={require('../img/logo/logo.png')} />
          </View>
      )
    }
  }

export default Header;