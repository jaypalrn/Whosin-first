import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking, StatusBar, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import Header from '../../components/common/Header'
import { Images } from '../../utilities/styles/Images'
import { windowHeight, windowWidth } from '../../utilities/styles/Index'
import { CloseIcon, FlashOffIcon, FlashOnIcon } from '../../utilities/styles/Icons'
import Colors from '../../utilities/styles/Colors'
import BoldText from '../../components/common/BoldText'
import ImageCropPicker from 'react-native-image-crop-picker'

const ScannerScreen = ({ navigation }) => {

    const [flashOn, setFlashOn] = useState(false);
    const [imageUri, setImageUri] = useState('');


    const handleBarcodeScanned = ({ data }) => {
        Alert.alert('Barcode Scanned', data);
        console.log('Barcode Scanned', data);
        Linking.openURL(data).catch(err =>
            console.error('An error occurred', err)
        );
    };

    const toggleFlash = () => {
        setFlashOn(prevState => !prevState);
    };

    function uplodeImage() {
        ImageCropPicker.openPicker({
            width: 400,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image?.path)
            setImageUri(image?.path);
            // requestUpdateAvatar(image)
        });
    }

    return (
        <View style={{ flex: 1, }}>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
            <ImageBackground style={styles.backgroundImage} source={Images.appBackgroundImage} resizeMode='cover' >
                <View style={{ flex: 1, paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>

                    <QRCodeScanner
                        onRead={handleBarcodeScanned}
                        showMarker={true}
                        cameraStyle={{ height: windowHeight, width: windowWidth, zIndex: 1, opacity: 1, }}
                        markerStyle={{ borderColor: 'green', borderWidth: 2.5, borderRadius: 10, opacity: 0.8, }}
                        containerStyle={{ borderColor: 'green', }}
                        flashMode={flashOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off}

                        topContent={
                            <View style={{ backgroundColor: 'transparent', zIndex: 2, width: windowWidth, height: 60, justifyContent: 'space-between', alignItems: "flex-start", position: 'absolute', top: 10, flexDirection: 'row', paddingHorizontal: 15 }}>
                                <TouchableOpacity style={{ padding: 5, borderRadius: 50, backgroundColor: Colors.grey.color, }} onPress={() => navigation.goBack()}>
                                    <CloseIcon />
                                </TouchableOpacity>

                                <TouchableOpacity style={{ padding: 5, borderRadius: 50, backgroundColor: Colors.grey.color, }} onPress={toggleFlash}>
                                    {flashOn ? <FlashOnIcon /> : <FlashOffIcon />}
                                </TouchableOpacity>
                            </View>
                        }

                        bottomContent={
                            <View style={{ backgroundColor: 'transparent', zIndex: 2, width: windowWidth, height: 60, justifyContent: 'center', alignItems: "center", position: 'absolute', bottom: 30 }}>
                                <TouchableOpacity onPress={uplodeImage}>
                                    <BoldText txt={'Upload From Gallary'} txtColor={Colors.darkGrey.color} />
                                </TouchableOpacity>
                            </View>
                        }
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
        color: 'red'

    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonTouchable: {
        padding: 16
    },

})

export default ScannerScreen