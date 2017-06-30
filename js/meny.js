import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
//import { Fonts } from '../stylesheets/coffeeElementST'
//import { Styles } from '../stylesheets/productST'
/*
  class Meny extends Component {
       constructor(props) {
        super(props);
        this.Menu_Item = [
          'home', 'coffee', 'tea', 'hot-chocolate', 'BACK'
        ]
      }

  BuildModule(){
     return (
   
            <View><Text>val</Text><View>
        
    )
  }

  render() {
       	return ( 
  	     	<View style={{ flex: 1}}>
  		            {this.BuildModule()}
  		     </View>
       	)
       }
  }

  export default Meny;
  **/
  // Exported from snack.expo.io

  class Meny extends Component {
      constructor(props) {
        super(props);
        this.Menu_Item = [
          'home', 'coffee', 'tea', 'hot-chocolate', 'BACK'
        ]
      }

    BuildModule(){
      return (
        <View> 
            this.Menu_Item.map(el =>
              <Text> {el} </Text>
            );
        </View>
        )  
    }


    render() {
      return (
        <View style={{flex: 1,  backgroundColor: '#1b1814', justifyContent: 'flex-end'}}>
           <App />
        </View >
      );
    }
  }

