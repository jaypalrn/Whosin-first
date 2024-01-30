import { View, Text, ImageBackground, StyleSheet, Image, StatusBar, Platform, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/common/Header'
import Colors from '../../utilities/styles/Colors'
import { ScannerIcon } from '../../utilities/styles/Icons'
import { Images } from '../../utilities/styles/Images'
import TopBarNavigation from '../../routes/TopBarNavigation'
import { BlurView } from '@react-native-community/blur'

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

                <TouchableOpacity style={styles.scannerIconContainer}>
                    <BlurView
                        blurType="dark"
                        blurAmount={10}
                        overlayColor={'transparent'}
                        reducedTransparencyFallbackColor="dark"
                    >
                        <Image
                            style={{ height: 40, width: 40, borderRadius: 25, tintColor: Colors.grey.color }}
                            source={Images.qrCode}
                        />
                    </BlurView>
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
        borderRadius: 50,
        position: 'absolute',
        bottom: 30,
        left: '50%',
        marginLeft: -30,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.white.color,
        padding: 8,
        // backgroundColor:Colors.grey.color
    },
});

export default HomeScreen