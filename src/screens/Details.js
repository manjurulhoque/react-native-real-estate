import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Linking } from 'react-native';
import { Card } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Details extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Details"
    });

    onCall = () => {
        const { navigation } = this.props;
        const listing = navigation.getParam('listing');
        Linking.openURL('tel:' + listing.realtor.phone);
    }

    onEmail = () => {
        const { navigation } = this.props;
        const listing = navigation.getParam('listing');
        Linking.openURL('mailto:' + listing.realtor.email)
    }

    render() {
        const { navigation } = this.props;
        const listing = navigation.getParam('listing');
        console.log(listing);
        const photo = listing.photo_main ? {uri: listing.photo_main} : require('../assets/img/home.jpg');

        return (
            <View>
                <ScrollView style={{marginBottom: 20}}>
                    <Card
                        image={photo}>
                        <Text style={{marginBottom: 10, fontSize: 20}}>
                            {listing.title}
                        </Text>
                        <Text style={{marginBottom: 10, fontSize: 15}}>
                            Address: {listing.address}, {listing.state} {listing.city}
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

                    <Card>
                        <Text style={{marginBottom: 10, fontSize: 20}}>
                            Property Details
                        </Text>
                        <Text>
                            Realtor Name: {listing.realtor.name}
                        </Text>
                    </Card>
                    
                    <Card>
                        <Text style={{marginBottom: 10, fontSize: 20}}>
                            Property Description
                        </Text>
                        <Text style={{marginBottom: 10, fontSize: 16}}>
                            {listing.description}
                        </Text>
                    </Card>
                </ScrollView>
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#9b59b6' title="Call" onPress={this.onCall}>
                        <Icon name="md-call" color={'#ffffff'}/>
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#3498db' title="Email" onPress={this.onEmail}>
                        <Icon name="md-mail" color={'#ffffff'}/>
                    </ActionButton.Item>
                </ActionButton>
                {/* <View style={styles.buttons}>
                    <Button rounded borderRadius={12} backgroundColor='#b71c1c' title='Call' />
                    <Button rounded borderRadius={12} backgroundColor='#2196f3' title='Email' />
                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15
    },
    img: {
        height: 20,
        width: 20
    },
    buttons: {
        flexDirection: 'row',
    }
})