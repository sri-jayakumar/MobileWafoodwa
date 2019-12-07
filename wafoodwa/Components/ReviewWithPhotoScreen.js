import React from 'react';
import { Button, Text, View, Image, FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB7remzR79LJUBcvJHH0JWfaD1xmzOujOA",
    authDomain: "wafoodwa.firebaseapp.com",
    databaseURL: "https://wafoodwa.firebaseio.com",
    projectId: "wafoodwa",
    storageBucket: "wafoodwa.appspot.com",
    messagingSenderId: "413038818330",
    appId: "1:413038818330:web:0928eba18fa194fbd5cda3"
  };

export default class ReviewWithPhotoScreen extends React.Component{
    constructor(props){
      super(props)
      var params = this.props.navigation.state.params
      // console.log(params)
      this.state = {
        ...params
      }
    }
  
  static navigationOptions = {
    title: 'Photos',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentWillMount() {
    console.log(this.state.index)
    firebase.database().ref(`restaurants/restaurants/${this.state.index}/restaurant/photos`).on('value', (snapshot) => {
      this.setState({photos: snapshot.val() ? snapshot.val() : {}})
    })
  }
  render(){
    return (
        <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}>
        <Carousel
              data={Object.values(this.state.photos)}
              renderItem={({item, index}) => <Image
                                                key={index}
                                                style={{ height: 500, width: 500}}
                                                source={{ uri: 'data:image/png;base64,'+item['photo'] }}
                                                resizeMode="contain"
                                              />
              }
              keyExtractor={(item, index) => index.toString()}
              sliderHeight={500}
              sliderWidth={500}
              itemWidth={500}
        />
      </View>
    )
  }
}