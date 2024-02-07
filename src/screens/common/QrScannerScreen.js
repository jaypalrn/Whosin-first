import { View, Text, Alert, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner, useFrameProcessor } from 'react-native-vision-camera';
import BoldText from '../../components/common/BoldText';
import Colors from '../../utilities/styles/Colors';
import { CloseIcon, FlashOffIcon, FlashOnIcon } from '../../utilities/styles/Icons';
import ImageCropPicker from 'react-native-image-crop-picker';
import { boldFont } from '../../utilities/styles/Themes';
import RNQRGenerator from 'rn-qr-generator';

const QrScannerScreen = ({ navigation }) => {

    const { hasPermission, requestPermission } = useCameraPermission()

    const [isScanning, setScanning] = useState(true);
    const [isFlashlightOn, setFlashlightOn] = useState(false);
    const [imageUri, setImageUri] = useState('');

    function uplodeImage() {
        ImageCropPicker.openPicker({
            width: 400,
            height: 400,
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
        console.log('imagePath', ImagePath);
        const fileURL = `file://${ImagePath}`;
        RNQRGenerator.detect({ uri: fileURL })
            .then(response => {
                console.log('Scanned QR code response:', response);
                const { values } = response;
                Alert.alert('Scanned QR codes from image:', values.join('\n'));
            })
            .catch(error => {
                Alert.alert('Cannot detect QR code in image', error);
            });
    }

    const device = useCameraDevice('back');

    useEffect(() => {
        if (!hasPermission) {
            requestPermission();
        }
    }, [hasPermission])

    console.log('has permission', hasPermission);

    if (device == null) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <BoldText txt={'please Give permission correctly'} txtColor={Colors.black.color} />
        </View>
    )

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            if (isScanning && codes.length > 0) {
                setScanning(false);
                Alert.alert(codes[0]?.value);
                console.log(codes[0]?.value);
            }
        }
    })

    const toggleFlashlight = () => {
        setFlashlightOn(!isFlashlightOn);
    };

    return (
        <View style={{ flex: 1, backgroundColor: 'grey' }}>
            <Camera
                style={{ flex: 1 }}
                device={device}
                isActive={true}
                codeScanner={codeScanner}
                torch={isFlashlightOn ? 'on' : 'off'}
            />
            {isScanning && (
                <View style={styles.scanningFrameContainer}>
                    <View style={styles.scanningFrame} />
                </View>
            )}
            <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
                <CloseIcon />
            </TouchableOpacity>

            <TouchableOpacity style={styles.flashlightButton} onPress={toggleFlashlight}>
                <BoldText txt={isFlashlightOn ? <FlashOnIcon /> : <FlashOffIcon />} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.uploadGallary} onPress={uplodeImage}>
                <Text style={[boldFont({ size: 16, color: Colors.darkGrey.color }), { textAlign: 'center' }]}>{'Upload From Gallary'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    scanningFrameContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scanningFrame: {
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 10,
        width: 200,
        height: 200,
    },
    flashlightButton: {
        position: 'absolute',
        top: 60,
        right: 16,
        padding: 8,
        backgroundColor: Colors.grey.color,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.black.color,
    },
    closeButton: {
        position: 'absolute',
        top: 60,
        left: 16,
        padding: 5,
        backgroundColor: Colors.grey.color,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.black.color,
    },
    uploadGallary: {
        position: 'absolute',
        bottom: 30,
        left: '10%',
        right: '10%',
        padding: 10,
        backgroundColor: Colors.grey.color,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.black.color,
    }
});

export default QrScannerScreen