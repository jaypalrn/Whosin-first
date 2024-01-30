import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from '../../components/common/Header'
import Colors from '../../utilities/styles/Colors'
import { ScannerIcon } from '../../utilities/styles/Icons'
import { Images } from '../../utilities/styles/Images'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.backgroundImage} source={Images.appBackgroundImage}>
                <Header
                    title={'title'}
                    titlePosition={"flex-start"}
                />

                <View style={styles.scannerIconContainer}>
                    <Image
                        style={{ height: 40, width: 40, borderRadius: 25, margin: 5 }}
                        source={Images.qrCode}
                    />
                </View>
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
    },
    scannerIconContainer: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.white.color,
        position: 'absolute',
        bottom: 30,
        left: '50%',
        marginLeft: -30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
});

export default HomeScreen