import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { connect } from 'react-redux';

class Track extends Component {
  render() {
  	    console.log(this.props.testStore, '-----------------------------------------');
    return (
    	<View>
    	{this.props.testStore.map((track, index) =>
		<Text key={index}>{track}</Text>
		)}
		</View>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({})
)(Track);