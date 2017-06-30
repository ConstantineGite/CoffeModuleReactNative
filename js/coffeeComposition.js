import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import  Coffee from './Coffee';
import  Header from './header';

const DATA = [
  { id: 1, HEADER: '', src: '' },
  { id: 2, HEADER: '', src: '' },
  { id: 3, HEADER: '', src: '' },
  { id: 4, HEADER: '', src: '' },
  { id: 5, HEADER: '', src: '' },
  { id: 6, HEADER: '', src: '' },
  { id: 7, HEADER: '', src: '' },
];

	class CoffeeComposition extends Component {
	     constructor(props) {
	       super(props);
	       this.slids = ['1', '2', '3', '4', '5', '6'];
	       this.slideSlogan = ['Espresso', 'Caffe Latte',  'Espresso Macchiato', 'Cortado', 'Caffe Americano', 'Cappuccino'];
	       this.Header = ['Espresso Espresso', 'Espresso & Mixed Milk',  'Espresso & Milk Foam', 
	       'Espresso & Steamed Milk', 'Espresso & Hot Water', 'Espresso & Mixed Milk'];
	       this.slideText = ['ml Espresso, 30 m', 'E50 ml Espresso, 70 ml Steamed Milk',  '50 ml Espresso, 30 ml Milk Foam', 
	       '50 ml Espresso, 30 ml Steamed Milk', '50 ml Espresso, 100 ml Hot Water', 
	       '50 ml Espresso, 50 ml Steamed Milk 50 ml Espresso'];
	       this.ListSlidePng = [
	          require('../img/productCoffee/png/1.png'), require('../img/productCoffee/png/2.png'), require('../img/productCoffee/png/3.png'), 
	          require('../img/productCoffee/png/4.png'), require('../img/productCoffee/png/5.png'), require('../img/productCoffee/png/6.png')
	   	   ];
	   	   this.ListSlideGif = [
	   	   	  require('../img/productCoffee/gif/1.gif'), require('../img/productCoffee/gif/2.gif'), require('../img/productCoffee/gif/3.gif'), 
	          require('../img/productCoffee/gif/4.gif'), require('../img/productCoffee/gif/5.gif'), require('../img/productCoffee/gif/6.gif')
	   	   ];	
	 }

	  BuildModule(){
	    return this.slids.map((el) => (
	        <Coffee ListSlidePng={this.ListSlidePng[el-1]}  ListSlideGif={this.ListSlideGif[el-1]} ParamPage={this.props.ParamPage} 
	         ProductPage={this.props.ProductPage} header2={this.Header[el-1]} header={this.slideSlogan[el-1]} key={el} />
	      ))
	  }

    render() {
      return (
            <View style={{flex: 9, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end'}} >
                	{this.BuildModule()}
            </View>

      )
    }
  }

export default CoffeeComposition;