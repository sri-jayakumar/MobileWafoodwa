import React from 'react';
import { Button, Text, View , ScrollView} from 'react-native';
import { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyB4GVAJhamnHhci7mC_24aVx_6L2FgkTxM",
    authDomain: "dinind-a58e6.firebaseapp.com",
    databaseURL: "https://dinind-a58e6.firebaseio.com",
    projectId: "dinind-a58e6",
    storageBucket: "dinind-a58e6.appspot.com",
    messagingSenderId: "155428848896",
    appId: "1:155428848896:web:254e39363ca403627edfe5"
};

let db
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);

db = firebase.firestore();
}

export default function App(props) {
  useEffect(() => {
    let allValues = [];
    db.collection('invites').onSnapshot((snapshot) => {
      snapshot.forEach( (val) => {
        let newPush = val.data()
        newPush.id = val.id
        allValues.push(newPush)
        console.log(val.data())
      })
    })
    
    //fetchData();
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
        <Text style={{fontSize:96}}>Restaurant</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        <Text style={{fontSize:96}}>Scroll me plz</Text>
        </ScrollView> 
      </View>
    )
}