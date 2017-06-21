import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import { Video } from 'expo';
import { connect } from 'react-redux';
import CoffeeComposition from './js/coffeeComposition';


class Track extends Component {

changesCategory(){
    let video = <View><Video
          source={require('././img/1.webm')}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          repeat
          style={{ width:360, height: 700 }}
        />
	</View>
	return (this.props.category == true)  ?  <CoffeeComposition /> : video
}

controlerCategory(){
  console.log(this.props.category, 'thisPropsCategory');
	return (this.props.category) ? this.props.categoryControl(false )  :  this.props.categoryControl(true);
}

render() {
	 return (
      	 <TouchableWithoutFeedback  onPress={this.controlerCategory.bind(this)}>
              {this.changesCategory()}
      	 </TouchableWithoutFeedback>	
	    );
	}
}

export default connect(
  state => ({
    list : state.lists,
    category : state.category,
  }),
  dispatch => ({
  	 onaddComent: (comName) => {
      //--dispatch({ type: 'VIEW_LISTS', payload: comName });
    },
    categoryControl : (val) => {
      dispatch({ type: 'CHANGE_CATEGORY', payload: val });
    }
  })
)(Track);
