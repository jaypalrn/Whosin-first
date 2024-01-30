import { View, Text, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../utilities/styles/Images'
import { windowHeight, windowWidth } from '../../utilities/styles/Index'
import BoldText from '../../components/common/ExtraBoldText'
import RegularText from '../../components/common/RegularText'
import TextInputComponent from '../../components/common/TextInputComponent'
import { BackArrowIcon } from '../../utilities/styles/Icons'
import NormalBtn from '../../components/common/NormalBtn'
import Colors from '../../utilities/styles/Colors'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [paasword, setPassword] = useState('');


    return (
        <View style={{ flex: 1, }}>
            <StatusBar backgroundColor={Colors.black.color} barStyle="light-content" />
            <ImageBackground style={{ height: '100%', width: '100%' }} source={Images.appBackgroundImage}>
                <View style={{ flex: 1, borderWidth: 1, justifyContent: 'center', paddingHorizontal: 25 }}>
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Image
                            source={Images.appLogo}
                            style={{ height: windowHeight / 10, width: windowWidth }}
                            resizeMode='contain'
                        />

                        <BoldText mainStyle={{ marginTop: 30 }} txt={'Welcome to WhoisIN'} />
                        <RegularText mainStyle={{ marginTop: 10 }} txt={'Sign up or Login to enjoy our best features'} />
                    </View>
                    <TextInputComponent
                        style={{ marginTop: 40 }}
                        hintText={'Enter email or Mobile Number'}
                        onTextChange={(text) => setEmail(text)}
                        value={email}
                    />

                    <TextInputComponent
                        style={{ marginTop: 20 }}
                        hintText={'Enter Password'}
                        onTextChange={(text) => setPassword(text)}
                        value={paasword}
                        isPassword={true}
                    />

                    <TouchableOpacity style={{ marginTop: 35 }} onPress={() => navigation.navigate('HomeScreen')} >
                        <NormalBtn title={'Login'} />
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen