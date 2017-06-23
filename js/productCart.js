import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Fonts } from '../stylesheets/coffeeElementST'
import { Styles } from '../stylesheets/productST'
import { Video } from 'expo';

class Product extends Component {
     constructor(props) {
      super(props);
    }

BuildModule(){
  let mass = [
    require('../img/productCoffee/1.mp4'), 
    require('../img/productCoffee/2.mp4'), 
    require('../img/productCoffee/3.mp4'),
    require('../img/productCoffee/4.mp4'),
    require('../img/productCoffee/5.mp4'),
    require('../img/productCoffee/6.mp4'),
  ];
   return (
    <View><Video
              source={mass[this.props.prodName]}
              rate={1.0}
              volume={1.0}
              muted={false}
              resizeMode="cover"
              repeat
              style={Styles.VIDEO}
            />
      </View>
  )
}

render() {
     	return ( 
        <View style={Styles.MAINE_CONTAINER}>
            {this.BuildModule()}
        </View>
     	);
     }
}

export default Product;

