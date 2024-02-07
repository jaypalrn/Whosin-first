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
import RNQRGenerator from 'rn-qr-generator'
import { RequestScanReedem } from '../../utilities/api/apiController'
import Loader from '../../components/common/Loader'

const ScannerScreen = ({ navigation }) => {

    const [flashOn, setFlashOn] = useState(false);
    const [imageUri, setImageUri] = useState('');
    const [scanReedemData, setScanReedemData] = useState([]);
    const [loading, setLoading] = useState(false);

    // const handleBarcodeScanned = ({ data }) => {
    //     Alert.alert('Barcode Scanned', data);
    //     console.log('Barcode Scanned', data);
    //     requestScanReedem(data);
    // };

    const handleBarcodeScanned = ({ data }) => {
        try {
            // Remove the "data:" prefix from the string
            const jsonData = data.replace('data:', '');
            console.log('Raw barcode data:', jsonData);
            
            // Parse the JSON string into an object
            const barcodeData = JSON.parse(jsonData);
            console.log('Barcode Scanned data:', barcodeData);
            
            const id = barcodeData.id;
            console.log('Scanning QR data:', { id });
            requestScanReedem(barcodeData);
        } catch (error) {
            console.error('Error parsing barcode data:', error);
            // Provide a fallback mechanism here, such as logging an error message or handling it accordingly
        }
    };
    
    const toggleFlash = () => {
        setFlashOn(prevState => !prevState);
    };

    function uplodeImage() {
        ImageCropPicker.openPicker({
            cropping: true
        }).then(image => {
            console.log(image?.path)
            setImageUri(image?.path);
            ImageScanner(image?.path);
        });
    }

    function ImageScanner(ImagePath) {
        if (!ImagePath) {
            Alert.alert('please select a proper image');
            return;
        }
        RNQRGenerator.detect({
            uri: ImagePath
        })
            .then(response => {
                console.log('Scanned QR code response:', response);
                const { values } = response;
                navigation.goBack();
                Alert.alert('Scanned QR codes from image:', values.join('\n'));
            })
            .catch(error => {
                Alert.alert('Cannot detect QR code in image', error);
            });
    }

    const requestScanReedem = async (data) => {
        let body = {
            id: data?.id,
            type: data?.type,
            qty: data?.qty,
            uniqueCode: data?.uniqueCode
        }
        console.log('scan body', body)
        setLoading(true)
        let response = await RequestScanReedem({ body, navigation })
        if (typeof response === 'string') {
            console.log(response);
        } else {
            if (response.data.status === 1) {
                console.log(response?.data?.data);
                Alert.alert(response?.data?.message);
                setScanReedemData(response?.data?.data);
                navigation.goBack();
            } else {
                Alert.alert(response?.data?.message)
            }
        }
        setLoading(false)
    }

    return (
        <View style={{ flex: 1, }}>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
            <ImageBackground style={styles.backgroundImage} source={Images.appBackgroundImage} resizeMode='cover' >
                <Loader animating={loading} />

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