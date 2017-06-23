import React, { Component } from 'react';
import { View, StyleSheet, Alert, Text, Image } from 'react-native';


class Ball extends Component {
	componentWillMount() {

	}

autor(){
     let M =   <View style={{flex: 1, width: 400, flexDirection: 'row'}}>
               <View style={{flex: 0, flexDirection: 'column'}}>   
               <View style={{width: 160, height: 220}}>
               <Image source={require('../img/productCoffee/gif/1.gif')} style={{width: 180, height: 220}} />
               </View>
               <View style={{width: 160, height: 220}}>
               <Image source={require('../img/productCoffee/gif/2.gif')} style={{width: 180, height: 220}} />
               </View>
               <View style={{width: 160, height: 220}}>
               <Image source={require('../img/productCoffee/gif/3.gif')} style={{width: 180, height: 220}} />
               </View>
               </View>
               <View style={{flex: 0, flexDirection: 'column'}}>
               <View style={{width: 160, height: 220}}>
               <Image source={require('../img/productCoffee/gif/4.gif')} style={{width: 180, height: 220}} />
               </View>
               <View style={{width: 160, height: 220}}>
               <Image source={require('../img/productCoffee/gif/5.gif')} style={{width: 180, height: 220}} />
               </View>
               <View style={{width: 160, height: 220}}>
               <Image source={require('../img/productCoffee/gif/6.gif')} style={{width: 180, height: 220}} />
               </View>
               </View>
               </View>  
   return M
}



	render() {
		return (
          <View>
              {this.autor()}
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
export default Ball;