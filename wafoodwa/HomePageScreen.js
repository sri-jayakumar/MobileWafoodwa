import React from 'react';
import { Button, Text, View , ScrollView, TouchableOpacity} from 'react-native';
import Scroll from "./Scroll.js"

export default function App(props) {

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <Button
          title="Restaurant"
          onPress={() => props.navigation.navigate('Restaurant')}
        />
        <Scroll 
        navigation={props.navigation}
        data = {props.data}>
        </Scroll>
        <Text> {props.data} </Text>
      </View>
    )
}