import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native';
import { connect } from 'react-redux';
import CoffeeComposition from './js/coffeeComposition';
import Product from './js/productCart';
import  Header from './js/header';
import  Meny from './js/meny';

class Track extends Component {
     constructor(props) {
      super(props);
      //--this.unsubscribe = this.props.store.subscribe(() => {
      //--  this.returnePage(this.props.page, this.props.pageParam)
      //--})
    }


returnePage(){
  console.log(this.props.page, 'this.props.page');
    switch(this.props.page) {
      case 'coffee':
          return <CoffeeComposition ParamPage={this.props.changePageParam} 
          ProductPage={this.props.categoryControl} />
      case 'product': 
          return  <Product  prodName={this.props.pageParam-1} />
      default:
          return <CoffeeComposition ParamPage={this.props.changePageParam} 
          ProductPage={this.props.categoryControl} />
  }
}


render() {
  console.log('start');
	 return (
       <View style={{flex: 1}}>
         <View style={{flex: 1,  flexDirection: 'row', justifyContent: 'flex-end' }}>
          <View style={{flex: 9, justifyContent: 'flex-end'}}>
            <Header Home={this.props.categoryControl} /> 
            {this.returnePage()}
          </View>
        <View style={{flex: 1.3,  backgroundColor: '#f3f3f3'}} />
      </View>
    </View>
	    );
	}
}

export default connect(
  state => ({
    list : state.lists,
    category : state.category,
    page: state.page,
    pageParam: state.pageParam
  }),
  dispatch => ({
  	 onaddComent: (comName) => {
      //--dispatch({ type: 'VIEW_LISTS', payload: comName });
    },
    categoryControl : (val) => {
      dispatch({ type: 'CHANGE_PAGE', payload: val });
    },
    changePageParam : (val) => {
      dispatch({ type: 'CHANGE_PAGE_PARAM', payload: val });
    }
  })
)(Track);
