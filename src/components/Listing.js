import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-elements';

const Listing = ({ onPress, listing}) => {

    const photo = listing.photo_main ? {uri: listing.photo_main} : require('../assets/img/home.jpg');

    return (
        <TouchableOpacity onPress={() => onPress(listing)}>
            <Card
                image={photo}>
                <Text style={{marginBottom: 10, fontSize: 20}}>
                    {listing.title}
                </Text>
                <View style={styles.details}>
                    <View style={{flexDirection: "row", flex: 1}}>
                        <Image style={styles.img} source={require('../assets/img/ic_bed.png')}/>
                        <Text> {listing.bedrooms} beds</Text>
                    </View>
                    <View style={{flexDirection: "row", flex: 1}}>
                        <Image style={styles.img} source={require('../assets/img/ic_shower.png')}/>
                        <Text> {parseInt(listing.bathrooms)} baths</Text>
                    </View>
                    <View style={{flexDirection: "row", flex: 1}}>
                        <Image style={styles.img} source={require('../assets/img/ic_square.png')}/>
                        <Text> {listing.sqft} sqft</Text>
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15
    },
    img: {
        height: 20,
        width: 20
    }
})

export default Listing;
