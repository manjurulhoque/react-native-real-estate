import React, {Component} from 'react';
import { View, ActivityIndicator, StyleSheet, ScrollView, StatusBar, Button } from 'react-native';
import axios from 'axios';
import Listing from '../components/Listing';

class Home extends Component {

    state = {
        listings: [],
        loading: true
    };

    // this is for createSwitchNavigator
    // static navigationOptions = ({ navigation }) => ({
    //     title: "Home"
    // });

    componentDidMount() {
        axios.get('http://192.168.0.106:8000/api/listings')
            .then(res => {
                this.setState({ listings: res.data }, () => {
                    this.setState({loading: false});
                });
                // console.log(res.data);
            })
            .catch(err => {
                console.log(err);
                alert(err)
            })
    }

    onPress = listing => {
        // alert(listing.title);
        this.props.navigation.navigate("Details", { listing })
    }

    render() {

        const { loading, listings } = this.state;

        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle="light-content" backgroundColor="#0288d1" />
                <View style={[styles.container, styles.horizontal]}>
                    {
                        loading && 
                        (
                            <ActivityIndicator size="large" color="#0000ff" />
                        )
                    }
                </View>
                {/* <Button
                    onPress={() => this.props.navigation.navigate("Details")}
                    title="Go To Details"
                    color='red'
                /> */}
                <ScrollView  style={{marginBottom: 20}}>
                    {
                        !loading && 
                        (
                            listings.map((listing, index) => {{
                                return <Listing onPress={this.onPress} key={index} listing={listing}/>
                            }})
                        )
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    },
    scrollContainer: {
        flex: 0.8,
        backgroundColor: '#fff',
    },
});

export default Home;