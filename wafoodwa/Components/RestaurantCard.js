import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';

export default function RestaurantCard(props) {
    let image = props.image ? props.image : "https://media.otstatic.com/img/default-rest-img-36de8e53babb0388be282879433c3313.png"
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Restaurant', {
                        name: props.name,
                        image: image, 
                        id: props.id,
                        color: props.color,
                        longitude: props.longitude,
                        latitude: props.latitude,
                        rating: props.rating,
                        address: props.location,
                        hours: props.hours,
                        phone: props.phone,
                        avgCost: props.avgCost,
                    })}>
                        <Image
                            style={styles.profileImage} 
                            source={{uri: image}}
                        />
                    </TouchableOpacity>
                    <View style={{flexShrink: 1, justifyContent: 'flex-start'}}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Restaurant', {
                            name: props.name,
                            image: image, 
                            id: props.id,
                            color: props.color,
                            longitude: props.longitude,
                            latitude: props.latitude,
                            rating: props.rating,
                            address: props.location,
                            hours: props.hours,
                            phone: props.phone,
                            avgCost: props.avgCost,
                        })}>
                            <Text style={styles.title}>{props.name}</Text>
                            <Text style={{flexShrink: 1}}>{props.location}</Text>
                            <Rating
                                imageSize={20}
                                startingValue={parseFloat(props.rating)}
                                readonly
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: '95%',
        height: 150,
        shadowColor: 'orange',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        margin: 10,
    },
    profileImage: {
        width: 140,
        height: 140,
        margin: 7,
    },
    topSection: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: 50,
    },
    buttonStyle: {
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        flexShrink: 1,
        fontWeight: "bold",
        fontSize: 20
    }
});
