import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import RestaurantCard from './RestaurantCard';
import { Dimensions } from 'react-native';

export default function Scroll(props) {
  let deviceWidth = Dimensions.get('window').width;

  function renderItem({ item, index }) {
    return (
      <RestaurantCard
        id={item.id}
        pic={item.pic}
        name={item.name}
        navigation={props.navigation}
      />
    );
  }
return (
    <View style={styles.container}>
      <ScrollView 
        renderItem={renderItem}
        navigation={props.navigation}
        // data={props.data}
      > 
      {/* <Text style={{ fontSize: 90 }}>{props.data} </Text> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 170,
    paddingTop: 15,
  },
});
