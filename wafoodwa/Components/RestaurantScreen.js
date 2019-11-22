import React from 'react';
import { Button, Text, View, StyleSheet, Image, ScrollView, Dimensions, Linking } from 'react-native';
import { Rating } from 'react-native-elements';

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
    return {
      title: 'Details',
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
    let hoursArr = this.state.hours.split(',')
    let hoursArrText = hoursArr.map((value, index) => <Text key={index}>{"\n"+value}</Text>)
    return (
        <ScrollView style={styles.container} contentContainerStyle={{    alignItems: 'center',
        justifyContent: 'center',}}>
          <Text style={styles.paragraph}>
            {this.state.name}
          </Text>
          <Image style={styles.logo} source={{uri: this.state.image}} />
          <Rating
              type="custom"
              fractions={1}
              showRating
              imageSize={30}
              startingValue={parseFloat(this.state.rating)}
              readonly
              tintColor='#e8e8e8'
              
          />
          <View style={styles.body}>
            <Text style={styles.title}>
              Address: 
              <Text style={styles.address}>
                {" "+this.state.address}
              </Text>
            </Text>
            <Text style={styles.title}>
              Hours: 
              <Text style={styles.address}> 
                {hoursArrText}
              </Text>
            </Text>
            <Text style={styles.title}>
              Phone: 
              <Text style={styles.phone} onPress={() => Linking.openURL(`tel:${this.state.phone}`)}> 
                {" " + this.state.phone}
              </Text>
            </Text>
            <Text style={styles.title}>
              Average Cost for 2: 
              <Text style={styles.address}> 
                {" $ " + this.state.avgCost}
              </Text>
            </Text>
            <Button
              title="Restaurant Reviews"
              onPress={() => this.props.navigation.navigate('Reviews', {
                index: this.state.index,
              })}
            />
          </View>
          <RestaurantMap name={this.state.name} longitude={parseFloat(this.state.longitude)} latitude={parseFloat(this.state.latitude)}/>
        </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  paragraph: {
    margin: 14,
    marginTop: 0,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: "100%",
  },
  body: {
    alignItems: 'flex-start',
    width: "100%"
  },
  address: {
    fontWeight: '200',
    fontSize: 20
  }, 
  phone: {
    fontWeight: '200',
    fontSize: 20,
    color: 'blue'
  }, 
  title: {
    fontWeight: 'bold',
    fontSize: 20
  }
});