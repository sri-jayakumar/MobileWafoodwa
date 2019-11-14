import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function RestaurantCard(props) {
    let picurl = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/extreme_eats_worst_meals_in_restaurant_slideshow/650x350_extreme_eats_worst_meals_in_restaurant_slideshow.jpg"; 
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.topSection}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Restaurant', {
                        name: props.name,
                        picture: picurl, 
                        id: props.id,
                    })}>
                        <Image
                            style={styles.profileImage}
                            source={{ uri: picurl}}
                        />
                    </TouchableOpacity>
                    <View style={styles.textSection}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Restaurant', {
                            name: props.name,
                            picture: picurl, 
                            id: props.id,
                        })}>
                            <Text>Restuarant Name</Text>
                            <Text>Restuarant Location</Text>
                            <Text>Restuarant Rating</Text>
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
        width: '100%',
        height: 150,
        shadowColor: 'grey',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
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
});
