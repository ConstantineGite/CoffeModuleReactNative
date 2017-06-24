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
		//console.log('start');
		let count = (this.state.count < this.state.slideCnt) ? ++this.state.count : 1;
		this.setState(() => {
			//console.log(this.state.current, 'start');
			this.SlideChacker()
			return { 
				count: count,
				current: (this.state.current == 1) ? 2 : 1
			}
		})
	}

	//isCurrent(current){
		//console.log(this.state.current, 'cur');
		//let cur = (this.state.current == current);
		//return {
		//	current: cur ? 'slideOut' : 'slideIn',
		//	count: cur ? (this.state.count == 1) ? this.state.slideCnt : this.state.count - 1 : this.state.count
		//}
		//return console.log(this.step, 'step');
	//}

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
		return PngGif[this.state.current-1];
	}


BuildModule(){
	 //console.log(this.SlideChacker() , 'sdfsdfsdfds');
	 return(
	       <View>
	           <Image style={Styles.IMAGE} source={this.SlideChacker()} />
	           <Text style={Styles.HEADER1}>{this.props.header}</Text>
	           <Text style={Styles.HEADER2}>{this.props.header2}</Text>
	      </View>    
	 )
}

Choice_Element(){
	console.log(this.SlideChacker(), 'element');

     this.props.ParamPage(+this.SlideChacker()-1)
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

