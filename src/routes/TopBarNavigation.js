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
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: Colors.white.color,
                tabBarLabelStyle: { fontSize: 13 },
                tabBarStyle: { backgroundColor: 'transparent' },
                tabBarIndicatorStyle: { backgroundColor: Colors.white.color, height: 2  }
            }}
        >
            <Tab.Screen name="FirstTopScreen" component={FirstTopScreen} />
            <Tab.Screen name="SecondTopScreen" component={SecondTopScreen} />
        </Tab.Navigator>
    )
}

export default TopBarNavigation