import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import firebase from 'firebase';

// import {Camera} from 'expo';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

const firebaseConfig = {
  apiKey: "AIzaSyB7remzR79LJUBcvJHH0JWfaD1xmzOujOA",
  authDomain: "wafoodwa.firebaseapp.com",
  databaseURL: "https://wafoodwa.firebaseio.com",
  projectId: "wafoodwa",
  storageBucket: "wafoodwa.appspot.com",
  messagingSenderId: "413038818330",
  appId: "1:413038818330:web:0928eba18fa194fbd5cda3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} 

export default class UseCamera extends React.Component{
  // constructor(props){
  //   super(props)
  //   var params = this.props.navigation.state.params
  //   console.log(params)
  //   this.state = {
  //     hasCameraPermission: null,
  //     photoUri: null,
  //     ...params
  //   }
  // }
  camera = null;
  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

async snapPhoto() {       
  console.log('Button Pressed');
  if (this.camera) {
     console.log('Taking photo');
     const options = { quality: 1, base64: true, fixOrientation: true, 
     exif: true};
     await this.camera.takePictureAsync(options).then(photo => {
        this.writePhoto(photo.uri)
        photo.exif.Orientation = 1;           
        this.props.navigation.navigate("ReviewWithPhotoScreen", { photoUri: photo.uri })         
        });     
   }
  }

  writePhoto = (photo) => {
    firebase.database().ref(`restaurants/restaurants/${this.props.index}/restaurant/photos`).push({
      photo: photo
    })
  }

  render() {
    // const { hasCameraPermission } = this.state;
    // if (hasCameraPermission === null) {
    //   return <Text>No access to camera</Text>;
    // } else if (hasCameraPermission === false) {
    //   return <Text>No access to camera</Text>;
    // } else {
    //   return (
    //     <View style={{ flex: 1 }}>
    //       <Text>No access to camera</Text>
    //       <Camera style={{ flex: 1 }} type={this.state.type} 
    //       ref={camera => {this.camera = camera; }}>
            
    //       </Camera>
    //     </View>
    //   );
    // }
    const { hasCameraPermission } = this.state;

        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>Access to camera has been denied.</Text>;
        }

        return (
            <View>
                <Camera
                    style={styles.preview}
                    ref={camera => this.camera = camera}
                >
                  <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
               <TouchableOpacity onPress={this.snapPhoto.bind(this)}>
                <Text style={{ fontSize: 18, marginBottom: 50, color: 'white' ,justifyContent: 'center'}}> Click </Text>
            </TouchableOpacity>
            </View>
                </Camera>
            </View>
        );
  }
}

const styles = StyleSheet.create({
  preview: {
    height: winHeight,
    width: winWidth,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
},
})