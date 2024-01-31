import { View, Text, ImageBackground, StyleSheet, Image, StatusBar, Platform, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../components/common/Header'
import Colors from '../../utilities/styles/Colors'
import { Images } from '../../utilities/styles/Images'
import TopBarNavigation from '../../routes/TopBarNavigation'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
            <ImageBackground style={styles.backgroundImage} source={Images.appBackgroundImage}>
                <Header
                    title={'Whosin'}
                    titlePosition={"flex-start"}
                />

                <TopBarNavigation />

                <TouchableOpacity style={styles.scannerIconContainer} onPress={() => navigation.navigate('ScannerScreen')}>
                    <Image
                        style={{ height: 40, width: 40, borderRadius: 25, tintColor: Colors.white.color }}
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
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.white.color,
        backgroundColor: Colors.liteGrey.color,
        overflow: 'hidden',
    },
});

export default HomeScreen