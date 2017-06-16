import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback, Alert } from 'react-native';
import { Video } from 'expo';
import { connect } from 'react-redux';
import Ball from './js/Ball';
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
	return (this.props.category == true) ? <Ball/> : <Ball/>
}

controlerCategory(){
	console.log(this.props.category)
	return (this.props.category) ? this.props.categoryControl(false ) :  this.props.categoryControl(true);
	//return (this.props.category)  ?  this.props.categoryControl(false) : this.props.categoryControl(true)
}


  render() {
  	//---console.log(this.changesCategory(), 'this.changesCategory()')
  	//console.log('-----------------------------------------------------');
  	//this.props.categoryControl(false)
 	//console.log(this.controlerCategory())
 	//console.log('-----------------------------------------------------');
    return (
    	<View>
    	 <TouchableNativeFeedback  onPress={this.controlerCategory.bind(this)}>
    	 	<View>
    			<Text>
    				fgsdfgsdgdfgsdfgdfgdfgdfgsdfg
    				fjfhjfhjfjhfhjfhjfjfgjhfgjhfj
    				fjdhjfhjfhjfjhfgjhfgjhjhjgjgj
    				jggggggggggggggggggggggggggjj
    				gjhgggggggggggggggggggggggggf
    			</Text>
    		</View>
    	 </TouchableNativeFeedback>	
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
