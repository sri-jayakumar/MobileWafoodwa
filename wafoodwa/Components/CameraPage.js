import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';


export default class CameraExample extends React.Component{
  constructor(props){
    super(props)
    var params = this.props.navigation.state.params
    console.log(params)
    this.state = {
      hasCameraPermission: null,
      photoUri: null,
      ...params
    }
  }
  
  // state = {
  //   hasCameraPermission: null,
  // }

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
        photo.exif.Orientation = 1;           
        this.props.navigation.navigate("ReviewWithPhotoScreen", { photoUri: photo.uri })         
        });     
   }
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type} 
          ref={ref => {this.camera = ref; }}>
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
}