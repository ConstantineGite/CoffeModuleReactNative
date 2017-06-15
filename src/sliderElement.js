import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


class sliderElement extends Component {
	componentWillMount() {

	}

	render() {
		return (
<View style={{flex: 1, width: 400, flexDirection: 'row'}}>
          <View style={{flex: 0, flexDirection: 'column'}}>
          <View style={{width: 180, height: 220}}>
          <Image source={require('./img/1.png')} style={{width: 180, height: 220}} />
          </View>
          <View style={{width: 180, height: 220}}>
          <Image source={require('./img/2.png')} style={{width: 180, height: 220}} />
          </View>
          <View style={{width: 180, height: 220}}>
          <Image source={require('./img/3.png')} style={{width: 180, height: 220}} />
          </View>
          </View>
          <View style={{flex: 0, flexDirection: 'column'}}>
          <View style={{width: 180, height: 220}}>
          <Image source={require('./img/4.png')} style={{width: 180, height: 220}} />
          </View>
          <View style={{width: 180, height: 220}}>
          <Image source={require('./img/5.png')} style={{width: 180, height: 220}} />
          </View>
          <View style={{width: 180, height: 220}}>
          <Image source={require('./img/6.png')} style={{width: 180, height: 220}} />
          </View>
          </View>
</View>   
		);
	}
}
/*
const styles = {
	ball: {
		width: 80,
		height: 80,
		borderColor: '#00acc1',
		borderWidth: 40,
		borderRadius: 40,
	}
};
*/
export default sliderElement;
