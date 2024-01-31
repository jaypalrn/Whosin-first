import { View, Text, ImageBackground, Image, TouchableOpacity, StatusBar, Alert } from 'react-native'
import React, { useState } from 'react'
import { Images } from '../../utilities/styles/Images'
import { windowHeight, windowWidth } from '../../utilities/styles/Index'
import BoldText from '../../components/common/ExtraBoldText'
import RegularText from '../../components/common/RegularText'
import TextInputComponent from '../../components/common/TextInputComponent'
import { BackArrowIcon } from '../../utilities/styles/Icons'
import NormalBtn from '../../components/common/NormalBtn'
import Colors from '../../utilities/styles/Colors'
import { Dropdown } from 'react-native-element-dropdown'
import { RFValue } from 'react-native-responsive-fontsize'
import { RequestLogin } from '../../utilities/api/apiController'

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginType, setLoginType] = useState('');


    const data = [
        { label: 'login as activity provider', value: 1 },
        { label: 'login as event organizer', value: 2 },
    ];

    async function goToNext() {
        if (email == null || email.length == 0) {
            Alert.alert("Please enter email");
            return
        }
        if (password == null || password.length == 0) {
            Alert.alert("Please enter Password");
            return
        }
        if (!isValideEmail(email)) {
            Alert.alert("Please enter valide email");
            return
        }

        requestLogin();
    }

    async function requestLogin() {

        var body = {
            email: email,
            password: password,
            type: loginType
        }

        setLoading(true)
        let response = await RequestLogin({ body, navigation });
        setLoading(false)
        if (response?.data?.status === 1) {
            navigation.replace("HomeScreen");
        } else {
            Alert.alert(response?.data?.message)
        }
    }

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
                        value={password}
                        isPassword={true}
                    />

                    <Dropdown
                        style={{ height: windowHeight / 20, borderColor: Colors.appColor.color, borderWidth: 1, borderRadius: 25, paddingHorizontal: 10, marginTop: 20, }}
                        placeholderStyle={{ color: '#FFFFFF80', fontSize: RFValue(14) }}
                        itemTextStyle={{ color: Colors.appColor.color }}
                        selectedTextStyle={{ color: Colors.white.color }}
                        data={data}
                        value={loginType}
                        onChange={(selectedItem) => { setLoginType(selectedItem.label); }}
                        labelField="label"
                        valueField="label"
                        placeholder='Select type'
                    />

                    <TouchableOpacity style={{ marginTop: 35 }} onPress={goToNext} >
                        <NormalBtn title={'Login'} />
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen