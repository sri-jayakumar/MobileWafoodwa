import React from 'react';
import { createStackNavigator } from 'react-navigation';
import HomePageScreen from "./HomePageScreen.js";
import RestaurantScreen from "./RestaurantScreen.js";
import ReviewScreen from "./ReviewsScreen";
import { useState, useEffect } from 'react';
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

export default function App(props) {
  const [restaurants, setRestaurants] = useState([]);
  var allValues;

  useEffect(() => {
    allValues = [];
    db.collection('restaurants').onSnapshot((snapshot) => {
      snapshot.forEach((val) => {
        let newPush = val.data()
        newPush.id = val.id
        allValues.push(newPush)

        console.log(val.get("Name"), "name")
        console.log(newPush.id, "id")
      })
      console.log(allValues, "recieved");
    })
  }, []);

  // // Render Every Restaurant
  // function getRestaurant(restaurants) {
  //   return restaurants.forEach(res => {
  //     // console.log(res.name, "name")
  //     return res.getElementById("Name")
  //   })
  // }

  return <MyNavigator data = {allValues}/>;
}

class HomePage extends React.Component {
  static navigationOptions = {
    title: 'WaFoodWa',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <HomePageScreen
        navigation={this.props.navigation}
        data={this.props.data}
      />
    );
  }
}

class Restaurant extends React.Component {
  static navigationOptions = {
    title: 'Restaurant',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <RestaurantScreen
        navigation={this.props.navigation}
      />
    );
  }
}

class Reviews extends React.Component {
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
  render() {
    return (
      <ReviewScreen
        navigation={this.props.navigation}
      />
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    HomePage: HomePage,
    Restaurant: Restaurant,
    Reviews: Reviews,
  },
);

const styles = {
  header: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};
