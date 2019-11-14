import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomePageScreen from "./HomePageScreen.js";
import RestaurantScreen from "./RestaurantScreen.js"; 
import ReviewScreen from "./ReviewsScreen"; 

export default class App extends React.Component {
  render() {
    return <MyNavigator />;
  }
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
  header:{
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};
