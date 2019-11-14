import React from 'react';
import { Button, Text, View } from 'react-native';

export default function App(props){
    return (
        <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Button
          title="Go back to HomePage"
          onPress={() =>
            props.navigation.navigate('HomePage')
          }
        />
      </View>
    )
}