import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Styles } from '../stylesheets/headerST';

class Header extends Component {
     constructor(props) {
       super(props);
     }

    ReturnHome(){
    	this.props.Home('coffee') 
    }

	render() {
		  return (
		      <View style={Styles.MAINE_CONTAINER} > 
	       		<TouchableWithoutFeedback  onPress={this.ReturnHome.bind(this)} >
		        	<Image style={Styles.LOGO} source={require('../img/logo/logo.png')} />
	        	</TouchableWithoutFeedback>   
		      </View>
		  )
	    }
	  }

export default Header;