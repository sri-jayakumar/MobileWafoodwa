import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomePageScreen from "./HomePageScreen.js";
import ResturantScreen from "./RestaurantScreen.js"; 
import ReviewScreen from "./ReviewsScreen"; 

export default class App extends React.Component {
  render() {
    return <MyNavigator />;
  }
}

class HomePage extends React.Component {
  static navigationOptions = {
    headerTitle: 'WaFoodWa',
  };
  render() {
    return (
      <HomePageScreen
      navigation={this.props.navigation}
      />
    );
  }
}

class Resturant extends React.Component {
  static navigationOptions = {
    headerTitle: 'Resturant',
  };
  render() {
    return (
      <ResturantScreen
      navigation={this.props.navigation}
      />
    );
  }
}

class Reviews extends React.Component {
  static navigationOptions = {
    headerTitle: 'Reviews',
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
    Resturant: Resturant,
    Reviews: Reviews,
  },
);
