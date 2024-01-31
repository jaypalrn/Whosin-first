import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Images } from '../../utilities/styles/Images'
import ExtraBoldText from '../../components/common/ExtraBoldText'
import { windowHeight } from '../../utilities/styles/Index'

const SplashScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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