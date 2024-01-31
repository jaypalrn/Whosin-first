import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking, StatusBar, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import Header from '../../components/common/Header'
import { Images } from '../../utilities/styles/Images'

const ScannerScreen = () => {

    const handleBarcodeScanned = ({ data }) => {
        Alert.alert('Barcode Scanned', data);
        console.log('Barcode Scanned', data);
        Linking.openURL(data).catch(err =>
            console.error('An error occurred', err)
        );
    };

    return (
        <View style={{ flex: 1, }}>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
            <ImageBackground style={styles.backgroundImage} source={Images.appBackgroundImage} resizeMode='cover' >
                <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
                    <Header
                        title={'QR Code'}
                        titlePosition={"flex-start"}
                    />

                    <QRCodeScanner
                        onRead={handleBarcodeScanned}   
                    // flashMode={RNCamera.Constants.FlashMode.torch}
                    />

                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: '100%',
        width: '100%',
    },
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 16
    }
})

export default ScannerScreen