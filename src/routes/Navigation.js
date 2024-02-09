import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import TopBarNavigation from './TopBarNavigation';
import ScannerScreen from '../screens/common/ScannerScreen';
import SplashScreen from '../screens/common/SplashScreen';
import { navigationRef } from './RootNavigation';
import QrScannerScreen from '../screens/common/QrScannerScreen';
import ActivityDetailScreen from '../screens/common/ActivityDetailScreen';
import DealDetailScreen from '../screens/common/DealDetailScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='SplashScreen'>
                <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={SplashScreen} />
                <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
                <Stack.Screen options={{ headerShown: false }} name="HomeScreen" component={HomeScreen} />
                <Stack.Screen options={{ headerShown: false }} name="AndroidScanner" component={ScannerScreen} />
                <Stack.Screen options={{ headerShown: false }} name="IosScanner" component={QrScannerScreen} />

                <Stack.Screen options={{ headerShown: false }} name="TopBarNavigation" component={TopBarNavigation} />
                <Stack.Screen options={{ headerShown: false }} name="ActivityDetailScreen" component={ActivityDetailScreen} />
                <Stack.Screen options={{ headerShown: false }} name="DealDetailScreen" component={DealDetailScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation