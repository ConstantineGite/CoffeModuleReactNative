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
       this.ListSlide = [
          require('../img/1.png'), require('../img/2.png'), require('../img/3.png'), 
          require('../img/4.png'), require('../img/5.png'), require('../img/6.png')
   ];
 }

  getButtons(){
    return this.slids.map((el) => (
        <Coffee ListSlide={this.ListSlide[el-1]} ParamPage={this.props.ParamPage} ProductPage={this.props.ProductPage} 
         header2={this.Header[el-1]} header={this.slideSlogan[el-1]} key={el} />
      ))
  }

    render() {
      return (
        <View style={{flex: 1,  flexDirection: 'row', justifyContent: 'flex-end' }}>
          <View style={{flex: 9, justifyContent: 'flex-end'}}>
           <Header />
            <View style={{flex: 9, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-end'}} >
                {this.getButtons()}
            </View>
           <View style={{flex: 0.5,  backgroundColor: '#1b1814'}} />
         </View>
        <View style={{flex: 1.1,  backgroundColor: '#012c30'}} />
      </View>
      )
    }
  }

export default CoffeeComposition;