import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Fonts, Styles } from '../stylesheets/coffeeElementST'

class Coffee extends Component {
     constructor(props) {
      super(props);
    }

BuildModule(){
     return(
           <View>
               <Image style={Styles.IMAGE} source={this.props.ListSlide} />
               <Text style={Styles.HEADER1}>{this.props.header}</Text>
               <Text style={Styles.HEADER2}>{this.props.header2}</Text>
          </View>    
     )
}

Choice_Element(){
     this.props.ParamPage(+this.props.ListSlide)
     this.props.ProductPage('product'); 
}

PageParam(){
     //console.log('start');
     //return this.props.ParamPage(+this.props.ListSlide);
}

render() {
     	return (  
               <View style={Styles.MAINE_CONTAINER}>
                     <TouchableWithoutFeedback  onPress={this.Choice_Element.bind(this)} >
                         {this.BuildModule()}
                     </TouchableWithoutFeedback>    
               </View>
     	);
     }
}

export default Coffee;

