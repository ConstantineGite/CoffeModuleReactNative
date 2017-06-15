import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import Video from "react-native-video"
//import Orientation from 'react-native-orientation'

class VideoPlayerView extends Component {
    static navigationOptions = {
        headerVisible: false
    }

    _back(){
        const {goBack} = this.props.navigation
        goBack()
    }

    render(){
        return (
            <View >
                <Text>asaaaaasdf234523452aaaaaaaaaaasdasdaaaaaaaaaaaaaaaadddaszcxvzxcdasszcvzxcvzxcvzxcvzxcvzxcvzcxvzxcv<Text>
            </View>
        )
    }
}
/*
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
*/

export default VideoPlayerView