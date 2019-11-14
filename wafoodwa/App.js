import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Button
          title="Resturant"
          onPress={() => this.props.navigation.navigate('Resturant')}
        />
      </View>
    );
  }
}

class Resturant extends React.Component {
  static navigationOptions = {
    headerTitle: 'Resturant',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Button
          title=" Resturant Reviews"
          onPress={() =>
            this.props.navigation.navigate('Reviews')
          }
        />
      </View>
    );
  }
}

class Reviews extends React.Component {
  static navigationOptions = {
    headerTitle: 'Reviews',
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Button
          title="Go back to HomePage"
          onPress={() =>
            this.props.navigation.navigate('HomePage')
          }
        />
      </View>
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
