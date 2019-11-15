import React from 'react';
import { Button, Text, View, StyleSheet, Image } from 'react-native';
import RestaurantMap from './RestaurantMap';

export default class App extends React.Component{
  constructor(props){
    super(props)
    var params = this.props.navigation.state.params
    console.log(params)
    this.state = {
      ...params
    }
  }
  static navigationOptions = ({navigation}) => {
    let name = navigation.getParam('name')
    return {
      title: name,
      headerStyle: {
        backgroundColor: '#de5a0d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    } 
  };
  render(){
    console.log(this.state.longitude)
    return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            {this.state.name}
          </Text>
          <Image style={styles.logo} source={{uri: "https://cdn.bestday.net/_lib/vimages/San-Miguel-de-Allende/Hotels/Hotel-Aqui-es-Mexico/Fachada_g.jpg"}} />
          <Button
            title=" Restaurant Reviews"
            onPress={() => this.props.navigation.navigate('Reviews')
            }
          />
          <RestaurantMap name={this.state.name} longitude={parseFloat(this.state.longitude)} latitude={parseFloat(this.state.latitude)}/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: "100%",
  }
});