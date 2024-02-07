import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FirstTopScreen from '../screens/TopBarHome/FirstTopScreen';
import SecondTopScreen from '../screens/TopBarHome/SecondTopScreen';
import Colors from '../utilities/styles/Colors';

const Tab = createMaterialTopTabNavigator();

const TopBarNavigation = () => {
    return (
        <Tab.Navigator
            initialRouteName="Deals"
            screenOptions={{
                tabBarActiveTintColor: Colors.white.color,
                tabBarInactiveTintColor: Colors.grey.color,
                tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold' },
                tabBarStyle: { backgroundColor: 'transparent' },
                tabBarIndicatorStyle: { backgroundColor: Colors.white.color, height: 2 },
            }}
        >
            <Tab.Screen options={{ tabBarLabel: 'Deals', }} name="DealsScreen" component={FirstTopScreen} />
            <Tab.Screen options={{ tabBarLabel: 'Activity' }} name="ActivityScreen" component={SecondTopScreen} />
        </Tab.Navigator>
    )
}

export default TopBarNavigation