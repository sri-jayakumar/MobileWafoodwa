import React from 'react';
import { Button, Text, View , ScrollView, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import RestaurantCard from "./RestaurantCard.js"; 
import Scroll from "./Scroll.js";
 
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
  let allValues = [];

  useEffect(() => {
    db.collection('restaurants').onSnapshot((snapshot) => {
      snapshot.forEach( (val) => {
        let newPush = val.data()
        newPush.id = val.id
        allValues.push(newPush)

        console.log(val.get("Name"), "name")
        console.log(newPush.id, "id")
      })
    console.log(allValues, "recieved"); 
    })
  },[]);

  // Render Every Restaurant
  function getRestaurant(restaurants){
    return restaurants.forEach(res => {
        // console.log(res.name, "name")
         return res.getElementById("Name")
      })
}

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
          <Text style={{ fontSize: 90 }}> Restaurant </Text>
          <Text style={{ fontSize: 90 }}> Restaurant </Text>
          <Text style={{ fontSize: 90 }}> Restaurant </Text>
          <Text style={{ fontSize: 90 }}> Restaurant </Text>
          <Text style={{ fontSize: 90 }}> Restaurant </Text>
          <Text style={{ fontSize: 90 }}> Restaurant </Text>
          <Text style={{ fontSize: 90 }}> Restaurant </Text>

        </ScrollView>
        {/* <Scroll
          navigation={props.navigation}
          restaurants = {allValues}
        /> 
        <Text> {allValues} </Text> */}
      </View>
    )
}