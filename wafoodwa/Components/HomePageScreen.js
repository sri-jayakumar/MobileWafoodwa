import React from 'react';
import { Button, Text, View , ScrollView, TouchableOpacity, FlatList} from 'react-native';
import RestaurantCard from './RestaurantCard';

export default function HomePageScreen(props) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <FlatList
          data={props.allValues}
          renderItem={({item, index})=><RestaurantCard 
                                    key={item['restaurant'].id} 
                                    id={item['restaurant'].id} 
                                    name={item['restaurant'].name} 
                                    location={item['restaurant'].location.address} 
                                    rating={item['restaurant']['user_rating']['aggregate_rating']}
                                    color={'#' + item['restaurant']['user_rating']['rating_color']}
                                    navigation={props.navigation}
                                    longitude={item['restaurant'].location.longitude}
                                    latitude={item['restaurant'].location.latitude}
                                    image={item['restaurant']['featured_image']}
                                    hours={item['restaurant']['timings']}
                                    phone={item['restaurant']['phone_numbers']}
                                    avgCost={item['restaurant']['average_cost_for_two']}
                                    index={index}/>
                      }
          keyExtractor={item => item['restaurant'].id}
        />
      </View>
    )
}