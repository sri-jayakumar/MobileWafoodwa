import React from 'react';
import {Text, View} from 'react-native';
import UseCamera from './UseCamera';

export default class App extends React.Component{
  constructor(props){
    super(props)
    var params = this.props.navigation.state.params
    console.log(params)
    this.state = {
      ...params
    }
  }
  static navigationOptions = {
    title: 'Reviews',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render(){
    return (
        <View>
            <UseCamera navigation={this.props.navigation} index={this.state.index}/>
        </View>
    )
  }
}
