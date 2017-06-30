import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Fonts, Styles } from '../stylesheets/coffeeElementST'

class Coffee extends Component {
     constructor(props) {
      super(props);
		this.state = {
			count: 1, 
			slideCnt: 2,
			current: 1
		} 

		this.timer = null; 

    }

	incrementCount(){
		this.timer = setTimeout(this.step.bind(this), 5000);
	}

	step(){
		let count = (this.state.count < this.state.slideCnt) ? ++this.state.count : 1;
		this.setState(() => {
			this.SlideChacker()
			return { 
				count: count,
				current: (this.state.current == 1) ? 2 : 1
			}
		})
	}


	SlideChacker(){
		let PngGif = [this.props.ListSlidePng , this.props.ListSlideGif];
		//let firstColum;
		//let seckondColum;
		//if(this.props.ListSlidePng <= 4){
		//	firstColum = this.props.ListSlidePng
		//	//console.log(firstColum, 'firstColum');
		//}else{
		//	seckondColum = this.props.ListSlidePng;
			//console.log(seckondColum, 'seckondColum');
		//}
		//console.log(this.props.ListSlidePng, 'this.props.ListSlidePng');
		//console.log(this.state.current-1, 'carent');
		//if(this.state.current-1 === 0){

		//}else{

		//}
		return PngGif[this.state.current-1];
	}


	BuildModule(){
		 return(
		       <View>
		           <Image style={Styles.IMAGE} source={this.SlideChacker()} />
		           <Text style={Styles.HEADER1}>{this.props.header}</Text>
		           <Text style={Styles.HEADER2}>{this.props.header2}</Text>
		       </View>    
		 )
	}

	Choice_Element(){
	     this.props.ParamPage(+this.props.ListSlidePng -1)
	     this.props.ProductPage('product'); 
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

   componentWillUnmount(){
    clearInterval(this.timer)
   }

   componentDidMount(){
  	this.incrementCount();
   }

  componentDidUpdate(){
  	this.incrementCount();
   }

}


export default Coffee;

