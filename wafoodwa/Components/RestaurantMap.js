import React from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';


export default class RestaurantMap extends React.Component {
  constructor(props){
    super(props)
    this.state = { 
      mapRegion: null,
      hasLocationPermissions: false,
      locationResult: null,
      longAndLat: null,
      longAndLatArray: [],
    };
    // this.handleMapRegionChange = this.handleMapRegionChange.bind(this)
    this.getLocationAsync = this.getLocationAsync.bind(this)
  }

  componentDidMount() {
    this.getLocationAsync();
  }

  handleMapRegionChange (mapRegion) {
    this.setState({ mapRegion });
  }

  async getLocationAsync (){
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
    this.setState({ locationResult: JSON.stringify(location) });
    this.setState({longAndLat: {longitude: location.coords.longitude, latitude: location.coords.latitude}})
    this.setState({longAndLatArray: [{longitude: location.coords.longitude, latitude: location.coords.latitude}, {longitude: this.props.longitude, latitude: this.props.latitude}]})
    // Center the map on the location we just fetched.
    this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}); 
  }

  render() {
    return (
      <View>
      {
        this.state.locationResult === null ?
            <ActivityIndicator size="large" color="#0000ff" /> :
            this.state.hasLocationPermissions === false ?
                <Text>Location permissions are not granted.</Text> :
                this.state.mapRegion === null ? 
                    <Text>Map region doesn't exist.</Text> :
                    <MapView
                    style={styles.mapStyle}
                    region={this.state.mapRegion}
                    onRegionChangeComplete={this.handleMapRegionChange.bind(this)}
                    coordinate={this.state.mapRegion}
                    > 
                    <Marker
                        coordinate={this.state.longAndLat}
                        title={"Current Location"}
                    />
                    <Marker
                        coordinate={{longitude: this.props.longitude, latitude: this.props.latitude}}
                        title={this.props.name}
                    />
                    <Polyline
                        coordinates={this.state.longAndLatArray}
                        strokeWidth={4}
                        strokeColor={"rgba(49, 165, 214, 1)"}
                    /> 
                    </MapView>
      } 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.5,
  },
});