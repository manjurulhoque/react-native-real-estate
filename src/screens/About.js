import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class About extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 35, color: 'black'}}>Real Estate</Text>
                <View
                    style={{
                        borderBottomColor: '#039be5',
                        borderBottomWidth: 2,
                        width: 170
                    }}/>
                <Text style={{fontSize: 19, color: 'black'}}>Manjurul Hoque</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
    }
})

export default About;
