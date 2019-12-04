import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomePageScreen from "./Components/HomePageScreen";
import RestaurantScreen from "./Components/RestaurantScreen";
import ReviewScreen from "./Components/ReviewsScreen";
import CameraPage from "./Components/CameraPage";
import {Text } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB7remzR79LJUBcvJHH0JWfaD1xmzOujOA",
  authDomain: "wafoodwa.firebaseapp.com",
  databaseURL: "https://wafoodwa.firebaseio.com",
  projectId: "wafoodwa",
  storageBucket: "wafoodwa.appspot.com",
  messagingSenderId: "413038818330",
  appId: "1:413038818330:web:0928eba18fa194fbd5cda3"
};

let db
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
}

export default class App extends React.Component {
  render(){
    return <MyNavigator />;
  }
}

class HomePage extends React.Component {
  static navigationOptions = {
    title: 'WaFoodWa',
    headerStyle: {
      backgroundColor: '#de5a0d',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props){
    super(props)
    this.state = {
      allValues: [],
      ready: false
    }
  }

  componentDidMount(){
    firebase.database().ref('restaurants/restaurants/').on('value', (snapshot) => {
      this.setState({allValues: snapshot.val(), ready: true})
    })
  }

  render() {
     return this.state.ready ? 
        <HomePageScreen
          navigation={this.props.navigation}
          allValues = {this.state.allValues}
        /> 
      : 
        <Text>Loading...</Text>
    }
}

const MyNavigator = createStackNavigator(
  {
    HomePage: HomePage,
    Restaurant: RestaurantScreen,
    Reviews: ReviewScreen,
    Camera: CameraPage, 
  },
);

const styles = {
  header: {
    headerStyle: {
      backgroundColor: '#de5a0d',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};
