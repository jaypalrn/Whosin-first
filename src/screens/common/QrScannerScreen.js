import { View, Text, Alert, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera, useCameraDevice, useCameraPermission, useCodeScanner, useFrameProcessor } from 'react-native-vision-camera';
import BoldText from '../../components/common/BoldText';
import Colors from '../../utilities/styles/Colors';

const QrScannerScreen = () => {

    const { hasPermission, requestPermission } = useCameraPermission()

    const [isScanning, setScanning] = useState(true);
    const [isFlashlightOn, setFlashlightOn] = useState(false);

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
                Alert.alert(`Scanned ${codes.length} codes!`);
                console.log(`Scanned ${codes.length} codes!`);
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
                <View style={styles.scanningFrame} />
            )}
            <TouchableOpacity style={styles.flashlightButton} onPress={toggleFlashlight}>
                <BoldText txt={isFlashlightOn ? 'Turn Off Flashlight' : 'Turn On Flashlight'} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    scanningFrame: {
        ...StyleSheet.absoluteFillObject,
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 10,
    },
    flashlightButton: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        padding: 8,
        backgroundColor: Colors.white.color,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.black.color,
    },
});

export default QrScannerScreen