import React from 'react';
import { Button, Text, View } from 'react-native';

export default class ReviewWithPhotoScreen extends React.Component{
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
        {/* <Text> image: {JSON.stringify(this.state.photoUri)} </Text> */}
        {/* <Image style={styles.logo} source={{uri: this.state.image}} /> */}
        {/* <Image
            style={{ height: 170, width: 200, alignSelf: "center" }}
            source={{ uri: this.props.navigation.state.params.photoUri }}
            resizeMode="contain"
        /> */}
      </View>
    )
  }
}