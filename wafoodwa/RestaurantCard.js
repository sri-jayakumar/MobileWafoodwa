import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function RestaurantCard(props) {

    return (
        <View>
            <Text style={{ fontSize: 90 }}>{props.name} </Text>
            {/* renderItem={renderItem(props)} */}
            {/* <View style={styles.topSection}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Details', {
            name: props.name,
            date: formatDate(props.date),
            declineInvitationCallBack: props.declineInvitationCallBack,
            id: props.id,
            acceptInvitationCallBack: props.acceptInvitationCallBack
          })}>
          <Image
            style={styles.profileImage}
            source={{ uri: imageBase + props.pic }}
          />
        </TouchableOpacity>
          <View style={styles.textSection}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Details', {
            name: props.name,
            date: formatDate(props.date),
            picture: imageBase + props.pic,
            declineInvitationCallBack: props.declineInvitationCallBack,
            id: props.id,
            acceptInvitationCallBack: props.acceptInvitationCallBack
          })}>
              <Text>{props.name}</Text>
              <Text>{formatDate(props.date)}</Text>
            </TouchableOpacity>
          </View>
      </View> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        width: 315,
        height: 133,
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
        width: 50,
        height: 50,
        margin: 10,
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
