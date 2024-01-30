import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import TopBarNavigation from './TopBarNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen'>
                <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />

                <Stack.Screen options={{ headerShown: false }} name="TopBarNavigation" component={TopBarNavigation} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation