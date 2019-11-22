import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

//   async snap () {
//     if (this.camera) {
//       let photo = await this.camera.takePictureAsync();
//     }
//   };

//   async takePicture () {
//     if (this.camera) {
//         this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
//     }
//  };

//    onPictureSaved = photo => {
//     console.log(photo);
// } 

async snapPhoto() {       
  console.log('Button Pressed');
  if (this.camera) {
     console.log('Taking photo');
     const options = { quality: 1, base64: true, fixOrientation: true, 
     exif: true};
     await this.camera.takePictureAsync(options).then(photo => {
        photo.exif.Orientation = 1;            
         console.log(photo);            
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
              {/* <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}>
  
                <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
              </TouchableOpacity> */}
            </View>
          </Camera>
        </View>
      );
    }
  }
}