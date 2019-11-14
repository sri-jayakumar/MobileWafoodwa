import React from 'react';
import { Button, Text, View } from 'react-native';

export default class App extends React.Component {
    render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Button
          title="Restaurant"
          onPress={() => this.props.navigation.navigate('Restaurant')}
        />
      </View>
    )
}}