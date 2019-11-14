import React from 'react';
import { Button, Text, View , ScrollView} from 'react-native';

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
        <ScrollView>
        <Text style={{fontSize:96}}>Restaurant</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        </ScrollView> 
      </View>
    )
}