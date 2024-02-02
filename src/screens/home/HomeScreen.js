import { View, Text, ImageBackground, StyleSheet, Image, StatusBar, Platform, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/common/Header'
import Colors from '../../utilities/styles/Colors'
import { Images } from '../../utilities/styles/Images'
import TopBarNavigation from '../../routes/TopBarNavigation'
import { LogoutIcon } from '../../utilities/styles/Icons'
import Loader from '../../components/common/Loader'
import { useDispatch } from 'react-redux'
import { setIsLogin, setUserData } from '../../utilities/redux/reducers'

const HomeScreen = ({ navigation }) => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const logOutConformation = () => {
        Alert.alert(
            'Confirmation',
            'Are you sure you want to proceed?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => console.log('Cancel Pressed'),
                },
                {
                    text: 'OK',
                    onPress: () => requestLogOut(),
                },
            ],
            { cancelable: false }
        );
    };

    async function requestLogOut() {
        setLoading(true)
        dispatch(setUserData(''))
        dispatch(setIsLogin(false))
        navigation.navigate('SplashScreen')
        setLoading(false)
    }

    return (
        <View style={styles.container}>
            <Loader animating={loading} />
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
            <ImageBackground style={styles.backgroundImage} source={Images.appBackgroundImage}>
                <Header
                    title={'Whosin'}
                    titlePosition={"flex-start"}
                    rightIcon={<LogoutIcon />}
                    rightIconOnPress={logOutConformation}
                />

                <TopBarNavigation />

                <TouchableOpacity style={styles.scannerIconContainer} onPress={() => navigation.navigate('ScannerScreen')}>
                    <Image
                        style={{ height: 40, width: 40, borderRadius: 25, tintColor: Colors.black.color,}}
                        source={Images.qrCode}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white.color,
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    scannerIconContainer: {
        height: 65,
        width: 65,
        borderRadius: 50,
        position: 'absolute',
        bottom: 30,
        left: '50%',
        marginLeft: -30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.black.color,
        backgroundColor: Colors.grey.color,
        overflow: 'hidden',
    },
});

export default HomeScreen