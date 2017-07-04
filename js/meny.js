import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { Styles } from '../stylesheets/menyST'

  class Meny extends Component {
      constructor(props) {
        super(props);
        this.Menu_Item = [
          'HOME', 'coffee', 'tea', 'hot-chocolate', 'BACK'
        ]
      }

    BuildModule(){
     let item = this.Menu_Item.map((el) => {
       this.addStyle(el)
          return (
            <TouchableWithoutFeedback key={el}  onPress={this.menuSwitcher.bind(this)} >
              <View key={el}>
                <Text key={el}>{el}</Text>
              </View>
            </TouchableWithoutFeedback>  
            )
     })
     return item
    }

    addStyle(el){
      return (el == 'HOME' || el == 'BACK') ? console.log('HOME') : console.log(el, 'else');
    }

    menuSwitcher(){
     console.log('el');
    }

    render() {
      return (
        <View style={{flex: 1.3,  backgroundColor: '#f3f3f3'}}>
            {this.BuildModule()}
        </View >
      );
    }
  }

export default Meny;