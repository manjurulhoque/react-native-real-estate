import React, {Component} from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import Home from './src/screens/Home';
import About from './src/screens/About';
import Details from './src/screens/Details';
import StackNavigator from './src/StackNavigator';


export default createAppContainer(createMaterialBottomTabNavigator({
    Home: {
        screen: StackNavigator,
        navigationOptions: {
            tabBarLabel: 'Home',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon size={20} name={ Platform.OS === 'ios' ? (focused ? 'ios-home' : 'ios-home-outline') : 'md-home' } style={{ color: tintColor }} />
            )
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            title: 'About',
            tabBarLabel: 'About',
            tabBarIcon: ({ tintColor, focused }) => (
                <Icon size={20} name={ Platform.OS === 'ios' ? (focused ? 'ios-contact' : 'ios-contact-outline') : 'md-contact' } style={{ color: tintColor }} />
            )
        }
    },
}, {
    shifting: true,
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#00bcd4' },
}));
