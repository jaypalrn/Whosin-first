import { View, Text, ImageBackground, Image, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Images } from '../../utilities/styles/Images'
import ExtraBoldText from '../../components/common/ExtraBoldText'
import { windowHeight } from '../../utilities/styles/Index'
import { useSelector } from 'react-redux'

const SplashScreen = ({navigation}) => {

    const [timer, setTimer] = useState(null)


    const handleNavigation = () => {
        setTimeout(() => {
            navigation.replace('HomeScreen')
        }, 3000);
    }

    useEffect(() => {
        handleNavigation()
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
            <ImageBackground
                source={Images.SplashbackGround}
                style={{ height: '100%', width: '100%', justifyContent: 'center' }}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Images.WhiteappLogo} style={{ height: windowHeight / 8, width: '100%' }} resizeMode='contain' />
                    <ExtraBoldText mainStyle={{ marginTop: 15 }} txt={`WHOS'IN`} fontSize={25} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default SplashScreen