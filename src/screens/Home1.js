import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, Dimensions} from 'react-native';

export default class Home1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex: 1, marginRight: 20}}>
                    <Image resizeMode={'stretch'} source={require('../assets/img/home.jpg')} style={styles.img}/>
                </View>
                <View style={styles.title}>
                    <Text style={{fontSize: 20}}>Title</Text>
                </View>
                <View style={styles.details}>
                    <View style={{flexDirection: "row", flex: 1}}>
                        <Image source={require('../assets/img/ic_bed.png')}/>
                        <Text>1 bed</Text>
                    </View>
                    <View style={{flexDirection: "row", flex: 1}}>
                        <Image source={require('../assets/img/ic_shower.png')}/>
                        <Text>1 bed</Text>
                    </View>
                    <View style={{flexDirection: "row", flex: 1}}>
                        <Image source={require('../assets/img/ic_square.png')}/>
                        <Text>1 bed</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column',
        height: 300,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 3,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    title: {
        marginTop: 150,
        marginLeft: 15
    },
    img: {
        flex: 0,
        height: 200,
    },
    details: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 15
    }
})