import React from 'react';
import { Button, Text, View, Image, FlatList } from 'react-native';
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
    title: 'Camera',
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
          justifyContent: 'center',
        }}>
        <FlatList
              data={Object.values(this.state.photos)}
              renderItem={({item, index}) => <Image
                                                key={index}
                                                style={{ height: 170, width: 200, alignSelf: "center" }}
                                                source={{ uri: 'data:image/png;base64,'+item['photo'] }}
                                                resizeMode="contain"
                                              />
              }
              keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}