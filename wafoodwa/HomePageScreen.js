import React from 'react';
import { Button, Text, View , ScrollView, TouchableOpacity} from 'react-native';
import { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import RestaurantCard from "./RestaurantCard.js"; 
 
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
  
  useEffect(() => {
    let allValues = [];
    db.collection('restaurants').onSnapshot((snapshot) => {
      snapshot.forEach( (val) => {
        let newPush = val.data()
        newPush.id = val.id
        allValues.push(newPush)

        console.log(val.data(), "incoming")
      })
    console.log(allValues, "recieved"); 
    })
  },[]);

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
        <RestaurantCard
          name = "Restaurant Name"
        />
            {/* <TouchableOpacity
              onPress={() => props.navigation.navigate('Restaurant')} >
              <Text
                style={{
                  fontFamily: 'Helvetica',
                  fontSize: 14,
                  color: '#FF3B3B',
                }}>
                Restaurant TouchableOpacity
              </Text>
            </TouchableOpacity> */}

        {/* <Text style={{fontSize:96}}>Restaurant</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text> */}
        
        </ScrollView> 
      </View>
    )
}