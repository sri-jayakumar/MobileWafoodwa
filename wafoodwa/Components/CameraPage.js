import React from 'react';
import {Text, View} from 'react-native';
import UseCamera from './UseCamera';

export default class App extends React.Component{
//   constructor(props){
//     super(props)
//     var params = this.props.navigation.state.params
//     console.log(params)
//     this.state = {
//       ...params
//     }
//   }
  render(){
    return (
        <View>
            <Text>Reached</Text>
            <UseCamera> </UseCamera>
        </View>
    )
  }
}
