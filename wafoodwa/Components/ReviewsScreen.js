import React from 'react';
import { Button, Text, View } from 'react-native';
import CameraPage from './CameraPage.js';

export default class ReviewsScreen extends React.Component{
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
        <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Button
          title="Go back to HomePage"
          onPress={() => this.props.navigation.navigate('HomePage')
          }
        />
        <CameraPage />
      </View>
    )
  }
}