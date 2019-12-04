import React from 'react';
import { Button, Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import { TextInput } from 'react-native-paper';
import { Card, ListItem } from 'react-native-elements';
import Constants from 'expo-constants';
import { Entypo } from '@expo/vector-icons';

const firebaseConfig = {
  apiKey: "AIzaSyB7remzR79LJUBcvJHH0JWfaD1xmzOujOA",
  authDomain: "wafoodwa.firebaseapp.com",
  databaseURL: "https://wafoodwa.firebaseio.com",
  projectId: "wafoodwa",
  storageBucket: "wafoodwa.appspot.com",
  messagingSenderId: "413038818330",
  appId: "1:413038818330:web:0928eba18fa194fbd5cda3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class ReviewsScreen extends React.Component{
  constructor(props){
    super(props)
    var params = this.props.navigation.state.params
    console.log(params)
    this.state = {
      ...params,
      input: '',
      ready: false,
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

  componentWillMount() {
    firebase.database().ref(`restaurants/restaurants/${this.state.index}/restaurant/reviews`).on('value', (snapshot) => {
      this.setState({reviews: snapshot.val() ? snapshot.val() : {}})
    })
  }
  
  writeReview = () => {
    if(this.state.ready && this.state.input.length > 0){
      firebase.database().ref(`restaurants/restaurants/${this.state.index}/restaurant/reviews`).push({
        review: this.state.input
      })
      this.setState({ready: false, input: ''})
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style = {{flexDirection : "row", justifyContent: "space-around", alignItems: "center"}}>
        <TextInput
         style = {{width: 360}}
          mode='outlined'
          label='Write a review'
          onChangeText={text => this.setState({input: text, ready: true})}
          value={this.state.input}
        />
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera', {index: this.state.index})}>
          <Entypo name="camera" size={32} color="black" />
        </TouchableOpacity>
        </View>
        <Button 
          title="Submit Review"
          onPress={() => this.writeReview()}
        />
  
        <Card title='CUSTOMER REVIEWS' containerStyle={{height: '80%'}} wrapperStyle={{height: '100%'}}>
          {
            <FlatList
              data={Object.values(this.state.reviews)}
              renderItem={({item, index}) => <ListItem key={index} title={item['review']}/>}
              keyExtractor={(item, index) => index.toString()}
            />
          }
        </Card>
        <Button
        style={{alignSelf: 'flex-end'}}
          title="Go back to HomePage"
          onPress={() => this.props.navigation.navigate('HomePage')
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingBottom: Constants.statusBarHeight,
    paddingTop: 10
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 2
  }
})