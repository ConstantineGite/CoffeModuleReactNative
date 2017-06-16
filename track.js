import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import { Video } from 'expo';
import { connect } from 'react-redux';
import Ball from './js/Ball';
//console.log(typeof Ball, 'Ball');
/*
	<View>
	{this.props.testStore.map((track, index) =>
	<Text key={index}>{track}</Text>
	)}
	</View>
*/
//---console.log('start')


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
	return (this.props.category == true) ? <Ball/> : video
}

controlerCategory(){
	console.log(this.props.category)
	return (this.props.category) ? this.props.categoryControl(false )  :  this.props.categoryControl(true);
}


render() {
    return (
    	<View>
    	 <TouchableWithoutFeedback  onPress={this.controlerCategory.bind(this)}>
			 <View style={{width: 450, height: 800,  backgroundColor: '#c7b39b' }}>
		 		{this.changesCategory()}
			 </View>		
    	 </TouchableWithoutFeedback>	
		</View>
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
